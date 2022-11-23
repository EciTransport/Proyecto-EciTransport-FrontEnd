import React, { useEffect } from 'react'
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
import { getData } from "../../../sessionUser";

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

const SideBar = ({pathRoute}) => {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { instance } = useMsal();
  const { accounts } = useMsal();
  const name = accounts[0] && accounts[0].name;
  const dispatch = useDispatch();
  const data = useSelector((state) => state.theStore.value);

  useEffect(() => {
    if (!data) {
      console.log("nullo");
      fetch('http://localhost:8080/v1/user/email/' + name.toLowerCase() + '@carlosorduz01outlook.onmicrosoft.com')
      .then(response => response.json())
      .then((data) => dispatch(getData(data.value)));
    }
  })

  const handleLogout = (logoutType) => {
      if (logoutType === "popup") {
          instance.logoutPopup({
              postLogoutRedirectUri: "/",
              mainWindowRedirectUri: "/"
          });
      }
  }
  
  return (
    <Contenedor>
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
              <ReportBox/>
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