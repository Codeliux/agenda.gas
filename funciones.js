function doGet() {
  return HtmlService.createTemplateFromFile('index').evaluate().setTitle('Agenda GAS');
}

/**
 * Obtiene el contenido de un archivo HTML y lo devuelve como una cadena.
 * @param {string} nombre del archivo HTML a obtener. 
 * @returns {string} El contenido del archivo HTML.
 */
function obtenerDatosHTML(nombreArchivo) {
  return HtmlService.createHtmlOutputFromFile(nombreArchivo).getContent();
}

/**
 * Obtiene los contactos de la hoja de cálculo y los devuelve como una matriz.
 * @returns {Array<Array>} Una matriz de valores.
 */
function obtenerContactos() {
  let hoja = SpreadsheetApp.openById('1P6FG4PUGSpZkYGPjBpRlu4HxNA8by4885jmsQbzN4jE').getActiveSheet();
  let datos = hoja.getDataRange().getValues();
  return datos;
}