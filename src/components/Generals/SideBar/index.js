import React, { useEffect, useState } from 'react'
import {Contenedor, Titulo, FOOTER, DivModal} from './styles'
//Icons
import CarCrashIcon from '@mui/icons-material/CarCrash';
import HomeIcon from '@mui/icons-material/Home';
import AddLocationIcon from '@mui/icons-material/AddLocation';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import ContactsIcon from '@mui/icons-material/Contacts';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
//Components
import {IconOptions} from './IconOptions';
import { routes } from '../../Utils/routes';
//Modal
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { ReportBox } from '../Home/ReportBox';
import LogoutIcon from '@mui/icons-material/Logout';
//Azure
import { useMsal } from "@azure/msal-react";
//Close
import CloseIcon from '@mui/icons-material/Close';
//Redux
import { useSelector, useDispatch } from "react-redux";
import { getData } from "../../redux/sessionUser";
//STOMP
import SockJS from 'sockjs-client';
import {Stomp} from "@stomp/stompjs";
//Notification
import { setNotifications, getNotifications } from "../../redux/notifications";
//Comments
import { getCommens, setCommens } from "../../redux/comments";
//Reports
import { getDataReports, setDataReports, updateDataReports} from "../../redux/reports";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 550,
  bgcolor: 'background.paper',
  border: '2px solid var(--Icon-App-Color)',
  boxShadow: 24,
  background: 'white',
  'border-radius': '1.0em',
  p: 4,
};

const SideBar = ({pathRoute, stomp, setStomp}) => {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { instance } = useMsal();
  const { accounts } = useMsal();
  const name = accounts[0] && accounts[0].name;
  const dispatch = useDispatch();
  const data = useSelector((state) => state.theStore.value);
  const dataNotifications = useSelector((state) => state.notifications.value);
  const dataComments = useSelector((state) => state.comments.value);
  const dataReports = useSelector((state) => state.reports.value);

  useEffect(() => {
    if (!data) {
      console.log("nullo");
      fetch('https://demo-1670392611779.azurewebsites.net/v1/user/email/' + name.toLowerCase() + '@carlosorduz01outlook.onmicrosoft.com')
      .then(response => response.json())
      .then((data) => dispatch(getData(data.value)));
    }
  }, [])

  useEffect(() => {
    if (!dataNotifications) {
      fetch('https://demo-1670392611779.azurewebsites.net/v1/notification/All')
      .then(response => response.json())
      .then((notifications) => dispatch(getNotifications(notifications)));
    }  
  }, [])

  useEffect(() => {
    if (!dataComments) {
      fetch('https://demo-1670392611779.azurewebsites.net/v1/comments/All')
      .then(response => response.json())
      .then((comments) => dispatch(getCommens(comments)));
    }
  }, [])

  useEffect(() => {
    if (!dataReports) {
      fetch('https://demo-1670392611779.azurewebsites.net/v1/reports/')
      .then(response => response.json())
      .then((dataReport) => dispatch(getDataReports(dataReport)))
    }
  } , [])

  const handleLogout = (logoutType) => {
      if (logoutType === "popup") {
          instance.logoutPopup({
              postLogoutRedirectUri: "/",
              mainWindowRedirectUri: "/"
          });
      }
  }

  function inicarStomp() {
    if (!stomp) {
      console.log("Iniciar STOMP")
      stompStart();
    } else {
      console.log("Ya Inicio STOMP")
    }
  }

  function stompStart() {
    var stompClient = null;
    console.info("Connecting to WS...");
    var socket = new SockJS('https://demo-1670392611779.azurewebsites.net/stompendpoint');
    stompClient = Stomp.over(socket);

    stompClient.connect({}, function (frame) {
      console.log('Connected: ' + frame);

      //REPORTS
      stompClient.subscribe('/topic/addReport', (eventbody) => {
        let reports = JSON.parse(eventbody.body);
        console.log("New Array", reports)
        dispatch(getDataReports(reports));
      });

      stompClient.subscribe('/topic/delReport', (eventbody) => {
        let reports = JSON.parse(eventbody.body);
        console.log("New Array", reports)
        dispatch(getDataReports(reports));
      });

      //NOTIFICATIONS
      stompClient.subscribe('/topic/addNotification', (eventbody) => {
        let notificacions = JSON.parse(eventbody.body);
        console.log("New Array", notificacions)
        dispatch(getNotifications(notificacions));
      });

      stompClient.subscribe('/topic/delNotification', (eventbody) => {
        let notificacions = JSON.parse(eventbody.body);
        console.log("New Array", notificacions)
        dispatch(getNotifications(notificacions));
      });

      //COMMENTS
      stompClient.subscribe('/topic/addComment', (eventbody) => {
        let comments = JSON.parse(eventbody.body);
        console.log("New Array", comments)
        dispatch(getCommens(comments));
      });

      stompClient.subscribe('/topic/delComment', (eventbody) => {
        let comments = JSON.parse(eventbody.body);
        console.log("New Array", comments)
        dispatch(getCommens(comments));
      });

      //EXTRA
      stompClient.subscribe('/topic/updateReport', (eventbody) => {
        let reports = JSON.parse(eventbody.body);
        console.log("Reports Actualizados", reports)
        dispatch(getDataReports(reports));
      });

    });
    setStomp(stompClient);
  }

  return (
    <Contenedor onLoad={inicarStomp}>
      {/* Icono Plataforma */}
      
      <Titulo>
          <CarCrashIcon className="Icon-App"/>
          <h2 className="Text-App">EciTransport</h2>
      </Titulo>

      {/* Iconos Menu de Opciones */}
      <IconOptions pathRoute={pathRoute} Text="Home" Icon={HomeIcon} path={routes.home.path}/>
      <IconOptions pathRoute={pathRoute} Text="Map" Icon={AddLocationIcon} path={routes.map.path} />
      <IconOptions pathRoute={pathRoute} Text="Notifications" Icon={CircleNotificationsIcon} path={routes.notification.path}/>
      <IconOptions pathRoute={pathRoute} Text="Contacts" Icon={ContactsIcon} path={routes.contacts.path}/>
      <IconOptions pathRoute={pathRoute} Text="User" Icon={AccountCircleIcon} path={routes.profile.path}/>

      <Button onClick={handleOpen} variant="outlined" fullWidth>Report</Button>

      <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
        <Box sx={style}>
            <DivModal>
              <ReportBox modal={true} closeModal={handleClose} stomp={stomp} setStomp={setStomp}/>
              <CloseIcon className="icon_close" onClick={handleClose}/>
            </DivModal> 
        </Box>
      </Modal>

      <FOOTER>
          <Button className="account"  variant="outline-dark" onClick={() => handleLogout("popup")}>
            <div className="photo">
              <img src={data.imageProfile}/>
            </div>
            <div>
              <div className="name">{data.nombre}</div>
            </div>
            <LogoutIcon/>
          </Button>
      </FOOTER>
        
    </Contenedor>
  )
}

export {SideBar}