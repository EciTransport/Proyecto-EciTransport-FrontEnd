import {React, useState} from 'react';
import './ProfileScreen.css';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {Report}  from '../../Generals/Home/Report';
import { useSelector, useDispatch } from "react-redux";

const ReportUser = ({data, dataUser, stomp}) => {

    const dispatch = useDispatch();
    const dataReports = useSelector((state) => state.reports.value);
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
  
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };

    const deleteElement = (event) => {
      fetch('https://demo-1670185917097.azurewebsites.net/v1/reports/delete/' + data.idString, {method: 'DELETE'});
      const newListReports = dataReports.filter(n => n.idString != data.idString);
      stomp.send('/app/delReport', {}, JSON.stringify(newListReports));
      handleClose(event);
    }

  return (
    <div className="returnReport">
        <Report data={data} user={dataUser} stomp={stomp}/>
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
