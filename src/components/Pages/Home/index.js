import React from 'react'
import GlobalStyle from '../../../styles/GlobalStyle';
import {SideBar} from '../../Generals/SideBar';
import { Widget } from './Widget';
import { useMsal } from "@azure/msal-react";
import { useState, useEffect } from 'react';
import { HomeScreen } from './HomeScreen';
import { useSelector, useDispatch } from "react-redux";
import { getData } from "../../redux/sessionUser";

const HomePage = () => {

  const { accounts } = useMsal();
  const name = accounts[0] && accounts[0].name;
  const [reports, setReports] = useState([]);
  const dispatch = useDispatch();
  const data = useSelector((state) => state.theStore.value);
  
  useEffect(() => {
    if (!data) {
      fetch('http://localhost:8080/v1/user/email/' + name.toLowerCase() + '@carlosorduz01outlook.onmicrosoft.com')
      .then(response => response.json())
      .then((data) => dispatch(getData(data.value)));
    }  }, [])

  useEffect(() => {
    fetch('http://localhost:8080/v1/reports/')
    .then(response => response.json())
    .then(data => setReports(data)) } , [] );

  return (
    <div className="App">
      
        {/* SideBar */}
        <SideBar pathRoute="Home" />

        {/* Home */}
        <HomeScreen reports={reports} dataUser={data}/>

        {/* Widget */}
        <Widget reports={reports} user={data} setReports={setReports}/>

        {/* Global Styles */}
        <GlobalStyle />

    </div>
  )
}

export {HomePage}


