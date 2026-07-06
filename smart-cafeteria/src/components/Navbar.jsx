import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <div style={{ padding: 10, background: "#333", color: "white" }}>
      <Link to="/" style={{ margin: 10, color: "white" }}>Home</Link>
      <Link to="/menu" style={{ margin: 10, color: "white" }}>Menu</Link>
      <Link to="/cart" style={{ margin: 10, color: "white" }}>Cart</Link>
      <Link to="/admin" style={{ margin: 10, color: "white" }}>Admin</Link>
    </div>
  )
}