import React from 'react'
import GlobalStyle from '../../../styles/GlobalStyle';
import {SideBar} from '../../Generals/SideBar';
import { Widget } from './Widget';
import { routes } from '../../Utils/routes';
import { useMsal } from "@azure/msal-react";
import { useState, useEffect } from 'react';
import { HomeScreen } from './HomeScreen';

const HomePage = () => {

  const { accounts } = useMsal();
  const name = accounts[0] && accounts[0].name;
  const [user, setUser] = useState([]);
  const [reports, setReports] = useState([]);

  useEffect( () => {
    fetch('http://localhost:8080/v1/user/email/' + name.toLowerCase() + '@carlosorduz01outlook.onmicrosoft.com')
    .then(response => response.json())
    .then((data) => setUser(data.value)) } , [] );

  useEffect(() => {
    fetch('http://localhost:8080/v1/reports/')
    .then(response => response.json())
    .then(data => setReports(data)) } , [] );
  
  return (
    <div className="App">
      
        {/* SideBar */}
        <SideBar pathRoute={routes.home.path} dataUser={user} />

        {/* Home */}
        <HomeScreen reports={reports} />

        {/* Widget */}
        <Widget reports={reports}/>

        {/* Global Styles */}
        <GlobalStyle />

    </div>
  )
}

export {HomePage}


