import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "./pages/Home"
import Menu from "./pages/Menu"
import Cart from "./pages/Cart"
import Login from "./pages/Login"
import Admin from "./pages/Admin"
import QRScanner from "./pages/QRScanner"
import QRGenerator from "./pages/QRGenerator"

export default function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/cart" element={<Cart />} />

        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<Admin />} />

        <Route path="/scan" element={<QRScanner />} />
        <Route path="/qr" element={<QRGenerator />} />

      </Routes>

    </BrowserRouter>
  )
}