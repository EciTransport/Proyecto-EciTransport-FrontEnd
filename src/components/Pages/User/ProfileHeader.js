import React from 'react'
import { Report } from '../../Generals/Home/Report';
import './profile.css'
import {Container, ContainerReport} from './styles';
import {useState, useEffect} from 'react';
import { usuario } from '../../Utils/user'

const HeaderProfile = () => {

  //Cargar Reportes Usuario
  const [reportsUser, setReports] = useState([]);

  const [user, setUser] = useState([]);

  useEffect( () => {
    fetch('http://localhost:8080/v1/user/id/' + usuario)
    .then(response => response.json())
    .then((data) => setUser(data.value)) } , [] );

  useEffect( () => {
    fetch('http://localhost:8080/v1/reports/reportsUser/' + usuario)
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
                        src={user.imageProfile}
                        alt=""
                    />
                    </div>
                    <div className="profileInfo">
                        <h4 className="profileInfoName">{user.nombre}</h4>
                        <span className="profileInfoDesc">{user.id}</span>
                        <span className="profileInfoDesc">{user.email}</span>
                    </div>
                    <ContainerReport>
                        <h2 className="report">Report History</h2>
                        {
                            reportsUser.map(data => <Report key={data.id} data={data} options={true}/>) 
                        }
                    </ContainerReport>
                </div>
            </div>
        </div>

    </Container>
  )
}

export {HeaderProfile}