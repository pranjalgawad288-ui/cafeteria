import { useState } from "react"
import { supabase } from "../services/supabase"

export default function Cart() {

  const [orderPlaced, setOrderPlaced] = useState(false)

  async function placeOrder() {
    await supabase.from("orders").insert([
      { total: 200, status: "Pending" }
    ])

    setOrderPlaced(true)
  }

  return (
    <div style={{ padding: 20 }}>

      <h1>🛒 Cart</h1>

      <button onClick={placeOrder}>
        Place Order
      </button>

      {orderPlaced && <p>Order Placed ✅</p>}

    </div>
  )
}