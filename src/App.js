import './App.css';
import { Routes, Route } from 'react-router-dom';
//import L from 'leaflet';

import Map from './component/Map.jsx';
import Home from './Home';
import About from './About';
import User from './User';

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path="/user/:id" element={<User />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path='/map' element={<Map />} />
      </Routes>

    </div>
  );
}

export default App;