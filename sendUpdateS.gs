function sendUpdate() {
  var pdf = getPdf() // 1) Call the getPdf function
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Reporte");
  var numCts = sheet.getRange(36,3).getValue();
  var numRec = sheet.getRange(36,4).getValue();
  var valor = "C: "+numCts+" R: "+numRec;
  var email = "oscar.manrique@gmail.com";
//  var email = "oscar.manrique@artusleadmanager.page";
  
  sendEmailUpdate(email,pdf,valor) // 5) call the email function with the just generated attachment
}

function getPdf() {
  var currentSheetId = SpreadsheetApp.getActiveSpreadsheet().getId() // 2) Obtain the current ID (like you see in the url)
  var file = DriveApp.getFileById(currentSheetId) // 3) Ask the Drive App for the FILE with your id
  return file.getAs(MimeType.PDF) // 4) This file can be converted to a PDF
}

function sendEmailUpdate(emailAddress, attachment,valor) {
  
  var timeZone = Session.getScriptTimeZone();
//  var date = Utilities.formatDate(new Date(), timeZone, "yyyy-MM-dd HH:mm");
  var date = Utilities.formatDate(new Date(), timeZone, "MMM dd");
  var subject = "[Reporte "+date+"] "+valor;
  var body = "Cifras mensuales acumuladas.";
  
  MailApp.sendEmail(emailAddress, subject, body, { // 6 use the email address, set the subject and the body
    attachments: [attachment], // 7) add the attachment
    name: 'Contactos Digitales' // 8) use MyWeatherReport as name for that attachment
  })
}