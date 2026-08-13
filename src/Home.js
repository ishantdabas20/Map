import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setCredentials } from "./redux/authSlice";
import loginApi from "./api/loginApi";

function Home() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const auth = useSelector((state) => state.auth);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const mode = process.env.REACT_APP_MODE;

  console.log("Node_ENV:", process.env.NODE_ENV);
  console.log("Mode:", process.env.REACT_APP_MODE);
  console.log("API URL:", process.env.REACT_APP_API_URL);

  console.log("Redux Auth:", auth);

  const handleLogin = async (e) => {
    e.preventDefault();

    setError("");
    setLoading(true);

    try {

      const token = await loginApi(username, password);

      console.log("JWT received");

      localStorage.setItem("token", token);

      dispatch(
        setCredentials({
          token: token,
          username: username,
        })
      );

      console.log("Login successful");

      alert("Login Successful!");

      navigate("/getuser");

    } catch (err) {
      console.error("Login error:", err);

      setError(err.message);

    } finally {
      setLoading(false);
    }
  };

  return (
    <div class = "box">
      <div>
      <header className="Header">
        <div>
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
            required
          />
        </div>

        <div>
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button
          type="submit"
          disabled={loading}
        >
          {loading ? "Logging in..." : "Login"}
        </button>

      </form>

      {error && (
        <p style={{ color: "red" }}>
          {error}
        </p>
      )}

      <button onClick={() => navigate("/")}>
        Go to About
      </button>

      <button onClick={() => navigate("/map")}>
        Map
      </button>
    </div>
    </div>
  );
}

export default Home;