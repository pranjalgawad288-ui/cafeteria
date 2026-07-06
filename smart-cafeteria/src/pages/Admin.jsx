import { useEffect, useState } from "react"
import { supabase } from "../services/supabase"

export default function Admin() {

  const [orders, setOrders] = useState([])

  useEffect(() => {
    loadOrders()
  }, [])

  async function loadOrders() {
    const { data } = await supabase.from("orders").select("*")
    setOrders(data)
  }

  async function update(id) {
    await supabase
      .from("orders")
      .update({ status: "Done" })
      .eq("id", id)

    loadOrders()
  }

  return (
    <div style={{ padding: 20 }}>

      <h1>Admin Dashboard</h1>

      {orders.map(o => (
        <div key={o.id} style={card}>
          <p>Order: {o.id}</p>
          <p>Status: {o.status}</p>

          <button onClick={() => update(o.id)}>
            Mark Done
          </button>
        </div>
      ))}

    </div>
  )
}

const card = {
  border: "1px solid gray",
  margin: 10,
  padding: 10
}