import React from 'react'
import {Container, Header, User} from './styles';
import {ReportBox} from './ReportBox';
import {useState, useEffect} from 'react';
import { LoadPosts } from './LoadPosts';
const Home = () => {

  //Cargar Reportes
  const [reports, setReports] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/v1/reports/')
    .then(response => response.json())
    .then(data => setReports(data)) } , [] );

  return (
    <Container>
      {/* Header */}
      
      <Header>
        <h2>Home</h2>
      </Header>

      {/* Report */}
      <ReportBox /> 

      {/* Posts */}
      <LoadPosts reports={reports}/>

    </Container>
  )
}

export {Home}

