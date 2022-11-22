import { Report } from '../../Generals/Home/Report';
import {Container, ContainerReport} from './styles';
import React, {useState, useEffect} from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import './ProfileScreen.css';
const ProfileScreen = ({dataUser, emailUser}) => {

  //Cargar Reportes Usuario
  const [reportsUser, setReports] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  useEffect( () => {
    fetch('http://localhost:8080/v1/reports/reportsUserEmail/' + emailUser)
    .then(response => response.json())
    .then(data => setReports(data))} , [] );

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  function deleteElement(data) {
    alert(data);
    //fetch('http://localhost:8080/v1/reports/delete/' + id, {method: 'DELETE'});
    handleClose();
    //const newListReports = reportsUser.filter(r => r.id != id);
    //setReports(newListReports);
  }

  return (
    <Container>
        <div className="profile">
            <div className="profileRight">
                <div className="profileRightTop">
                    <div className="info">
                        <h1>User Profile</h1>
                        <span className="tweets-count" >{reportsUser.length} Reports</span>
                    </div>
                    <div className="profileCover">
                        <img
                            className="profileCoverImg"
                            src="http://landing.escuelaing.edu.co/wp-content/uploads/2017/04/maestrias_v2.jpg"
                        />
                        <img
                            className="profileUserImg"
                            src={dataUser.imageProfile}
                        />
                    </div>
                    <div className="profileInfo">
                        <h5 className="card-title">Welcome</h5>
                        <div className="profileInfo">
                            <h4 className='profileInfoName'>{dataUser.nombre}</h4>
                            <span id="userId" className="profileInfoDesc">{dataUser.email}</span>
                        </div>
                    </div>

                    <ContainerReport>
                        <h2 className="report">Report History</h2>
                        {
                            reportsUser.map(data => {
                                data.hourReport = new Date(data.hourReport).toLocaleString('en-us');
                                const dataId = data.id;
                                return <div className="returnReport" key={data.id}>
                                        <Report key={data.id} data={data} options={false} user={dataUser}/>
                                        <div className="iconMore">
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
                                                <MenuItem onClick={() => deleteElement(dataId)} className="menuItem">Delete</MenuItem>
                                            </Menu>
                                        </div>
                                       </div>
                                }) 
                        }
                    </ContainerReport>
                </div>
            </div>
        </div>

    </Container>

  )
}

export {ProfileScreen}
