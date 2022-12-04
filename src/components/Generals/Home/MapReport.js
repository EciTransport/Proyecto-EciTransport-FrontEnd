import React from 'react';
import {MapContainer, TileLayer, useMapEvents, Marker,Popup} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css';
import './MapReport.css';
import * as L from 'leaflet';
import {ContainerMap, HeaderMap} from './styles';

const MapReport = ({lat, lng}) => {

  var latlng = new L.latLng(lat,lng);
  if (lat == null || lng == null) latlng = null;

  return (
    <ContainerMap>

        <HeaderMap>
            <h2>LOCATION</h2>
        </HeaderMap>
        
        <MapContainer
              center={{ lat: lat, lng: lng }}
              zoom={17}
              scrollWheelZoom={true}
              className="mapaReport">
              <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <LocationMarker position={latlng} ></LocationMarker>
        </MapContainer>

    </ContainerMap>
  )
}

export {MapReport}


function LocationMarker({position}){
  return position === null ? null : (
    <Marker position={position}>
      <Popup>
        <h1>Mi Ubicacion</h1>
      </Popup>
    </Marker>
  )
}
