import { useState } from "react"
import { supabase } from "../services/supabase"
import { useNavigate } from "react-router-dom"

export default function Login() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const nav = useNavigate()

  async function login() {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password
    })

    if (!error) {
      nav("/admin")
    } else {
      alert(error.message)
    }
  }

  return (
    <div style={{ padding: 20 }}>

      <h1>Login</h1>

      <input placeholder="email" onChange={e => setEmail(e.target.value)} />
      <br /><br />

      <input type="password" placeholder="password"
        onChange={e => setPassword(e.target.value)} />

      <br /><br />

      <button onClick={login}>Login</button>

    </div>
  )
}