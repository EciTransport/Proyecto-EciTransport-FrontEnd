import React from 'react'
import GlobalStyle from '../../../styles/GlobalStyle';
import {Home} from '../../Generals/Home';
import {SideBar} from '../../Generals/SideBar';
import {Widgets} from '../../Generals/Widgets';
import { routes } from '../../Utils/routes';
import { useMsal } from "@azure/msal-react";
import { useState, useEffect } from 'react';
const HomePage = () => {

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
        <SideBar pathRoute={routes.home.path} dataUser={user} />

        {/* Home */}
        <Home />

        {/* Widgets */}
        <Widgets />

        {/* Global Styles */}
        <GlobalStyle />

    </div>
  )
}

export {HomePage}


