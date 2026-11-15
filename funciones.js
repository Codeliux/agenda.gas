function doGet() {
  return HtmlService.createTemplateFromFile('index').evaluate().setTitle('Agenda GAS');
}

/**
 * 
 * @param {string} nombre del archivo HTML a obtener. 
 * @returns 
 */
function obtenerDatosHTML(nombreArchivo) {
  return HtmlService.createHtmlOutputFromFile(nombreArchivo).getContent();
}