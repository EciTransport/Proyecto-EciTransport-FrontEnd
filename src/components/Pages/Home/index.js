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

  useEffect(() => {
    fetch('http://localhost:8080/v1/reports/')
    .then(response => response.json())
    .then(data => setReports(data)) } , [] );
    
  useEffect( () => {
    fetch('http://localhost:8080/v1/user/email/' + name.toLowerCase() + '@carlosorduz01outlook.onmicrosoft.com')
    .then(response => response.json())
    .then((data) => setUser(data.value)) } 
    , [] );


  return (
    <div className="App">
      
        {/* SideBar */}
        <SideBar pathRoute="Home" dataUser={user} />

        {/* Home */}
        <HomeScreen reports={reports} dataUser={user}/>

        {/* Widget */}
        <Widget reports={reports} user={user}/>

        {/* Global Styles */}
        <GlobalStyle />

    </div>
  )
}

export {HomePage}


