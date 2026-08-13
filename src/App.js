import './App.css';
import { Routes, Route } from 'react-router-dom';


import Map from './component/Map.jsx';
import Home from './Home';
import About from './About';
import User from './User';
import Getuser from './component/Getuser.jsx';
import GetAllUsers from './component/GetAllUsers.jsx';
import AddUser from './component/Adduser.jsx';
import Assignrole from './component/Assignrole.jsx'
import { useNavigate } from 'react-router-dom';

function App() {
  const navigate = useNavigate();
  return (
    <div className="App">

       <button onClick={() => navigate("/")}>
      Home
    </button>
      <Routes>
        <Route path="/assignrole" element={<Assignrole />}/>
        <Route path="/adduser" element={<AddUser />}/>
        <Route path="/getusers" element={<GetAllUsers />}/>
        <Route path="/getuser" element={<Getuser /> } />
        <Route path="/user" element={<User />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path='/map' element={<Map />} />
      </Routes>

    </div>
  );
}

export default App;