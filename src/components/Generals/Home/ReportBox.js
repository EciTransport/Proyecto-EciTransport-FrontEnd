import React from 'react'
import {ReportsBox, Div, Form, User, DivBox, File, DivFooter, DivImages} from './styles';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import GifBoxIcon from '@mui/icons-material/GifBox';
import { Button } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import {usuario} from '../../Utils/user'
import {useState, useEffect} from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import {uploadFile} from '../../../firebase/config';
import {v4} from 'uuid';
import * as L from "leaflet";

export function ReportBox() {

  const [user, setUser] = useState([]);
  const [selectedImages, setSelectedImages] = useState([]);
  const [selectedFilesArray, setSelectedFilesArray] = useState([]);
  const [selectedImagesDef, setSelectedImagesDef] = useState([]);
  //Create Report
  const [description, setDescription] = useState('');
  const [ubicacion, setUbicacion] = useState('');
  const [sentido, setSentido] = useState('');
  const [reports, setReports] = useState([]);

  //Location
  const [lat, setLat] = useState(null);
  const [lng, setLng] = useState(null);
  const [status, setStatus] = useState(null);


  useEffect( () => {
    fetch('http://localhost:8080/v1/user/id/' + usuario)
    .then(response => response.json())
    .then((data) => setUser(data.value)) } , [] );

  useEffect( () => {
    fetch('http://localhost:8080/v1/reports/reportsUser/' + usuario)
    .then(response => response.json())
    .then(data => setReports(data))} , [] );
  useEffect(() => {
    if(!navigator.geolocation){
      setStatus('Geolocation is not supported by your browser');
    }else{
      setStatus('Locating...');
      navigator.geolocation.getCurrentPosition((position) => {
        setStatus(null);
        setLat(position.coords.latitude);
        setLng(position.coords.longitude);
        //window.location.reload();
        
      }, ()=>{
        setStatus('Unable toretrieve your location');
      });
    }
  },[]);
  
  const onSelectFile = (event) => {
    const selectedFiles = event.target.files;

    const selectedFilesArray = Array.from(selectedFiles);

    setSelectedFilesArray(selectedFilesArray);

    const imagesArray = selectedFilesArray.map((file) => {
      return URL.createObjectURL(file);
    });

    const imagesArray2 = selectedFilesArray.map((file) => {
      return (file);
    });

    setSelectedImages((previousImages) => previousImages.concat(imagesArray));

    setSelectedImagesDef((previousImages) => previousImages.concat(imagesArray2));

    event.target.value = "";
  };

  function deleteHandler(image) {
    setSelectedImages(selectedImages.filter((e) => e !== image));
    setSelectedImagesDef(selectedImagesDef.filter((e) => URL.createObjectURL(e) !== image));
    URL.revokeObjectURL(image);
  }

  function createReport(images) {
    var latlngg = new L.latLng(lat,lng);
    var res = JSON.stringify(latlngg);
    alert(res);
    const data = {
      "id": reports.length + 1,
      "author": {
          "id":user.id,
          "nombre": user.nombre,
          "email": user.email,
          "password": user.password,
          "imageProfile": user.imageProfile
      },
      "latlng":res,
      "description":description,
      "hourReport":"2011-10-02",
      "sentido":sentido,
      "ubicacion": ubicacion,
      "numberlikes":2,
      "imagesReport": images.map(url => {
        return {"urlImage": url}
      })
    };
    fetch('http://localhost:8080/v1/reports/', {
      method: 'POST',
      body: JSON.stringify(data),
      headers:{
        'Content-Type': 'application/json'
      }
    })
    .catch(error => console.error('Error:', error))
    .then(response => console.log('Success:', response));
    window.location.reload();
  }

  function subirImagenes() {
    const allPromises = selectedFilesArray.map( 
      (element) => uploadFile(element));
    return allPromises;
  }

  function buttonReport() {
    const allPromises = subirImagenes();
    Promise.all(allPromises).then(values => createReport(values));
    
  }

  return (
    <ReportsBox>
        <Form>
           <Div>
              <div className="header">
                <User src={user.imageProfile} alt="" className="user"/>
                <h3>{user.nombre}
                  <span >
                      <CheckCircleIcon className="post_icon"/> 
                      {user.email}
                  </span>  
                </h3>
              </div>
            </Div>
            <Div>
              <div className="columns">
                  <input onChange={event => setDescription(event.target.value)} required text="text" placeholder="¿Que Sucedio?"/>
                  <input onChange={event => setUbicacion(event.target.value)} required text="text" placeholder="Ubicacion"/>
                  <input onChange={event => setSentido(event.target.value)} required text="text" placeholder="Sentido"/>
              </div>
            </Div>
            <DivFooter>
               <DivBox>
                    <AddPhotoAlternateIcon type="file" onChange={onSelectFile} multiple/>
                    <File type="file" onChange={onSelectFile} multiple primary/> 
                    <GifBoxIcon />
                    <File type="file" onChange={onSelectFile} multiple secundary/>
                </DivBox>
                <Button onClick={() => buttonReport()} >Reporta</Button>
            </DivFooter>
            <DivImages className="images">
              {selectedImages &&
                selectedImages.map((image) => {
                  return (
                    <div key={image} className="image">
                      <img src={image} height="150" alt="upload" />
                      <DeleteIcon className="botondelete" onClick={() => deleteHandler(image)}/>
                    </div>
                  );
                })}
            </DivImages>
        </Form>
    </ReportsBox>
  )
}
