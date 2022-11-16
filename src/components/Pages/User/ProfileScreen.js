import React from 'react'
import { Report } from '../../Generals/Home/Report';
import './ProfileScreen.css'
import {Container, ContainerReport} from './styles';
import {useState, useEffect} from 'react';
import { useMsal } from "@azure/msal-react";

const ProfileScreen = ({dataUser, user}) => {

  //Cargar Reportes Usuario
  const [reportsUser, setReports] = useState([]);

  const { accounts } = useMsal();

  const name = accounts[0] && accounts[0].name;

  useEffect( () => {
    fetch('http://localhost:8080/v1/reports/reportsUserEmail/' + name.toLowerCase() + '@carlosorduz01outlook.onmicrosoft.com')
    .then(response => response.json())
    .then(data => setReports(data))} , [] );

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
                                return <Report key={data.id} data={data} options={true} user={dataUser}/>
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
