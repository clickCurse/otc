const barcodes = [
    './images/upc/Barcode (1).asp',
'./images/upc/Barcode (2).asp',
'./images/upc/Barcode (3).asp',
'./images/upc/Barcode (4).asp',
'./images/upc/Barcode (5).asp',
'./images/upc/Barcode (6).asp',
'./images/upc/Barcode (7).asp',
'./images/upc/Barcode (8).asp',
'./images/upc/Barcode (9).asp',
'./images/upc/Barcode (10).asp',
'./images/upc/Barcode (11).asp',
'./images/upc/Barcode (12).asp',
'./images/upc/Barcode (13).asp',
'./images/upc/Barcode (14).asp',
'./images/upc/Barcode (15).asp',
'./images/upc/Barcode (16).asp',
'./images/upc/Barcode (17).asp',
'./images/upc/Barcode (18).asp',
'./images/upc/Barcode (19).asp',
'./images/upc/Barcode (20).asp',
'./images/upc/Barcode (21).asp',
'./images/upc/Barcode (22).asp',
'./images/upc/Barcode (23).asp',
'./images/upc/Barcode (24).asp',
'./images/upc/Barcode (25).asp',
'./images/upc/Barcode (26).asp',
'./images/upc/Barcode (27).asp',
'./images/upc/Barcode (28).asp',
'./images/upc/Barcode (29).asp',
'./images/upc/Barcode (30).asp',
'./images/upc/Barcode (31).asp',
'./images/upc/Barcode (32).asp',
'./images/upc/Barcode (33).asp',
'./images/upc/Barcode (34).asp',
'./images/upc/Barcode (35).asp',
'./images/upc/Barcode (36).asp',
'./images/upc/Barcode (37).asp',
'./images/upc/Barcode (38).asp',
'./images/upc/Barcode (39).asp',
'./images/upc/Barcode (40).asp',
'./images/upc/Barcode (41).asp',
'./images/upc/Barcode (42).asp',
'./images/upc/Barcode (43).asp',
'./images/upc/Barcode (44).asp',
'./images/upc/Barcode (45).asp',
'./images/upc/Barcode (46).asp',
'./images/upc/Barcode (47).asp',
'./images/upc/Barcode (48).asp',
'./images/upc/Bar1.asp',
'./images/upc/Bar2.asp',
'./images/upc/Bar3.asp',
'./images/upc/Bar4.asp',
'./images/upc/Bar5.asp',
'./images/upc/Bar6.asp',
    // Add more barcode paths as needed
];

let currentIndex = 0;

const barcodeImage = document.getElementById('barcode');

// Ensure the barcode image is loaded before adding the event listener
barcodeImage.onload = function() {
    barcodeImage.addEventListener('click', updateBarcode);
};

function updateBarcode() {
    currentIndex = (currentIndex + 1) % barcodes.length; // Cycle through barcodes
    barcodeImage.src = barcodes[currentIndex];
}

// Initial load
barcodeImage.src = barcodes[currentIndex];
