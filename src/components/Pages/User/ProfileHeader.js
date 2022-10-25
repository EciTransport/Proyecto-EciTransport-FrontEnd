import React from 'react'
import { Report } from '../../Generals/Home/Report';
import './profile.css'
import {Header, Container, ContainerReport} from './styles';
import {useState, useEffect} from 'react';
import { callMsGraph } from "../../../graph";
import { PageLayout } from "../../../components/PageLayout";
import { AuthenticatedTemplate, UnauthenticatedTemplate, useMsal } from "@azure/msal-react";
import { loginRequest } from "../../../authConfig";
import Button from "react-bootstrap/Button";


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
                        <ProfileContent />
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

const ProfileData = (props) => {
    return (
        <div className="profileInfo">
            <h4 className='profileInfoName'>First Name:  {props.graphData.givenName}
            {props.graphData.surname}
            </h4>
            <span className="profileInfoDesc">Email:{props.graphData.userPrincipalName}</span>
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
            <h5 className="card-title">Welcome {name}</h5>
            {graphData ? 
                <ProfileData graphData={graphData} />
                :
                <Button variant="secondary" onClick={RequestProfileData}>Request Profile Information</Button>
            }
        </>
    );
};