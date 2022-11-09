import * as React from 'react';
import './Notification.css';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const Notification = ({data}) => {

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const deleteElement = (event) => {
    fetch('http://localhost:8080/v1/notification/delete/' + data.id, {method: 'DELETE'});
    handleClose(event);
    window.location.reload();
  }

  return (
    <div className="notification">
      <div className="dataNotification">
            <img className="imageNotification" src={data.userCreator.imageProfile}/>
            <h1 className="user" >{data.userCreator.nombre}</h1>
            <span className="spam">{data.hour}</span>
      </div>

      <div className="description">
          <h2>{data.description}</h2>
      </div>

      <div className="iconMore">
          <IconButton aria-label="more" id="long-button" 
            aria-controls={open ? 'long-menu' : undefined} 
            aria-expanded={open ? 'true' : undefined} 
            aria-haspopup="true" onClick={handleClick} >
              <MoreHorizIcon className="moreIcon"/>
          </IconButton>

          <Menu id="long-menu" MenuListProps={{ 'aria-labelledby': 'long-button', }}
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
            >
              <MenuItem onClick={deleteElement} className="menuItem">Delete</MenuItem>
          </Menu>
      </div>

    </div>
  )
}

export {Notification}
