import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

import icon from "leaflet/dist/images/marker-icon.png";
import iconRetina from "leaflet/dist/images/marker-icon-2x.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

// ✅ Fix marker icon issue
L.Icon.Default.mergeOptions({
  iconRetinaUrl: iconRetina,
  iconUrl: icon,
  shadowUrl: iconShadow,
});

const MyMap = () => {
  const position = [30.369472, 77.817472]; // Your provided coordinates

  return (
    <div className="relative z-0">
      <MapContainer
        center={position}
        zoom={15}
        style={{ height: "400px", width: "100%" }}
      >
        {/* 🌍 Satellite View */}
        <TileLayer
          url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
          attribution='Tiles &copy; <a href="https://www.esri.com/">Esri</a>'
        />
        <Marker position={position}>
          <Popup>
            Your Property Location
            <br /> 30°22'10.1"N 77°49'02.9"E
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default MyMap;
