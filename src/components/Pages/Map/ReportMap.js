import {React,useState,useEffect} from 'react';
import {MapContainer, TileLayer, useMapEvents, Marker,Popup} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './map.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css'; // Re-uses images from ~leaflet package
import 'leaflet-defaulticon-compatibility';

function LocationMarker({position,data,locationRepeat}){

  return position === null ? null : (
    <Marker position={position}>
      <Popup>
        <div className="viewLocation">
          <div className="photo">
              <img className="imagen" src={data.author.imageProfile}/>
          </div>
          <h1 className="author">{data.author.nombre} </h1>
          <h1 className="descriptionMap">{data.description}</h1>
          <spam className="hora">{new Date(data.hourReport).toLocaleString('en-us')}</spam>
          { (locationRepeat > 1)?<h1 className="descriptionMap">{locationRepeat} Reportes en esta Ubicacion</h1>:null}
        </div>
      </Popup>
    </Marker>
  )
}

const ReportMap = ({data, reports}) => {
  var value = JSON.parse(data.latlng);
  const [LocationRepeat, setLocationRepeat] = useState(0);

  useEffect(() => {
      setLocationRepeat(reports.filter(r => r.latlng == data.latlng).length);
  }, [])

  return (
    <LocationMarker position={value} data={data} locationRepeat={LocationRepeat}></LocationMarker>
  );
}

export {ReportMap}