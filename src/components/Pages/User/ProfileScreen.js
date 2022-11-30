import {Container, ContainerReport} from './styles';
import React, { useEffect} from 'react';
import './ProfileScreen.css';
import { ReportUser } from './ReportUser';
import { useSelector, useDispatch } from "react-redux";
import { getDataReports } from "../../redux/reports";

const ProfileScreen = ({dataUser, emailUser}) => {

  const dispatch = useDispatch();
  const dataReports = useSelector((state) => state.reports.value);

  useEffect(() => {
    if (!dataReports) {
      fetch('http://localhost:8080/v1/reports/')
      .then(response => response.json())
      .then((dataReport) => dispatch(getDataReports(dataReport)))}
    } , [])
    
  return (
    <Container>
        <div className="profile">
            <div className="profileRight">
                <div className="profileRightTop">
                    <div className="info">
                        <h1>User Profile</h1>
                        <span className="tweets-count" >{(dataReports)?dataReports.filter(r => r.author.email == emailUser).length:null} Reports</span>
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
                            (dataReports)?dataReports.filter(r => r.author.email == emailUser).map((data, index) => {
                                return <ReportUser key={index} data={data} dataUser={dataUser}/>
                                }):null
                        }
                    </ContainerReport>
                </div>
            </div>
        </div>

    </Container>

  )
}

export {ProfileScreen}
