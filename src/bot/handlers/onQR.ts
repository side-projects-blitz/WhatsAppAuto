import qrcode from "qrcode-terminal";

export function onQR(qr: string) {
  qrcode.generate(qr, { small: true });
  console.log("Escanea el QR con WhatsApp");
}
