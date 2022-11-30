import {Container, Header, Map} from './styles';
import {React,useState,useEffect} from 'react'
import {MapContainer, TileLayer, useMapEvents, Marker,Popup} from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import './map.css'
import 'leaflet-defaulticon-compatibility';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css';
import { ReportMap } from './ReportMap';

const MapView = ({reports}) => {

  const [lat, setLat] = useState(4.7558592);
  const [lng, setLng] = useState(-74.005036);

  return (
    <Container>

        <Header>
            <h2>Map</h2>
        </Header>
        
        <Map>
          <MapContainer
              center={{ lat: lat, lng: lng }}
              zoom={12}
              scrollWheelZoom={true}
              className="mapa">
              <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              {
                (reports)?reports.map((data, index) => <ReportMap key={index} data={data} reports={reports}/>):null
              }
          </MapContainer>
        </Map>

    </Container>
  )
}

export {MapView}
