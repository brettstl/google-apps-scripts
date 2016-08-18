function sendEmails() {
  // get the name of the sheet
  function sheetName() {
  return SpreadsheetApp.getActiveSpreadsheet().getActiveSheet().getName();
  }
  
  var sheet = SpreadsheetApp.getActiveSheet();
  var startRow = 21;  // First row of data to process
  var numRows = 2;   // Number of rows to process
  // Fetch the range of cells A2:B3
  var dataRange = sheet.getRange(startRow, 1, numRows, 2)
  // Fetch values for each row in the Range.
  var data = dataRange.getValues();
  for (i in data) {
    var row = data[i];
    var errorMessage = row[0];
    var message = errorMessage; 
    var subject = 'Supermetrics Has an error in' + row[1] + " " + SpreadsheetApp.getActiveSpreadsheet().getName();
    if (errorMessage != "Date"){
    MailApp.sendEmail("blohmeyer@hlkagency.com", subject, message);
    }
  }
}
