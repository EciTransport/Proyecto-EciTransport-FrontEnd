import {React, useEffect, useState} from 'react';
import {Container, Notifications} from './styles';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import './Notification.css';
import { Button } from '@mui/material';
const LoadNotification = ({emailUser}) => {

  const [notifications, setNofitications] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  useEffect( () => {
    fetch('http://localhost:8080/v1/notification/' + emailUser)
    .then(response => response.json())
    .then(data => setNofitications(data)) } , [] );
  
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  function deleteElement(id) {
    console.log("Delete " + id);
    //fetch('http://localhost:8080/v1/notification/delete/' + id, {method: 'DELETE'});
    handleClose();
    //const newListNotifications = notifications.filter(n => n.idString != id);
    //setNofitications(newListNotifications);
  }

  function imprimir(id) {
    console.log("Es su ID " + id);
  }

  return (
    <Container>
        <div className="header">
            <h1>Notifications</h1>
            <span className="contacts-count" >{notifications.length} Notifications</span>
        </div>
        <br></br>
        <Notifications>
          {
            notifications.map(data => {
              data.hour = new Date(data.hour).toLocaleString('en-us');
              return <div className="notification" key={data.idString}>
                        <div className="dataNotification">
                          <img className="imageNotification" src={data.userCreator.imageProfile}/>
                          <h1 className="user" >{data.userCreator.nombre}</h1>
                          <span className="spam">{data.hour}</span>
                        </div>

                        <div className="description">
                            <h2>{data.description}</h2>
                        </div>
                        
                        <div className="iconMoreN">
                            <IconButton aria-label="more" id="long-button" 
                                aria-controls={open ? 'long-menu' : undefined} 
                                aria-expanded={open ? 'true' : undefined} 
                                aria-haspopup="true" onClick={handleClick} >
                                <MoreVertIcon className="moreIconN"/>
                            </IconButton>
                            <Menu id="long-menu" MenuListProps={{ 'aria-labelledby': 'long-button', }}
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleClose}
                                >
                                <Button onClick={() => imprimir(data.idString)} >ID</Button>
                                <MenuItem onClick={() => deleteElement(data.idString)} className="menuItem">Delete</MenuItem>
                            </Menu>
                            
                        </div>
                     </div>
              }) 
          }
          <br></br>
        </Notifications>
    </Container>
  )
}

export {LoadNotification}
