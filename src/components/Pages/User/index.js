import React from 'react'
import GlobalStyle from '../../../styles/GlobalStyle';
import {SideBar} from '../../Generals/SideBar';
import { ProfileScreen } from './ProfileScreen';
import { useMsal } from "@azure/msal-react";
import { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { getData } from "../../redux/sessionUser";

const UserPage = ({stomp, setStomp}) => {

  const { accounts } = useMsal();
  const name = accounts[0] && accounts[0].name;
  const emailUser = name.toLowerCase() + '@carlosorduz01outlook.onmicrosoft.com';
  const dispatch = useDispatch();
  const data = useSelector((state) => state.theStore.value);

  useEffect(() => {
    if (!data) {
      fetch('https://demo-1670392611779.azurewebsites.net/v1/user/email/' + emailUser)
      .then(response => response.json())
      .then((data) => dispatch(getData(data.value)));
    }  }, [])
  
  return (
    <div className="App">
      
        {/* SideBar */}
        <SideBar pathRoute="User"  stomp={stomp} setStomp={setStomp} />

        <ProfileScreen dataUser={data} emailUser={emailUser} stomp={stomp}/>
        
        {/* Global Styles */}
        <GlobalStyle />

    </div>
  )
}

export {UserPage}
