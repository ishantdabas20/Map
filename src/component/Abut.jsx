import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <button onClick={() => navigate("/about")}>
      Go to About
    </button>
  );
}

export default Home;