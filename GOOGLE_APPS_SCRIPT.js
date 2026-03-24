// ---------------------------------------------------------------------------------------------------------
// UPDATED GOOGLE APPS SCRIPT (Based on your custom logic)
// ---------------------------------------------------------------------------------------------------------
// IMPORTANT SETUP INSTRUCTIONS:
// 1. In the Apps Script Editor, look at the left sidebar for "Services" (a big + button).
// 2. Click "+", scroll down to "Google Calendar API", select it, and click "add".
//    (This is required for 'Calendar.Events.insert' to work and generate the Meet link).
//
// 3. Make sure your Spreadsheet has a sheet tab named EXACTLY "Bookings".
// 4. Make sure your "Bookings" sheet has these headers in Row 1:
//    Timestamp | Name | Email | Phone | Service | Date | Time | Meet Link | Message
// ---------------------------------------------------------------------------------------------------------

function doPost(e) {
  try {
    // 1. Validate Input
    if (!e || !e.postData || !e.postData.contents) {
      return ContentService.createTextOutput(JSON.stringify({ error: "Invalid request" })).setMimeType(ContentService.MimeType.JSON);
    }
    
    const data = JSON.parse(e.postData.contents);
    
    // 2. OPEN SHEET
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    let sheet = ss.getSheetByName("Bookings");
    // Fallback: If "Bookings" sheet not found, use the first sheet
    if (!sheet) {
      sheet = ss.getSheets()[0];
    }
    
    // 3. PARSE DATE & TIME
    // Assumes your frontend format: "2024-03-24" (YYYY-MM-DD) and "9:00 AM" (12h format)
    const [year, month, day] = data.date.split("-").map(Number);
    // Note: JS Date constructor month is 0-indexed (Jan=0, Feb=1)
    const startDate = new Date(year, month - 1, day);
    
    const [timeStr, modifier] = data.time.split(" ");
    let [hours, minutes] = timeStr.split(":").map(Number);
    
    if (hours === 12) hours = 0;
    if (modifier === "PM") hours += 12;
    
    startDate.setHours(hours, minutes, 0, 0);
    
    const endDate = new Date(startDate);
    endDate.setHours(startDate.getHours() + 1); // Default 1 Hour Duration
    
    // 4. CREATE CALENDAR EVENT (Using Advanced Calendar API)
    // We use the Advanced Service (Calendar.*) instead of CalendarApp so we can get the Meet Link immediately.
    
    const eventResource = {
      summary: `ValQuess Consultation – ${data.service}`,
      location: "Google Meet",
      description: `Service: ${data.service}\nPhone: ${data.phone}\nMessage: ${data.message || "No message"}`,
      start: {
        dateTime: startDate.toISOString()
      },
      end: {
        dateTime: endDate.toISOString()
      },
      attendees: [
        { email: data.email } // Sends the standard Google Invite automatically unless overridden
      ],
      conferenceData: {
        createRequest: {
          requestId: Math.random().toString(36).substring(7),
          conferenceSolutionKey: { type: "hangoutsMeet" }
        }
      }
    };
    
    // Insert event into primary calendar with conference data (Meet Link) attached
    // "conferenceDataVersion: 1" is required to create a Meet link
    const event = Calendar.Events.insert(eventResource, 'primary', {
      conferenceDataVersion: 1,
      sendUpdates: 'all' // Send standard Google invite email
    });
    
    // Extract the Meet Link from the response
    const meetLink = event.hangoutLink || "Link Pending";
    
    // 5. SAVE TO SHEET
    sheet.appendRow([
      new Date(),           // Timestamp
      data.name,
      data.email,
      data.phone,
      data.service,
      startDate.toLocaleDateString(),
      data.time,
      meetLink,             // The Google Meet URL
      data.message
    ]);
    
    // 6. SEND BRANDED EMAIL (Optional)
    // Since Google sends a standard invite above (sendUpdates: 'all'), this is a second branded email.
    MailApp.sendEmail({
      to: data.email,
      subject: "Your ValQuess Consultation is Confirmed",
      htmlBody: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 8px;">
          <h2 style="color: #2C2C84; border-bottom: 2px solid #D4AF37; padding-bottom: 10px;">Consultation Confirmed</h2>
          <p>Hello <strong>${data.name}</strong>,</p>
          <p>Your consultation has been scheduled successfully. We look forward to discussing your project.</p>
          
          <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; margin: 20px 0;">
            <p style="margin: 5px 0;"><strong>Service:</strong> ${data.service}</p>
            <p style="margin: 5px 0;"><strong>Date:</strong> ${startDate.toLocaleDateString()}</p>
            <p style="margin: 5px 0;"><strong>Time:</strong> ${data.time} (1 Hour)</p>
          </div>
          
          <div style="text-align: center; margin: 30px 0;">
            <a href="${meetLink}" style="background-color: #D4AF37; color: white; padding: 12px 24px; text-decoration: none; border-radius: 4px; font-weight: bold;">Join Google Meet</a>
            <p style="margin-top: 10px; font-size: 12px; color: #666;">Link: <a href="${meetLink}">${meetLink}</a></p>
          </div>
          
          <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;">
          <p style="color: #666; font-size: 12px;"><strong>ValQuess Team</strong></p>
        </div>
      `
    });
    
    return ContentService.createTextOutput(JSON.stringify({ 
      success: true, 
      link: meetLink 
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch (err) {
    Logger.log(err.toString());
    return ContentService.createTextOutput(JSON.stringify({ 
      success: false, 
      error: err.toString() 
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

// OPTIONS Handler for CORS
function doOptions(e) {
  var output = ContentService.createTextOutput("");
  output.setMimeType(ContentService.MimeType.TEXT);
  return output;
}