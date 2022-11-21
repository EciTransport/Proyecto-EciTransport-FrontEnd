import {React,useState,useEffect} from 'react'
import {MapContainer, TileLayer, useMapEvents, Marker,Popup} from 'react-leaflet'
import { MapViews } from './MapView';
import 'leaflet/dist/leaflet.css'
import '../../../styles/Map.css'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css'; // Re-uses images from ~leaflet package
import 'leaflet-defaulticon-compatibility';

function LocationMarker({position,author,text}){
    
  
  return position === null ? null : (
    <Marker position={position}>
      <Popup>{author+"\n"}
      {text}</Popup>
    </Marker>
  )
  }

const Report = ({data}) => {
    console.log(data.latlng);
    var value = JSON.parse(data.latlng);
  return (
   <LocationMarker position={value} author={data.author.nombre} text={data.description}></LocationMarker>
  );
}

export {Report}
