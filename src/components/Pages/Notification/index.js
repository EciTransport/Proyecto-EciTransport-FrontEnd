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
  
  return (
    <div className="App">
      
        {/* SideBar */}
        <SideBar pathRoute="Notifications" />

        {/* Notifications */}
        <LoadNotification emailUser={emailUser}/>

        {/* Global Styles */}
        <GlobalStyle />

    </div>
  )
}

export {NotificationPage}
