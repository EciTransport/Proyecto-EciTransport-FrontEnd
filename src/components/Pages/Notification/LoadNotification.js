import {React, useEffect, useState} from 'react';
import {Container, Notifications} from './styles';
import { Notification } from './Notification';
import { useMsal } from "@azure/msal-react";

const LoadNotification = () => {

  const [notifications, setNofitications] = useState([]);
  const { accounts } = useMsal();
  const name = accounts[0] && accounts[0].name;

  useEffect( () => {
    fetch('http://localhost:8080/v1/notification/' + name.toLowerCase() + '@carlosorduz01outlook.onmicrosoft.com')
    .then(response => response.json())
    .then(data => setNofitications(data)) } , [] );

  return (
    <Container>
        <div className="header">
            <h1>Notifications</h1>
            <span className="contacts-count" >{notifications.length} Notifications</span>
        </div>
        <br></br>
        <Notifications>
          {
            notifications.map(data => {
              data.hour = new Date(data.hour).toLocaleString('en-us');
              return <Notification key={data.id} data={data}/>
              }) 
          }
          <br></br>
        </Notifications>
    </Container>
  )
}

export {LoadNotification}
