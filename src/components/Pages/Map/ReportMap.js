import {React,useState,useEffect} from 'react'
import {MapContainer, TileLayer, useMapEvents, Marker,Popup} from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import './map.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css'; // Re-uses images from ~leaflet package
import 'leaflet-defaulticon-compatibility';

function LocationMarker({position,data}){
  return position === null ? null : (
    <Marker position={position}>
      <Popup>
        <div className="viewLocation">
          <div className="photo">
              <img className="imagen" src={data.author.imageProfile}/>
          </div>
          <h1 className="author">{data.author.nombre} </h1>
          <h1 className="description">{data.description}</h1>
        </div>
      </Popup>
    </Marker>
  )
}

const ReportMap = ({data}) => {
  var value = JSON.parse(data.latlng);
  return (
    <LocationMarker position={value} data={data} ></LocationMarker>
  );
}

export {ReportMap}