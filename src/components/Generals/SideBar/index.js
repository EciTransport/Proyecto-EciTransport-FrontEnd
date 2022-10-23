import React from 'react'
import {Contenedor, Titulo} from './styles'
import CarCrashIcon from '@mui/icons-material/CarCrash';
import HomeIcon from '@mui/icons-material/Home';
import AddLocationIcon from '@mui/icons-material/AddLocation';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import ContactsIcon from '@mui/icons-material/Contacts';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {IconOptions} from './IconOptions';
import { Button } from '@mui/material';
import { routes } from '../../Utils/routes';

const SideBar = ({pathRoute}) => {
  return (
    <Contenedor>
      {/* Icono Plataforma */}
      <Titulo>
          <CarCrashIcon className="Icon-App"/>
          <h2 className="Text-App">EciTransport</h2>
      </Titulo>

      {/* Iconos Menu de Opciones */}
      <IconOptions Active Text="Home" Icon={HomeIcon} path={routes.home.path}/>
      <IconOptions Text="Map" Icon={AddLocationIcon} path={routes.map.path} />
      <IconOptions Text="Notifications" Icon={CircleNotificationsIcon} path={routes.notification.path}/>
      <IconOptions Text="Contacts" Icon={ContactsIcon} path={routes.contacts.path}/>
      <IconOptions Text="User" Icon={AccountCircleIcon} path={routes.profile.path}/>
      <Button onClick={() => {alert("Funciona Perro")}} variant="outlined" fullWidth>Report</Button> 
    </Contenedor>
  )
}

export {SideBar}