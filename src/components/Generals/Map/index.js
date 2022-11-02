import React from 'react';
import { GoogleMap,useJsApiLoader,Marker} from '@react-google-maps/api';

const center= { lat: 48.8584, lng: 2.294 };
const zoom = 4;

const Map = () => {
/*   const [lat,setLat] = useState(null);
  const [lng, setLng] = useState(null);
  

  const[status,setStatus] = useState(null);
  const getLocation = () => {
    console.log("entra");
    if(!navigator.geolocation){
      setStatus("geolocation is not supported by browser");
    }else{
      setStatus("Locating");
      navigator.geolocation.getCurrentPosition((position) =>{
        setStatus(null);
        setLat(position.coords.latitude);
        setLng(position.coords.longitude);
      },() =>{
          setStatus("unable location");});
        }
      }; */

    const{isLoaded} = useJsApiLoader({
      googleMapsApiKey: "AIzaSyBK8H0Abp09AwgXjrpLLp9hY3XLrIRtHek",
    }) 
    if(!isLoaded){
      return ("error");
    }

    return(
       <GoogleMap 
          center = {center}
          zoom={zoom} 
          mapContainerStyle={{ width: "100%", height: '100%'}}
          options={{
            zoomControl: false,
            streetViewControl: false,
            mapTypeControl: false,
            fullscreenControl: false,
        }}
        >
          <Marker position={center}/>
      {}
    </GoogleMap>);
    
}
export {Map}
