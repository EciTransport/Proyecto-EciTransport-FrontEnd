import {React, useState} from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useSelector, useDispatch } from "react-redux";
import { getNotifications } from "../../redux/notifications";
import './Notification.css';

const Notificacion = ({data, notifications, stomp}) => {

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const dispatch = useDispatch();
  
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const deleteElement = (event) => {
    fetch('https://demo-1670185917097.azurewebsites.net/v1/notification/delete/' + data.idString , {method: 'DELETE'});
    const newListNotifications = notifications.filter(n => n.idString != data.idString);
    stomp.send('/app/delNotification', {}, JSON.stringify(newListNotifications));
    handleClose(event);
  }

  return (
    <div className="notification">
      <div className="dataNotification">
        <img className="imageNotification" src={data.userCreator.imageProfile}/>
        <h1 className="user" >{data.userCreator.nombre}</h1>
        <span className="spam">{new Date(data.hour).toLocaleString('en-us')}</span>
      </div>
      <div className="description">
          <h2>{data.description}</h2>
      </div>
      <div className="iconMoreN">
          <IconButton aria-label="more" id="long-button" 
          aria-controls={open ? 'long-menu' : undefined} 
          aria-expanded={open ? 'true' : undefined} 
          aria-haspopup="true" onClick={handleClick} >
            <MoreVertIcon className="moreIcon"/>
          </IconButton>

          <Menu id="long-menu" MenuListProps={{ 'aria-labelledby': 'long-button', }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
          >
            <MenuItem onClick={deleteElement}>Delete</MenuItem>
          </Menu>
      </div>
    </div>
  )
}

export {Notificacion}
