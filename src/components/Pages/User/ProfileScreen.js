import {Container, ContainerReport} from './styles';
import React, {useState, useEffect} from 'react';
import './ProfileScreen.css';
import { ReportUser } from './ReportUser';

const ProfileScreen = ({dataUser, emailUser}) => {

  const [reportsUser, setReports] = useState([]);

  useEffect( () => {
    fetch('http://localhost:8080/v1/reports/')
    .then(response => response.json())
    .then(data => setReports(data.filter(r => r.author.email == emailUser)))} , [] );

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
                            reportsUser.map((data, index) => {
                                data.hourReport = new Date(data.hourReport).toLocaleString('en-us');
                                return <ReportUser key={index} data={data} dataUser={dataUser} reportsUser={reportsUser}
                                setReports={setReports}/>
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
