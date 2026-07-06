import { useEffect } from "react"
import { Html5QrcodeScanner } from "html5-qrcode"
import { useNavigate } from "react-router-dom"

export default function QRScanner() {

  const nav = useNavigate()

  useEffect(() => {

    const scanner = new Html5QrcodeScanner("reader", {
      fps: 10,
      qrbox: 250
    })

    scanner.render((result) => {
      scanner.clear()
      nav(result)
    })

  }, [])

  return (
    <div style={{ padding: 20 }}>

      <h1>📷 Scan QR</h1>

      <div id="reader"></div>

    </div>
  )
}