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

    let currentIndex = 0; // Initialize the current index to track the displayed barcode

    // Function to generate the barcode using JsBarcode
    function generateBarcode(number) {
        const canvas = document.getElementById("barcodeCanvas");
        
        // Clear the canvas
        const ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear existing barcode

        // Generate the barcode
        JsBarcode(canvas, number, {
            format: "CODE128",
            lineColor: "#000",
            width: 2.5,  // Adjust the bar width to fit 560 pixels wide
            height: 150, // Barcode height
            displayValue: true,  // Show the number below the barcode
            fontSize: 18 // Adjust the font size for the barcode number
        });

        // Set the canvas width to exactly 560 pixels
        canvas.style.width = "560px";
        canvas.style.height = "auto"; // Maintain proportional height
    }

    // Generate the first barcode
    generateBarcode(barcodeNumbers[currentIndex]);

    // Add a click event listener to the canvas to cycle through the barcodes on tap
    document.getElementById("barcodeCanvas").addEventListener('click', function() {
        // Increment the index to show the next barcode
        currentIndex = (currentIndex + 1) % barcodeNumbers.length; // Loop back to the start if at the end
        generateBarcode(barcodeNumbers[currentIndex]);
    });
};
