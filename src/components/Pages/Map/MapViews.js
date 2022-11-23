import {React,useState,useEffect} from 'react'
import {MapContainer, TileLayer, useMapEvents, Marker,Popup} from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import './map.css'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css'; // Re-uses images from ~leaflet package
import 'leaflet-defaulticon-compatibility';
import {ReportMap} from './ReportMap';

  const MapViews = ({reports}) =>{


    const [lat, setLat] = useState(null);
    const [lng, setLng] = useState(null);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(function(position) {
          setLat(position.coords.latitude);
          setLng(position.coords.longitude); }); }, [])

    return (
        <MapContainer
            center={{ lat: 4.6471122, lng: -74.2184785 }}
            zoom={13}
            scrollWheelZoom={true}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {
              reports.map((data, index) => <ReportMap key={index} data={data} options={false} />) 
            }
        </MapContainer>
    );

  };
  export {MapViews}
    
