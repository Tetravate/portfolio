/**
 * Tetravate Studio — Email-Only Project Inquiry Backend
 * Google Apps Script Web App (Code.gs)
 * 
 * Target Inbox: tetravate@gmail.com
 * No external databases, Google Sheets, or paid services required.
 */

var TARGET_EMAIL = "tetravate@gmail.com";

function doPost(e) {
  try {
    if (!e || !e.postData || !e.postData.contents) {
      return createJsonResponse({
        status: "error",
        message: "Invalid request: No payload provided."
      });
    }

    var data;
    try {
      data = JSON.parse(e.postData.contents);
    } catch (parseErr) {
      return createJsonResponse({
        status: "error",
        message: "Invalid JSON format."
      });
    }

    // 1. Honeypot Anti-Spam Check (hidden field filled only by automated bots)
    if (data.website && data.website.toString().trim().length > 0) {
      // Silently return success to spam bots without dispatching email
      return createJsonResponse({
        status: "success",
        message: "Inquiry processed successfully."
      });
    }

    // 2. Input Sanitization & Validation
    var name = (data.name || "").toString().trim();
    var email = (data.email || "").toString().trim();
    var message = (data.message || "").toString().trim();
    var company = (data.company || "Independent").toString().trim();
    var service = (data.service || "General Inquiry").toString().trim();
    var budget = (data.budget || "Flexible / To be discussed").toString().trim();
    var timeline = (data.timeline || "Flexible").toString().trim();
    var submittedAt = (data.submittedAt || new Date().toISOString()).toString().trim();

    if (!name) {
      return createJsonResponse({
        status: "error",
        message: "Name is required."
      });
    }

    // 3. Email Format Validation
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      return createJsonResponse({
        status: "error",
        message: "A valid email address is required."
      });
    }

    // 4. Message Length Validation
    if (!message || message.length < 10) {
      return createJsonResponse({
        status: "error",
        message: "Project description must be at least 10 characters."
      });
    }

    // 5. Compose Notification Email
    var subject = "New Project Inquiry: " + service + " from " + name + (company && company !== "Independent" ? " (" + company + ")" : "");
    
    var body = "Hello Tetravate Team,\n\n" +
      "A new project inquiry has been received via the website contact form:\n\n" +
      "==================================================\n" +
      "CLIENT DETAILS\n" +
      "==================================================\n" +
      "Name:              " + name + "\n" +
      "Email:             " + email + "\n" +
      "Company:           " + company + "\n" +
      "Service Needed:    " + service + "\n" +
      "Budget Range:      " + budget + "\n" +
      "Timeline:          " + timeline + "\n" +
      "Submitted At:      " + submittedAt + "\n\n" +
      "==================================================\n" +
      "PROJECT BRIEF / PROBLEM DESCRIPTION\n" +
      "==================================================\n" +
      message + "\n\n" +
      "==================================================\n" +
      "Note: Direct replies to this email will go directly to " + email + ".\n";

    // 6. Send Email Notification with Reply-To
    MailApp.sendEmail({
      to: TARGET_EMAIL,
      replyTo: email,
      subject: subject,
      body: body
    });

    // 7. Return Success only after MailApp.sendEmail succeeds
    return createJsonResponse({
      status: "success",
      message: "Inquiry delivered successfully to " + TARGET_EMAIL
    });

  } catch (err) {
    Logger.log("Error processing inquiry: " + err.toString());
    // Generic error response to client
    return createJsonResponse({
      status: "error",
      message: "An unexpected error occurred while delivering your inquiry."
    });
  }
}

function doGet(e) {
  return createJsonResponse({
    status: "ok",
    message: "Tetravate Studio Inquiry Webhook endpoint is active."
  });
}

function createJsonResponse(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
