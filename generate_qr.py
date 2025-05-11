import qrcode

# Use your local IP address
video_url = "http://192.168.56.28:8000/videos/sample.mp4"

qr = qrcode.make(video_url)
qr.save("video_qr.png")

print("✅ QR code saved as video_qr.png")
