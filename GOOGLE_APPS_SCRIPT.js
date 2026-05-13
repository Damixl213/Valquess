// ---------------------------------------------------------------------------------------------------------
// SIMPLE & STABLE GOOGLE APPS SCRIPT FOR BOOKING
// ---------------------------------------------------------------------------------------------------------
// REVERTING TO CORE BASICS TO FIX PERMISSION AND DATA ISSUES.
// ---------------------------------------------------------------------------------------------------------

function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);
    
    // 1. OPEN SHEET (With Fallback)
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getSheetByName("Bookings");
    if (!sheet) {
      sheet = ss.getSheets()[0];
    }
    
    // 2. CREATE CALENDAR EVENT
    // The date comes in as "2024-03-24"
    // The time comes in as "9:00 AM"
    var combinedStr = data.date + ' ' + data.time; 
    var startDate = new Date(combinedStr);
    
    var endDate = new Date(startDate);
    endDate.setHours(startDate.getHours() + 1);
    
    var calendar = CalendarApp.getDefaultCalendar();
    
    var event = calendar.createEvent(
      "Consultation: " + data.service + " - " + data.name,
      startDate,
      endDate,
      {
        description: "Phone: " + data.phone + "\nMessage: " + data.message + "\n\nService: " + data.service,
        guests: data.email,
        sendInvites: true
      }
    );
    
    // 3. SEND EMAIL
    MailApp.sendEmail({
      to: data.email,
      subject: "ValQuess Consultation Confirmed",
      htmlBody: "<p>Hi " + data.name + ",<br>Your consultation is confirmed for " + data.date + " at " + data.time + ".</p><p>A calendar invite has been sent to you.</p>"
    });
    
    // 4. SAVE TO SPREADSHEET
    // We do this last so if it fails, at least the email/calendar works
    sheet.appendRow([
      new Date(),      // Timestamp
      data.name,       // Name
      data.email,      // Email
      data.phone,      // Phone
      data.service,    // Service Type
      data.date,       // Booking Date
      data.time,       // Booking Time
      data.message     // Message
    ]);

    // 5. RETURN SUCCESS
    return ContentService.createTextOutput(JSON.stringify({ 
      'result': 'success', 
      'message': 'Booking created successfully' 
    })).setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    // If something goes wrong, log it and return error
    Logger.log(error);
    return ContentService.createTextOutput(JSON.stringify({ 
      'result': 'error', 
      'error': error.toString() 
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  try {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getSheetByName("Projects");

    if (!sheet) {
      sheet = ss.getSheets()[0];
    }

    var values = sheet.getDataRange().getValues();

    if (values.length < 2) {
      return ContentService.createTextOutput(JSON.stringify({
        result: 'success',
        projects: []
      })).setMimeType(ContentService.MimeType.JSON);
    }

    var headers = values[0].map(function (header) {
      return String(header).trim();
    });

    var projects = values.slice(1).filter(function (row) {
      return row.some(function (cell) {
        return cell !== '' && cell !== null;
      });
    }).map(function (row) {
      var item = {};

      headers.forEach(function (header, index) {
        item[header] = row[index];
      });

      return {
        id: String(item.id || item.slug || ''),
        slug: String(item.slug || '').trim(),
        title: String(item.title || '').trim(),
        category: String(item.category || '').trim(),
        description: String(item.description || '').trim(),
        image: String(item.image || item.imageUrl || '').trim(),
        tags: String(item.tags || '').split(/[,|]/).map(function (tag) {
          return tag.trim();
        }).filter(function (tag) {
          return tag.length > 0;
        }),
        challenge: String(item.challenge || '').trim(),
        solution: String(item.solution || '').trim(),
        results: String(item.results || '').split(/[,|]/).map(function (result) {
          return result.trim();
        }).filter(function (result) {
          return result.length > 0;
        })
      };
    }).filter(function (project) {
      return project.slug && project.title;
    });

    return ContentService.createTextOutput(JSON.stringify({
      result: 'success',
      projects: projects
    })).setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    Logger.log(error);
    return ContentService.createTextOutput(JSON.stringify({
      result: 'error',
      error: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

// OPTIONAL: OPTIONS Handler (Fixes CORS issues sometimes)
function doOptions(e) {
  var output = ContentService.createTextOutput("");
  output.setMimeType(ContentService.MimeType.TEXT);
  return output;
}