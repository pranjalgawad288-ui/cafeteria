import { useEffect, useState } from "react"
import { supabase } from "../services/supabase"
import { Link } from "react-router-dom"

export default function Menu() {

  const [menu, setMenu] = useState([])

  useEffect(() => {
    fetchMenu()
  }, [])

  async function fetchMenu() {
    const { data } = await supabase.from("menu").select("*")
    setMenu(data)
  }

  return (
    <div style={{ padding: 20 }}>

      <h1>🍽️ Menu</h1>

      {menu.map(item => (
        <div key={item.id} style={cardStyle}>
          <h3>{item.name}</h3>
          <p>₹ {item.price}</p>
        </div>
      ))}

      <Link to="/cart">Go to Cart</Link>

    </div>
  )
}

const cardStyle = {
  border: "1px solid #ddd",
  margin: "10px",
  padding: "10px"
}