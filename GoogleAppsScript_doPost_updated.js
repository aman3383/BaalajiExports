/**
 * Updated doPost for Google Apps Script - paste this into your script.
 * The website sends JSON, not URL-encoded form data, so we parse JSON.
 */
function doPost(e) {
  try {
    if (!e || !e.postData || !e.postData.contents) {
      return ContentService.createTextOutput('Invalid request')
        .setMimeType(ContentService.MimeType.TEXT);
    }

    const raw = e.postData.contents;
    const type = (e.postData.type || '').toLowerCase();
    let data = {};

    if (type.indexOf('json') !== -1 || raw.trim().startsWith('{')) {
      // Website sends application/json
      data = JSON.parse(raw);
      // productTypes is an array in JSON; convert to string for sheet
      if (Array.isArray(data.productTypes)) {
        data.productTypes = data.productTypes.join(', ');
      }
    } else {
      // Fallback: URL-encoded form data
      const params = raw.split('&');
      params.forEach(function(param) {
        const parts = param.split('=');
        if (parts.length >= 2) {
          const key = decodeURIComponent(parts[0].replace(/\+/g, ' '));
          const value = decodeURIComponent(parts.slice(1).join('=').replace(/\+/g, ' '));
          data[key] = value;
        }
      });
    }

    // Get the active spreadsheet and sheet
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = ss.getActiveSheet();

    setupSpreadsheet();

    const timestamp = Utilities.formatDate(
      new Date(),
      "Asia/Kolkata",
      "MM/dd/yyyy HH:mm:ss"
    );

    const rowData = [
      timestamp,
      data.name || '',
      data.email || '',
      data.countryCode || '',
      data.phone || '',
      data.product || '',
      (data.productTypes && (typeof data.productTypes === 'string' ? data.productTypes : data.productTypes.join(', '))) || '',
      data.message || ''
    ];

    sheet.appendRow(rowData);

    Logger.log('Form submitted successfully');
    Logger.log('Data received: ' + JSON.stringify(data));

    return ContentService.createTextOutput('Success')
      .setMimeType(ContentService.MimeType.TEXT);

  } catch (error) {
    Logger.log('Error in form submission: ' + error.toString());
    Logger.log('Stack: ' + error.stack);
    return ContentService.createTextOutput('Error: ' + error.toString())
      .setMimeType(ContentService.MimeType.TEXT);
  }
}
