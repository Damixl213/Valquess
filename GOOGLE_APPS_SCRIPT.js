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

// OPTIONAL: OPTIONS Handler (Fixes CORS issues sometimes)
function doOptions(e) {
  var output = ContentService.createTextOutput("");
  output.setMimeType(ContentService.MimeType.TEXT);
  return output;
}