import React from 'react'
import GlobalStyle from '../../../styles/GlobalStyle';
import {SideBar} from '../../Generals/SideBar';
import { useMsal } from "@azure/msal-react";
import { useState, useEffect } from 'react';
import { LoadNotification } from './LoadNotification';

const NotificationPage = () => {

  const { accounts } = useMsal();
  const name = accounts[0] && accounts[0].name;
  const emailUser = name.toLowerCase() + '@carlosorduz01outlook.onmicrosoft.com';
  const [user, setUser] = useState([]);

  useEffect( () => {
    fetch('http://localhost:8080/v1/user/email/' + emailUser)
    .then(response => response.json())
    .then((data) => setUser(data.value)) } , [] );
  
  return (
    <div className="App">
      
        {/* SideBar */}
        <SideBar pathRoute="Notifications" dataUser={user}/>

        {/* Notifications */}
        <LoadNotification emailUser={emailUser}/>

        {/* Global Styles */}
        <GlobalStyle />

    </div>
  )
}

export {NotificationPage}
