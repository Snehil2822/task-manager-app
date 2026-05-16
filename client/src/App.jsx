import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [msg, setMsg] = useState("Loading...");

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/health")
      .then((res) => setMsg(res.data.message))
      .catch(() => setMsg("API connection failed"));
  }, []);

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial" }}>
      <h1>Task Manager App</h1>
      <p>Backend status: {msg}</p>
    </div>
  );
}

export default App;
