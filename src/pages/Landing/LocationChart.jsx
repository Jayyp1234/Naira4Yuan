import React, { useEffect, useState, useRef } from "react";
import { GoogleMap, LoadScript, Marker, Polygon, Autocomplete } from "@react-google-maps/api";
import * as turf from "@turf/turf";

const GOOGLE_MAPS_API_KEY = "AIzaSyCJlqCyfNpGceBdAO1e3cFZJh7G3o9egMs"; // Replace with your actual key
const defaultCenter = { lat: 6.5244, lng: 3.3792 }; // Lagos, Nigeria
const nigeriaBounds = { north: 13.8659, south: 4.2406, west: 2.6769, east: 14.6780 };

const mapContainerStyle = {
  width: "100%",
  height: "500px",
};

const MapComponent = () => {
  const [mapType, setMapType] = useState("roadmap");
  const [points, setPoints] = useState([]);
  const [totalArea, setTotalArea] = useState(0);
  const [searchBox, setSearchBox] = useState(null);
  const mapRef = useRef(null);

  // Handle place selection
  const onPlaceSelected = () => {
    const place = searchBox.getPlace();
    if (place && place.geometry) {
      const location = {
        lat: place.geometry.location.lat(),
        lng: place.geometry.location.lng(),
      };
      mapRef.current.panTo(location);
      mapRef.current.setZoom(14);
    }
  };

  // Handle map clicks to add points
  const handleMapClick = (event) => {
    const newPoint = { lat: event.latLng.lat(), lng: event.latLng.lng() };
    setPoints((prev) => [...prev, newPoint]);
  };

  // Remove last point
  const removeLastPoint = () => {
    setPoints((prev) => prev.slice(0, -1));
  };

  // Remove all points
  const removeAllPoints = () => {
    setPoints([]);
    setTotalArea(0);
  };

  // Ensure polygon closes correctly
  const getClosedPolygon = () => {
    if (points.length < 3) return null;
    const closedPolygon = [...points, points[0]]; // Close the polygon
    return closedPolygon;
  };

  // Calculate area when points change
  useEffect(() => {
    if (points.length >= 3) {
      try {
        const coordinates = points.map((p) => [p.lng, p.lat]);
        const closedPolygon = [...coordinates, coordinates[0]]; // Close the polygon
        const polygon = turf.polygon([closedPolygon]);
        const area = turf.area(polygon) / 10000; // Convert to hectares
        setTotalArea(area.toFixed(2));
      } catch (error) {
        console.error("Error calculating area:", error);
      }
    } else {
      setTotalArea(0);
    }
  }, [points]);

  return (
    <LoadScript googleMapsApiKey={GOOGLE_MAPS_API_KEY} libraries={["places"]}>
      <div style={{ textAlign: "center", marginBottom: "10px" }}>
        <Autocomplete onLoad={setSearchBox} onPlaceChanged={onPlaceSelected} restrictions={{ country: "NG" }}>
          <input
            type="text"
            placeholder="Search Address in Nigeria"
            style={{
              width: "300px",
              padding: "10px",
              marginBottom: "10px",
              border: "1px solid #ccc",
              borderRadius: "5px",
            }}
          />
        </Autocomplete>
      </div>

      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={defaultCenter}
        zoom={12}
        mapTypeId={mapType}
        onClick={handleMapClick}
        onLoad={(map) => (mapRef.current = map)}
        options={{ restriction: { latLngBounds: nigeriaBounds, strictBounds: true } }}
      >
        {points.map((point, index) => (
          <Marker key={index} position={point} />
        ))}

        {/* Draw polygon only if valid */}
        {points.length >= 3 && (
          <Polygon
            paths={getClosedPolygon()}
            options={{ fillColor: "blue", fillOpacity: 0.3, strokeColor: "blue" }}
          />
        )}
      </GoogleMap>

      <div style={{ textAlign: "center", marginTop: "10px" }}>
        <button onClick={() => setMapType("roadmap")} style={{ padding: "8px", marginRight: "5px", background: "blue", color: "white" }}>
          Map
        </button>
        <button onClick={() => setMapType("satellite")} style={{ padding: "8px", background: "green", color: "white" }}>
          Satellite
        </button>
      </div>

      <div style={{ textAlign: "center", marginTop: "10px" }}>
        <button onClick={removeLastPoint} style={{ padding: "8px", marginRight: "5px", background: "red", color: "white" }}>
          Remove Last Point
        </button>
        <button onClick={removeAllPoints} style={{ padding: "8px", background: "red", color: "white" }}>
          Remove All Points
        </button>
      </div>

      <div style={{ textAlign: "center", marginTop: "10px", fontSize: "16px", fontWeight: "bold" }}>
        Total Area: {totalArea} hectares
      </div>

      <div style={{ textAlign: "center", marginTop: "10px" }}>
        <button
          onClick={() => alert("Data submitted for processing!")}
          style={{
            padding: "10px",
            background: "#00A86B",
            color: "white",
            fontSize: "16px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Submit For Pre-Processing
        </button>
      </div>
    </LoadScript>
  );
};

export default MapComponent;
