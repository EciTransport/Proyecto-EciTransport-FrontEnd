import React from 'react'
import {ReportsBox, Div, Form, User, DivBox, File, DivFooter, DivImages} from './styles';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import GifBoxIcon from '@mui/icons-material/GifBox';
import { Button } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import {useState, useEffect} from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import {uploadFile} from '../../../firebase/config';
import {v4} from 'uuid';

import { callMsGraph } from "../../../loginAzure/graph";
import { loginRequest } from "../../../loginAzure/authConfig";
import { useMsal } from "@azure/msal-react";


export function ReportBox() {

  const { accounts } = useMsal();
  const name = accounts[0] && accounts[0].name;

  const [user, setUser] = useState([]);
  const [selectedImages, setSelectedImages] = useState([]);
  const [selectedFilesArray, setSelectedFilesArray] = useState([]);
  const [selectedImagesDef, setSelectedImagesDef] = useState([]);
  //Create Report
  const [description, setDescription] = useState('');
  const [ubicacion, setUbicacion] = useState('');
  const [sentido, setSentido] = useState('');
  const [reports, setReports] = useState([]);

  

  useEffect( () => {
    fetch('http://localhost:8080/v1/user/email/' + name.toLowerCase() + '@carlosorduz01outlook.onmicrosoft.com')
    .then(response => response.json())
    .then((data) => setUser(data.value)) } , [] );

  useEffect( () => {
    fetch('http://localhost:8080/v1/reports/reportsUserEmail/' + name.toLowerCase() + '@carlosorduz01outlook.onmicrosoft.com')
    .then(response => response.json())
    .then(data => setReports(data))} , [] );
  
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
    console.log("lenght");
    console.log(reports.length);
    const data = {
      "id": reports.length + 1,
      "author": {
          "id":user.id,
          "nombre": user.nombre,
          "email": user.email,
          "password": user.password,
          "imageProfile": user.imageProfile
      },
      "description":description,
      "hourReport":new Date(),
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
    //window.location.reload();
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


const ProfileData = (props) => {
  return (
      <div className="profileInfo">
          <h4 className='profileInfoName'>{props.graphData.givenName}
          {props.graphData.surname}
          </h4>
          <span id="userId" className="profileInfoDesc">{props.graphData.userPrincipalName}</span>
      </div>
  );
};

function ProfileContent() {
  const { instance, accounts } = useMsal();
  const [graphData, setGraphData] = useState(null);

  const name = accounts[0] && accounts[0].name;

  function RequestProfileData() {
      const request = {
          ...loginRequest,
          account: accounts[0]
      };

      // Silently acquires an access token which is then attached to a request for Microsoft Graph data
      instance.acquireTokenSilent(request).then((response) => {
          callMsGraph(response.accessToken).then(response => setGraphData(response));
      }).catch((e) => {
          instance.acquireTokenPopup(request).then((response) => {
              callMsGraph(response.accessToken).then(response => setGraphData(response));
          });
      });
  }

  return (
      <>
          <h5 className="card-title">Welcome {name}</h5>
          {graphData ? 
              <ProfileData graphData={graphData} />
              :
              RequestProfileData()
          }
      </>
  );
};