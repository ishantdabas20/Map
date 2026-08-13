import { useNavigate } from "react-router-dom";
import logo2 from './logo2.png';

function Home() {
  const navigate = useNavigate();
  const userId = 101;

  return (
    <div>
      <h2>This is Home page</h2>
       <header className="Header">
        <div style={{ backgroundColor: "" }}>
          Welcome
        </div>
        <img src={logo2} className="App-logo" alt="logo" />
       </header>
        <h1 style={{ color: "greenpink" }}>Hello world</h1>
        <h1 style={{ color: "redblue" }}>Hello React</h1>

    
    <button onClick={() => navigate("/about")}>
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