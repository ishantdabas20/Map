import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";

function Home() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const userId = 101;

  const mode = process.env.REACT_APP_MODE;

  console.log("Node_ENV:",process.env.NODE_ENV);
  console.log("Mode:", process.env.REACT_APP_MODE);
  console.log("API URL:", process.env.REACT_APP_API_URL);


  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await fetch("http://localhost:8081/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password
        })
      });

      if (!response.ok) {
        throw new Error("Invalid id and password");
      }


      const token = await response.text();

      localStorage.setItem("token", token);

      console.log("Stored token:", localStorage.getItem("token"));

      alert("Login Successful!");
      navigate("/getuser");


    } catch (err) {
      setError(err.message);
    }
  }


  // Demo login check
  //if (username === "admin" && password === "12345") {
  //alert("Login Successful");
  //navigate(`/user/${userId}`);
  //} else {
  //alert("Invalid username or password");
  //}


  return (
    <div>
      <header className="Header">
        <div style={{ backgroundColor: "" }}>
          This is login page
        </div>
      </header>

      <div>
        <p>React Environment Mode</p>
        <p>
          Current Mode: {mode}
        </p>
      </div>
      <form onSubmit={handleLogin}>
        <div>
          <input
            type="text"
            placeholder="Enter Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>


        <div>
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>


        <button type="submit">
          Login
        </button>
      </form>


      {error && <p style={{ color: "red" }}>{error}</p>}



      <button onClick={() => navigate("/")}>
        Go to About
      </button>


      <button onClick={() => navigate(`/user/${userId}`)}>
        Go to User
      </button>


      <button onClick={() => navigate('/map')}>
        Map
      </button>

    </div>
  );
}

export default Home;