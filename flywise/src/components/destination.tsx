import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useState } from 'react';


const DestinationsCard = ({title, description, url, imageUrl, index}) =>(
        <div key={index} className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <img className="p-8 rounded-t-lg" src={imageUrl} alt={title}/>
            <h3 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{title}</h3>
            <p>{description}</p>
            <a href={url} target="_blank" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-0.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" rel="noopener noreferrer">Read more</a>
        </div>
);

const Destinations = () => {
    const [position, setPosition] = useState([51.505, -0.09]); // Default position (London)
  const [userInput, setUserInput] = useState('');

  // Function to handle user input change
  const handleInputChange = (event) => {
    setUserInput(event.target.value);
  };

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Here, you can perform geocoding to convert user input (address) into coordinates
    // For simplicity, we'll directly use OpenStreetMap's Nominatim API for geocoding
    fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${userInput}`)
      .then((response) => response.json())
      .then((data) => {
        if (data && data.length > 0) {
          const { lat, lon } = data[0];
          setPosition([parseFloat(lat), parseFloat(lon)]);
        } else {
          alert('Location not found');
        }
      })
      .catch((error) => {
        console.error('Error fetching location:', error);
        alert('Error fetching location');
      });
  };

  // Custom hook to move the map to center around the marker
  function ChangeMapView({ center }) {
    const map = useMap();
    map.setView(center);
    return null;
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter location"
          value={userInput}
          onChange={handleInputChange}
        />
        <button type="submit">Search</button>
      </form>
      <MapContainer center={position} zoom={13} style={{ height: "400px", width: "100%" }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position}>
          <Popup>
            {userInput ? userInput : 'Selected location'}
          </Popup>
        </Marker>
        <ChangeMapView center={position} />
      </MapContainer>
    </div>
  );
};

export default Destinations;