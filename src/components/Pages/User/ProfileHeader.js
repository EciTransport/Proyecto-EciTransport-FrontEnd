import React from 'react'
import { Report } from '../../Generals/Home/Report';
import './profile.css'
import {Header, Container, ContainerReport} from './styles';
import {useState, useEffect} from 'react';

const HeaderProfile = () => {

  //Cargar Reportes Usuario
  const [reportsUser, setReports] = useState([]);

  useEffect( () => {
    fetch('http://localhost:8080/v1/reports/')
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
                        alt=""
                    />
                    <img
                        className="profileUserImg"
                        src="https://i0.wp.com/codigoespagueti.com/wp-content/uploads/2022/07/toyotaro-dragon-ball-super-ilustracion.jpg?fit=1280%2C720&quality=80&ssl=1"
                        alt=""
                    />
                    </div>
                    <div className="profileInfo">
                        <h4 className="profileInfoName">Yesid Mora</h4>
                        <span className="profileInfoDesc">100044778</span>
                        <span className="profileInfoDesc">yesid.mora@mail.escuelaing.edu.co</span>
                    </div>
                    <ContainerReport>
                        <h2 className="report">Report History</h2>
                        {
                            reportsUser.map(data => <Report key={data.id} data={data} />) 
                        }
                    </ContainerReport>
                </div>
            </div>
        </div>

    </Container>
  )
}

export {HeaderProfile}