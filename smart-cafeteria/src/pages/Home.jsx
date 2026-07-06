import { Link } from "react-router-dom"

export default function Home() {
  return (
    <div style={styles.container}>

      <h1>☕ Smart Cafeteria</h1>
      <p>Scan QR → Order Food → Enjoy</p>

      <Link to="/menu">
        <button style={styles.btn}>Start Ordering</button>
      </Link>

      <br /><br />

      <Link to="/scan">
        <button style={styles.btn2}>Scan QR</button>
      </Link>

    </div>
  )
}

const styles = {
  container: {
    textAlign: "center",
    marginTop: "100px"
  },
  btn: {
    padding: "10px 20px",
    background: "orange",
    border: "none",
    color: "white",
    marginTop: "10px"
  },
  btn2: {
    padding: "10px 20px",
    background: "black",
    border: "none",
    color: "white",
    marginTop: "10px"
  }
}