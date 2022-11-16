import React from 'react'
import {ReportsBox, Div, Form, User, DivBox, File, DivFooter, DivImages} from './styles';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import GifBoxIcon from '@mui/icons-material/GifBox';
import { Button } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import {useState, useEffect} from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import {uploadFile} from '../../../firebase/config';
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
    fetch('http://localhost:8080/v1/reports/')
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
    const data = {
      "id": reports.length + 1,
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
      "numberlikes":2,
      "imagesReport": images.map(url => {
        return {"urlImage": url}
      }),
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
                <Button onClick={() => buttonReport()} >Report</Button>
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

