import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useState } from "react";
import Routing from "./Routing";

import L from "leaflet";
import "leaflet/dist/leaflet.css";

import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});


function Map() {
  const [start, setStart] = useState([28.6139, 77.2090]);

  const end = [28.4595, 77.0266];

  return (
    <MapContainer
      center={[28.6139, 77.2090]}
      zoom={10}
      style={{ height: "500px", width: "100%" }}
    >
      <TileLayer
        attribution="© OpenStreetMap contributors"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <Marker
        position={[28.6139, 77.2090]}
        eventHandlers={{
          click: () => setStart([28.6139, 77.2090]),
        }}
      >
        <Popup>New Delhi </Popup>
      </Marker>

      <Marker
        position={[28.4595, 77.0266]}
        eventHandlers={{
          click: () => setStart([28.4595, 77.0266]),
        }}
      >
        <Popup>Gurugram </Popup>
      </Marker>

      <Marker
        position={[28.928774, 77.091278]}
        eventHandlers={{
          click: () => setStart([28.928774, 77.091278]),
        }}
      >
        <Popup>Sonipat </Popup>
      </Marker>

      <Marker
        position={[28.3560, 77.6456]}
        eventHandlers={{
          click: () => setStart([28.3560, 77.6456]),
        }}
      >
        <Popup>Noida </Popup>
      </Marker>

      <Routing start={start} end={end} />
    </MapContainer>
  );
}

export default Map;