import { QRCodeSVG } from "qrcode.react";

export default function QRGenerator() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>QR Generator</h1>

      <QRCodeSVG
        value="http://localhost:5173/menu?table=1"
        size={200}
      />

      <p>Table 1</p>
    </div>
  );
}