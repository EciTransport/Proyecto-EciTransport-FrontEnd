import React from 'react'
import GlobalStyle from '../../../styles/GlobalStyle';
import {SideBar} from '../../Generals/SideBar';
import { routes } from '../../Utils/routes';
import { useMsal } from "@azure/msal-react";
import { useState, useEffect } from 'react';
import { MapView } from './MapView';
const MapPage = () => {

  const { accounts } = useMsal();
  const name = accounts[0] && accounts[0].name;
  const [user, setUser] = useState([]);
  const [reports, setReports] = useState([]);

  useEffect( () => {
    fetch('http://localhost:8080/v1/user/email/' + name.toLowerCase() + '@carlosorduz01outlook.onmicrosoft.com')
    .then(response => response.json())
    .then((data) => setUser(data.value)) } , [] );
    
  useEffect(
    () => {
      fetch('http://localhost:8080/v1/reports/')
      .then(response => response.json())
      .then(data => setReports(data)) } , [] );
  
  return (
    <div className="App">
      
        {/* SideBar */}
        <SideBar pathRoute="Map" dataUser={user}/>

        {/* Map */}
        <MapView reports={reports}/>

        {/* Global Styles */}
        <GlobalStyle />

    </div>
  )
}

export {MapPage}
