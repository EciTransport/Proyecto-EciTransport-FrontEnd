import {React, useState} from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import './Notification.css';

const Notificacion = ({data, notifications, stomp}) => {

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const deleteElement = (event) => {
    doDeleteNotification()
      .then(() => {
        console.log("Eliminar Notificacion");
        stomp.send('/app/delNotification', {});
        handleClose();
      })
      .catch((error) => {
        console.log("Error encontrado:", error);
      });
  }


  function doDeleteNotification() {
    return new Promise((resolve, reject) => {
      fetch('http://localhost:8080/v1/notification/delete/' + data.idString , {method: 'DELETE'})
      .then((response) => {
          if (response.ok) {
            return;
          }
          reject(
            "No hemos podido recuperar ese json. El código de respuesta del servidor es: " + response.status
          );
        })
        .then((json) => resolve(json))
        .catch((err) => reject(err));
    });
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
