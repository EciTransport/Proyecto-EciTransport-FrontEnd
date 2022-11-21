import React from 'react'
import {Container, Header, User} from './styles';

import {useState, useEffect} from 'react';

import { MapViews } from './MapView';


const Map = () => {

  //Cargar Reportes
  const [reports, setReports] = useState([]);

  React.useEffect(
  () => {
    fetch('http://localhost:8080/v1/reports/')
    .then(response => response.json())
    .then(data => setReports(data))
  } , [] );

  return (
    <Container>
        
        <MapViews reports={reports}></MapViews>
      
      {/* Posts */}
      



    </Container>
  )
}

export {Map}