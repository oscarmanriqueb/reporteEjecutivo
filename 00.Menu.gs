function onOpen() {
  var ui = SpreadsheetApp.getUi();
  
  ui.createMenu('Lead Manager')
  .addItem('Enviar reporte', 'sendUpdate') 
  .addToUi();
}