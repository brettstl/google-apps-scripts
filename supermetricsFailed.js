function sendEmails() {
  
  // ADD CUSTOM DATA HERE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  var managerEmail = "test@eamil.com "; // ADD YOUR EMAIL HERE!!!!!!
  var numberofSheets = 12; // ADD HOW MANY SHEETS YOU ARE TRACKING HERE!!!
  // END ADD CUSTOM DATA !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  
  var HTMLoutput = HtmlService.createHtmlOutput('<br>'); // does not work
  var nameNumber = (numberofSheets + 1);
  var errorExpression = /^Error.*/;
  // fetch and save Sheet name and Status messages
  var sheet = SpreadsheetApp.getActiveSheet();  
  var sheetNameRange = sheet.getRange(21, 4, nameNumber)  
  var sheetData = sheetNameRange.getValues();  
  var dataRange = sheet.getRange(21, 9, numberofSheets)  
  var data = dataRange.getValues();  
  // loop over data in Last Status here
  for (i in data) {  
    var row = data[i];  
    var errorSheet = sheetData[i]  
    var currentCell = row[0];  
    var regTest = errorExpression.test(currentCell);
    // email information below
    var subject = "please update this sheet: " + errorSheet;  
    var message = 'Supermetrics Has an error in sheet: ' + errorSheet + ". In the spreadsheet " + SpreadsheetApp.getActiveSpreadsheet().getName() + " ";
    if (regTest){ 
      MailApp.sendEmail(managerEmail, subject, message);
      Logger.log(message); //saving output to log
    }
  }
}

