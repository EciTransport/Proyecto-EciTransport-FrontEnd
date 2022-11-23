import {React, useState} from 'react';
import './ProfileScreen.css';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {Report}  from '../../Generals/Home/Report';
const ReportUser = ({data, dataUser, reportsUser, setReports}) => {

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
  
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
  
    const deleteElement = (event) => {
      fetch('http://localhost:8080/v1/reports/delete/' + data.idString, {method: 'DELETE'});
      const newListReports = reportsUser.filter(n => n.idString != data.idString);
      setReports(newListReports);
      handleClose(event);
    }

  return (
    <div className="returnReport">
        <Report data={data} user={dataUser}/>
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

export {ReportUser}
