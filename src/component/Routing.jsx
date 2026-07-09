import { useEffect } from "react";
import { useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet-routing-machine";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";

function Routing({ start, end }) {
  const map = useMap();

  useEffect(() => {
    const routingControl = L.Routing.control({
      waypoints: [
        L.latLng(start[0], start[1]),
        L.latLng(end[0], end[1]),
      ],
      routeWhileDragging: true,
      addWaypoints: false,
      draggableWaypoints: true,
      fitSelectedRoutes: true,
      collapsible: true,
      showAlternatives: false,
      show: true,
      formatter: new L.Routing.Formatter({
        language: "en",
      })
    }).addTo(map);

    return () => {
      if (routingControl) {
        map.removeControl(routingControl);
      }
    };
  }, [map, start, end]);

  return null;
}

export default Routing;