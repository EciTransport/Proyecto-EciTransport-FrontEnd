import React from 'react'
import { Report } from '../../Generals/Home/Report';
import './profile.css'
import {Container, ContainerReport} from './styles';
import {useState, useEffect} from 'react';
import { usuario } from '../../Utils/user'
import { callMsGraph } from "../../../loginAzure/graph";
import { loginRequest } from "../../../loginAzure/authConfig";
import { useMsal } from "@azure/msal-react";


const HeaderProfile = () => {
    const { accounts } = useMsal();

    const name = accounts[0] && accounts[0].name;

    
  //Cargar Reportes Usuario
  const [reportsUser, setReports] = useState([]);

  const [user, setUser] = useState([]);

  useEffect( () => {
    fetch('http://localhost:8080/v1/user/email/' + name.toLowerCase() + '@carlosorduz01outlook.onmicrosoft.com')
    .then(response => response.json())
    .then((data) => setUser(data.value)) } , [] );

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
                        alt=""
                    />
                    <img
                        className="profileUserImg"
                        src={user.imageProfile}
                        alt=""
                    />
                    </div>
                    <div className="profileInfo">
                        {/* <h4 className="profileInfoName">{user.nombre}</h4>
                        <span className="profileInfoDesc">{user.id}</span>
                        <span className="profileInfoDesc">{user.email}</span> */}
                        <ProfileContent />

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



const ProfileData = (props) => {
    return (
        <div className="profileInfo">
            <h4 className='profileInfoName'>{props.graphData.givenName} {props.graphData.surname}
            </h4>
            
            <span id="userId" className="profileInfoDesc">{props.graphData.userPrincipalName}</span>
        </div>
    );
};

function ProfileContent() {
    const { instance, accounts } = useMsal();
    const [graphData, setGraphData] = useState(null);

    const name = accounts[0] && accounts[0].name;

    function RequestProfileData() {
        const request = {
            ...loginRequest,
            account: accounts[0]
        };

        // Silently acquires an access token which is then attached to a request for Microsoft Graph data
        instance.acquireTokenSilent(request).then((response) => {
            callMsGraph(response.accessToken).then(response => setGraphData(response));
        }).catch((e) => {
            instance.acquireTokenPopup(request).then((response) => {
                callMsGraph(response.accessToken).then(response => setGraphData(response));
            });
        });
    }

    return (
        <>
            <h5 className="card-title">Welcome</h5>
            {graphData ? 
                <ProfileData graphData={graphData} />
                :
                RequestProfileData()
            }
        </>
    );
};