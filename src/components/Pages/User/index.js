import React from 'react'
import GlobalStyle from '../../../styles/GlobalStyle';
import {SideBar} from '../../Generals/SideBar';
import { ProfileScreen } from './ProfileScreen';
import { routes } from '../../Utils/routes';
import { useMsal } from "@azure/msal-react";
import { useState, useEffect } from 'react';

const UserPage = () => {

  const { accounts } = useMsal();
  const name = accounts[0] && accounts[0].name;
  const [user, setUser] = useState([]);
  const emailUser = name.toLowerCase() + '@carlosorduz01outlook.onmicrosoft.com';

  useEffect( () => {
    fetch('http://localhost:8080/v1/user/email/' + emailUser)
    .then(response => response.json())
    .then((data) => setUser(data.value)) } , [] );
  
  return (
    <div className="App">
      
        {/* SideBar */}
        <SideBar pathRoute="User" dataUser={user}/>

        <ProfileScreen dataUser={user} emailUser={emailUser}/>
        
        {/* Global Styles */}
        <GlobalStyle />

    </div>
  )
}

export {UserPage}
