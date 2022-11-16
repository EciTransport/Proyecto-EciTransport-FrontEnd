import React, { useEffect } from 'react'
import {Contenedor, Titulo, FOOTER} from './styles'
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

const SideBar = ({pathRoute, dataUser}) => {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { instance } = useMsal();

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
            <ReportBox />
        </Box>
      </Modal>

      <FOOTER>
          <Button className="account"  variant="outline-dark" onClick={() => handleLogout("popup")}>
            <div className="photo">
              <img src={dataUser.imageProfile}/>
            </div>
            <div>
              <div className="name">{dataUser.nombre}</div>
            </div>
            <LogoutIcon/>
          </Button>
      </FOOTER>
        
    </Contenedor>
  )
}

export {SideBar}