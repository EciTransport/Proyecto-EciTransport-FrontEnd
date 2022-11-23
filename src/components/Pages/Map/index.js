import React from 'react'
import GlobalStyle from '../../../styles/GlobalStyle';
import {SideBar} from '../../Generals/SideBar';
import { useState, useEffect } from 'react';
import { MapView } from './MapView';
const MapPage = () => {

  const [reports, setReports] = useState([]);

  useEffect(
    () => {
      fetch('http://localhost:8080/v1/reports/')
      .then(response => response.json())
      .then(data => setReports(data)) } , [] );
  
  return (
    <div className="App">
      
        {/* SideBar */}
        <SideBar pathRoute="Map"/>

        {/* Map */}
        <MapView reports={reports}/>

        {/* Global Styles */}
        <GlobalStyle />

    </div>
  )
}

export {MapPage}
