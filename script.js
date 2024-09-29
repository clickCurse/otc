window.onload = function() {
    // List of barcode numbers
    const barcodeNumbers = [
        '63681143237707254', '63681143237707361', '63681143237707478', '63681143237707726',
        '63681143237707361', '63681143237707478', '63681143237707254', '63681143237707478',
        '63681143237707502', '63681143237707361', '63681143237707478', '63681143237707726',
        '63681143237707478', '63681143237707478', '63681143237707726', '63681143237707254',
        '63681143237707833', '63681143237707361', '63681143237707254', '63681143237707833',
        '63681143237707726', '63681143237707254', '63681143237707478', '63681143237707833',
        '63681143237707726', '63681143237707502', '63681143237707833', '63681143237707502',
        '63681143237707833', '63681143237707254', '63681143237707361', '63681143237707726',
        '63681143237707726', '63681143237707361', '63681143237707254', '63681143237707833',
        '63681143237707502', '63681143237707726', '63681143237707254', '63681143237707254',
        '63681143237707254', '63681143237707726', '63681143237707478', '63681143237707478',
        '63681143237707726', '63681143237707478', '63681143237707726', '63681143237707478',
        '63681143237707254', '63681143237707502'
    ];

    // Generate the first barcode from the list
    generateBarcode(barcodeNumbers[0]);

    // Function to generate the barcode using JsBarcode
    function generateBarcode(number) {
        JsBarcode("#barcodeCanvas", number, {
            format: "CODE128",
            lineColor: "#000",
            width: 2,    // Adjust width for barcode bars
            height: 100, // Set height to match your fixed height
            displayValue: false  // Whether to display the number below the barcode
        });
    }
};
