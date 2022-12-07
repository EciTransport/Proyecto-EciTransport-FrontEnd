import {React, useState} from 'react';
import './ProfileScreen.css';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {Report}  from '../../Generals/Home/Report';
import { useSelector } from "react-redux";

const ReportUser = ({data, dataUser, stomp}) => {

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
      doDeleteReport()
      .then(() => {
        console.log("Eliminar Reporte");
        stomp.send('/app/delReport', {});
        handleClose();
      })
      .catch((error) => {
        console.log("Error encontrado:", error);
      });
    }

    function doDeleteReport() {
      return new Promise((resolve, reject) => {
        fetch('https://demo-1670392611779.azurewebsites.net/v1/reports/delete/' + data.idString, {method: 'DELETE'})
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
