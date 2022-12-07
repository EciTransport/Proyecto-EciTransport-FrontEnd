import React from 'react'
import GlobalStyle from '../../../styles/GlobalStyle';
import {SideBar} from '../../Generals/SideBar';
import { Widget } from './Widget';
import { useMsal } from "@azure/msal-react";
import { useState, useEffect } from 'react';
import { HomeScreen } from './HomeScreen';
import { useSelector, useDispatch } from "react-redux";
import { getData } from "../../redux/sessionUser";
import { getDataReports } from "../../redux/reports";

const HomePage = ({stomp, setStomp}) => {

  const { accounts } = useMsal();
  const name = accounts[0] && accounts[0].name;
  const dispatch = useDispatch();
  const data = useSelector((state) => state.theStore.value);
  const dataReports = useSelector((state) => state.reports.value);

  useEffect(() => {
    if (!data) {
      fetch('http://localhost:8080/v1/user/email/' + name.toLowerCase() + '@carlosorduz01outlook.onmicrosoft.com')
      .then(response => response.json())
      .then((data) => dispatch(getData(data.value)));
    }  }, [])

  useEffect(() => {
    console.log("Longitud " + dataReports.length + " " + dataReports)
    if (!dataReports) {
      fetch('http://localhost:8080/v1/reports/')
      .then(response => response.json())
      .then((dataReport) => dispatch(getDataReports(dataReport)))}
    } , [])
  
  return (
    <div className="App">
      
        {/* SideBar */}
        <SideBar pathRoute="Home" stomp={stomp} setStomp={setStomp}/>

        {/* Home */}
        <HomeScreen reports={dataReports} dataUser={data} stomp={stomp} setStomp={setStomp}/>

        {/* Widget */}
        <Widget reports={dataReports} user={data} stomp={stomp}/>

        {/* Global Styles */}
        <GlobalStyle />

    </div>
  )
}

export {HomePage}


