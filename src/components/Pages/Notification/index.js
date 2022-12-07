import {React, useEffect} from 'react'
import GlobalStyle from '../../../styles/GlobalStyle';
import {SideBar} from '../../Generals/SideBar';
import { useMsal } from "@azure/msal-react";
import { LoadNotification } from './LoadNotification';
import { useSelector, useDispatch } from "react-redux";
import { getNotifications } from "../../redux/notifications";

const NotificationPage = ({stomp, setStomp}) => {

  const { accounts } = useMsal();
  const name = accounts[0] && accounts[0].name;
  const emailUser = name.toLowerCase() + '@carlosorduz01outlook.onmicrosoft.com';
  const dataNotifications = useSelector((state) => state.notifications.value);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!dataNotifications) {
      fetch('https://demo-1670392611779.azurewebsites.net/v1/reports/v1/notification/All')
      .then(response => response.json())
      .then((notifications) => dispatch(getNotifications(notifications)));
    }  }, [])
  
  return (
    <div className="App">
      
        {/* SideBar */}
        <SideBar pathRoute="Notifications"  stomp={stomp} setStomp={setStomp}/>

        {/* Notifications */}
        <LoadNotification emailUser={emailUser} notifications={dataNotifications} stomp={stomp}/>

        {/* Global Styles */}
        <GlobalStyle />

    </div>
  )
}

export {NotificationPage}
