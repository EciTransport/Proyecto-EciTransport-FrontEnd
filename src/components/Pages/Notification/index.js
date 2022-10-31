import React from 'react'
import GlobalStyle from '../../../styles/GlobalStyle';
import {FuncionalityInConstruction} from '../../Generals/FuncionalityInConstruction';
import {SideBar} from '../../Generals/SideBar';
import { routes } from '../../Utils/routes';
import { useMsal } from "@azure/msal-react";
import { useState, useEffect } from 'react';

const NotificationPage = () => {

  const { accounts } = useMsal();
  const name = accounts[0] && accounts[0].name;
  const [user, setUser] = useState([]);

  useEffect( () => {
    fetch('http://localhost:8080/v1/user/email/' + name.toLowerCase() + '@carlosorduz01outlook.onmicrosoft.com')
    .then(response => response.json())
    .then((data) => setUser(data.value)) } , [] );
  
  return (
    <div className="App">
      
        {/* SideBar */}
        <SideBar pathRoute={routes.notification.path} dataUser={user}/>

        {/* Home */}
        <FuncionalityInConstruction title="Notifications"/>

        {/* Global Styles */}
        <GlobalStyle />

    </div>
  )
}

export {NotificationPage}
