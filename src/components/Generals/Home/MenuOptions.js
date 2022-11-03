import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import './stylemenu.css';

const ITEM_HEIGHT = 30;

const LongMenu = ({id}) => {
    
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const deleteElement = (event) => {
    fetch('http://localhost:8080/v1/reports/delete/' + id, {method: 'DELETE'});
    handleClose(event);
    
    window.location.reload();
  }

  return (
    <div className="moreDiv">
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
  );
}

export {LongMenu}
