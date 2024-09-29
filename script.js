window.onload = function() {
    // Check if JsBarcode is available
    if (typeof JsBarcode === 'undefined') {
        console.error("JsBarcode library is not loaded.");
        return;
    }

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

    // Check if the canvas element exists
    const canvas = document.getElementById("barcodeCanvas");
    if (!canvas) {
        console.error("Canvas element not found.");
        return;
    }

    // Generate the first barcode from the list
    generateBarcode(barcodeNumbers[0]);

    // Function to generate the barcode using JsBarcode
    function generateBarcode(number) {
        try {
            JsBarcode("#barcodeCanvas", number, {
                format: "CODE128",
                lineColor: "#000",
                width: 1120,
                height: 100,
                displayValue: true
            });
            console.log("Barcode generated for:", number);
        } catch (error) {
            console.error("Error generating barcode:", error);
        }
    }
};
