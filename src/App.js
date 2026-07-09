import './App.css';
import { Routes, Route } from 'react-router-dom';
//import L from 'leaflet';

import Map from './component/Map.jsx';
import Home from './Home';
import About from './About';
import User from './User';

function App() {
  /*const map = L.map("map").setView(
    [28.6139, 77.2090], 10
  );
  
  L.tileLayer(
    "https://tile.openstreetmap.org/{z}/{x}/{y}.png",
    {
        attribution: "© OpenStreetMap contributors"
    }
).addTo(map);
const marker = L.marker([28.6139, 77.2090]).addTo(map);

marker.bindPopup(`
    <h3>New Delhi</h3>
    <p>India Capital City</p>
`)
.openPopup();*/

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