import {React,useState,useEffect} from 'react'
import {MapContainer, TileLayer, useMapEvents, Marker,Popup} from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import '../../../styles/Map.css'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css'; // Re-uses images from ~leaflet package
import * as L from 'leaflet';
import 'leaflet-defaulticon-compatibility';
import {Report} from './Report';




  
  const MapViews = ({reports}) =>{
    console.log(reports);
    return (
        <MapContainer
            center={{ lat: 4.570868, lng: -74.297333 }}
            zoom={13}
            scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {
              reports.map(data => <Report key={data.id} data={data} options={false} />) 
            }
            
        </MapContainer>
        
        
    );

  };
  export {MapViews}
    

