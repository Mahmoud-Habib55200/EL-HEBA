import React, { useState } from "react";
import { GoogleMap, LoadScript, Marker, InfoWindow } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "450px",
  borderRadius: "12px",
  boxShadow: "0 6px 15px rgba(0, 0, 0, 0.2)",
};

const center = {
  lat: 30.583729, // إحداثيات الشركة
  lng: 32.2191385,
};

// تصميم مخصص للخريطة (Retro Theme)
const mapStyles = [
  { elementType: "geometry", stylers: [{ color: "#ebe3cd" }] },
  { elementType: "labels.text.fill", stylers: [{ color: "#523735" }] },
  { elementType: "labels.text.stroke", stylers: [{ color: "#f5f1e6" }] },
  { featureType: "water", elementType: "geometry", stylers: [{ color: "#c9e6ff" }] },
  { featureType: "road", elementType: "geometry", stylers: [{ color: "#ffffff" }] },
];

const MapComponent = () => {
  const [selected, setSelected] = useState(null);

  return (
    <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={14}
        options={{
          styles: mapStyles,
          disableDefaultUI: true,
          zoomControl: true,
        }}
      >
        {/* Marker for the company */}
        <Marker position={center} onClick={() => setSelected(center)} />

        {/* Info Window when clicking on the marker */}
        {selected && (
          <InfoWindow
            position={selected}
            onCloseClick={() => setSelected(null)}
          >
            <div className="p-2">
              <h3 className="text-lg font-semibold text-gray-700">El Heba Co.</h3>
              <p className="text-sm text-gray-500">
                Second Industrial Area, Ismailia, Egypt
              </p>
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    </LoadScript>
  );
};

export default MapComponent;
