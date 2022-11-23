import React from 'react'
import {ReportsBox, Div, Form, User, DivBox, File, DivFooter, DivCarrusel} from './styles';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import GifBoxIcon from '@mui/icons-material/GifBox';
import { Button } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import {useState, useEffect} from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import {uploadFile} from '../../../firebase/config';
import { useMsal } from "@azure/msal-react";
import Carousel from 'better-react-carousel';
import { Error } from './Error';
import * as L from 'leaflet';

export function ReportBox() {

  const { accounts } = useMsal();
  const name = accounts[0] && accounts[0].name;
  const [user, setUser] = useState([]);
  const [selectedFilesArray, setSelectedFilesArray] = useState([]);
  const [error, setError] = useState(false);
  const [lat, setLat] = useState(null);
  const [lng, setLng] = useState(null);

  //Create Report
  const [description, setDescription] = useState('');
  const [ubicacion, setUbicacion] = useState('');
  const [sentido, setSentido] = useState('');

  useEffect( () => {
    fetch('http://localhost:8080/v1/user/email/' + name.toLowerCase() + '@carlosorduz01outlook.onmicrosoft.com')
    .then(response => response.json())
    .then((data) => setUser(data.value)) } , [] );
  
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function(position) {
      setLat(position.coords.latitude);
      setLng(position.coords.longitude); }); }, [])

  const onSelectFile = (event) => {
    const selectedFiles = event.target.files;
    const selectedFilesArray = Array.from(selectedFiles);
    setSelectedFilesArray((previusFiles) => previusFiles.concat(selectedFilesArray));
    event.target.value = "";
  };

  function deleteFile(file) {
    setSelectedFilesArray(selectedFilesArray.filter((f) => f !== file));
  }

  function createReport(images) {
    var latlng = new L.latLng(lat,lng);
    var res = JSON.stringify(latlng);

    const data = {
      "author": {
          "id":user.id,
          "nombre": user.nombre,
          "email": user.email,
          "imageProfile": user.imageProfile
      },
      "description":description,
      "hourReport":new Date(),
      "sentido":sentido,
      "ubicacion": ubicacion,
      "latlng": res,
      "imagesReport": images,
      "comments": [],
      "idUserLikes": []
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
    if (description == "" || description == null) {
      setError(true);
      return;
    }
    setError(false);
    const allPromises = subirImagenes();
    Promise.all(allPromises).then(values => createReport(values));
  }

  let componentError;
  if (error) {
    componentError = <Error message="Obligatory field"/>
  }
  else {
    componentError = null;
  }

  return (
    <ReportsBox>
        <Form>
           <Div>
              <User src={user.imageProfile} alt="" className="user"/>
              <div className="header">
                <h3> <div>{user.nombre} <CheckCircleIcon className="post_icon"/></div>
                  <span >
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
                    <AddPhotoAlternateIcon/>
                    <File type="file" onChange={onSelectFile} accept=".jpg, .jpeg, .png" primary/>
                    <GifBoxIcon />
                    <File type="file" onChange={onSelectFile} accept=".gif" secundary/>
                </DivBox>
                <Button onClick={() => buttonReport()} >Report</Button>
            </DivFooter>
        </Form>
        <DivCarrusel>
          {(selectedFilesArray.length)?<Carousel cols={3} rows={1} gap={10} loop >
            {selectedFilesArray &&
                selectedFilesArray.map((file) => {
                  return (
                    <Carousel.Item>
                      <img width="100%" src={URL.createObjectURL(file)} alt="upload"/>
                      <DeleteIcon onClick={() => deleteFile(file)}/>
                    </Carousel.Item>
                  );
            })}
          </Carousel>
          :null}
        </DivCarrusel>

        <div className="error">
            {componentError}
        </div>

    </ReportsBox>
  )
}

