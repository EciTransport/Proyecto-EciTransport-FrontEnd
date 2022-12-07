import React from 'react'
import {ReportsBox, Div, Form, User, DivBox, File, DivFooter, DivCarrusel, DivModal} from './styles';
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
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import CloseIcon from '@mui/icons-material/Close';
import { MapReport } from './MapReport';
import { useSelector, useDispatch } from "react-redux";
import { getData } from "../../redux/sessionUser";
import { getDataReports, setDataReports } from "../../redux/reports";
import SockJS from 'sockjs-client';
import {Stomp} from "@stomp/stompjs";

export function ReportBox({modal, closeModal, stomp, setStomp}) {
  const { accounts } = useMsal();
  const name = accounts[0] && accounts[0].name;
  const [selectedFilesArray, setSelectedFilesArray] = useState([]);
  const [error, setError] = useState(false);
  const [errorLocation, setErrorLocation] = useState(false);
  const [lat, setLat] = useState(null);
  const [lng, setLng] = useState(null);
  const [open, setOpen] = React.useState(false);
  //User
  const dispatch = useDispatch();
  const user = useSelector((state) => state.theStore.value);
  //Reports
  const dataReports = useSelector((state) => state.reports.value);
  //Create Report
  const [description, setDescription] = useState('');
  const [ubicacion, setUbicacion] = useState('');
  const [sentido, setSentido] = useState('');
  //Modal
  const handleClose = () => setOpen(false);
  const handleOpen = () => {
    if (lat == null || lng == null) {
      setErrorLocation(true);
    }
    else {
      setErrorLocation(false);
      setOpen(true);
    }
  }
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 550,
    height: 550,
    bgcolor: 'background.paper',
    border: '2px solid var(--Icon-App-Color)',
    boxShadow: 24,
    background: 'white',
    'border-radius': '0',
    p: 0,
  };
  
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function(position) {
      setLat(position.coords.latitude);
      setLng(position.coords.longitude);
     }); }, [])

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
    if (res == '{}') res = null;
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

    doPost(data)
    .then((report) => {
      console.log("El reporte es:", report);
      const input = document.getElementById("descriptionReport");
      input.value = "";
      if (modal) closeModal();
      stomp.send('/app/addReport', {}); 
    })
    .catch((error) => {
      console.log("Error encontrado:", error);
    });
  }

  function doPost(data) {
    return new Promise((resolve, reject) => {
      fetch('https://demo-1670392611779.azurewebsites.net/v1/reports/', {
      method: 'POST',
      body: JSON.stringify(data),
      headers:{
        'Content-Type': 'application/json'
      }
      }).then((response) => {
          if (response.ok) {
            return response.json();
          }
          reject(
            "No hemos podido recuperar ese json. El código de respuesta del servidor es: " + response.status
          );
        })
        .then((json) => resolve(json))
        .catch((err) => reject(err));
    });
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
  let componentErrorLocation;
  if (errorLocation) {
    componentErrorLocation = <Error message="Activate your location"/>
  }
  else {
    componentErrorLocation = null;
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
                  <input id="descriptionReport" onChange={event => setDescription(event.target.value)} required text="text" placeholder="¿What happened?"/>
              </div>
            </Div>
            <DivFooter>
               <DivBox>
                    <AddPhotoAlternateIcon/>
                    <File type="file" onChange={onSelectFile} accept=".jpg, .jpeg, .png" primary multiple/>
                    <GifBoxIcon />
                    <File type="file" onChange={onSelectFile} accept=".gif" secundary multiple/>
                    
                    <LocationOnIcon onClick={handleOpen}/>

                    <Modal className="modalReport" open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
                      <Box sx={style}>
                          <DivModal>
                            <MapReport lat={lat} lng={lng}/>
                            <CloseIcon className="icon_closeMap" onClick={handleClose}/>
                          </DivModal> 
                      </Box>
                    </Modal>

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

        <div className="error">
            {componentErrorLocation}
        </div>

    </ReportsBox>
  )
}

