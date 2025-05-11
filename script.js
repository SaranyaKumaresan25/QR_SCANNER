function onScanSuccess(decodedText, decodedResult) {
  console.log(`QR Code detected: ${decodedText}`);
  const videoPlayer = document.getElementById("video-player");
  videoPlayer.src = decodedText;
  videoPlayer.play();

  // Stop scanning after successful detection
  html5QrcodeScanner.clear();
}

var html5QrcodeScanner = new Html5QrcodeScanner(
  "qr-reader", 
  { fps: 10, qrbox: 250 }, 
  false
);
html5QrcodeScanner.render(onScanSuccess);
