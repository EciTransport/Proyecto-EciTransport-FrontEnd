import React from 'react'
import GlobalStyle from '../../../styles/GlobalStyle';
import {SideBar} from '../../Generals/SideBar';
import { useState, useEffect } from 'react';
import { MapView } from './MapView';
import { useSelector, useDispatch } from "react-redux";
import { getDataReports } from "../../redux/reports";

const MapPage = ({stomp, setStomp}) => {

  const dispatch = useDispatch();
  const dataReports = useSelector((state) => state.reports.value);

  useEffect(() => {
    if (!dataReports) {
      fetch('https://demo-1670185917097.azurewebsites.net/v1/reports/')
      .then(response => response.json())
      .then((dataReport) => dispatch(getDataReports(dataReport)))}
    } , [])

  return (
    <div className="App">
      
        {/* SideBar */}
        <SideBar pathRoute="Map" stomp={stomp} setStomp={setStomp} />

        {/* Map */}
        <MapView reports={dataReports}/>

        {/* Global Styles */}
        <GlobalStyle />

    </div>
  )
}

export {MapPage}
