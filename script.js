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

    let currentIndex = 0; // Initialize current index

    // Function to generate the barcode using JsBarcode
    function generateBarcode(number) {
        JsBarcode("#barcodeCanvas", number, {
            format: "CODE128",
            lineColor: "#000",
            width: 4,  // Increase this to make the bars wider (default is 2)
            height: 150, // Increase this to make the barcode taller (default is 100)
            displayValue: true,  // Show the number below the barcode
            fontSize: 18 // Increase font size for the number (if it's too small)
        });
    }

    // Generate the first barcode
    generateBarcode(barcodeNumbers[currentIndex]);

    // Add a click event listener to the canvas to generate the next barcode on click
    document.getElementById("barcodeCanvas").addEventListener('click', function() {
        // Increment the index to show the next barcode
        currentIndex = (currentIndex + 1) % barcodeNumbers.length; // Loop back to start when reaching the end
        generateBarcode(barcodeNumbers[currentIndex]);
    });
};
