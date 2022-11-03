import React from 'react'
import GlobalStyle from '../../../styles/GlobalStyle';
import {SideBar} from '../../Generals/SideBar';
import { routes } from '../../Utils/routes';
import { useMsal } from "@azure/msal-react";
import { useState, useEffect } from 'react';
import { LoadContacts } from './LoadContacts';

const ContactPage = () => {

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
        <SideBar pathRoute={routes.contacts.path} dataUser={user} />

        {/* Home */}
        <LoadContacts title="Contacts" />

        {/* Global Styles */}
        <GlobalStyle />

    </div>
  )
}

export {ContactPage}
