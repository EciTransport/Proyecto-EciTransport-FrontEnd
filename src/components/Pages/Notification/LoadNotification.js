import {React, useEffect, useState} from 'react';
import {Container, Notifications} from './styles';
import { Notificacion } from './Notificacion';

const LoadNotification = ({emailUser}) => {

  const [notifications, setNofitications] = useState([]);

  useEffect( () => {
    fetch('http://localhost:8080/v1/notification/' + emailUser)
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
            notifications.length > 0 && notifications.map((data, index) => {
              data.hour = new Date(data.hour).toLocaleString('en-us');
              return <Notificacion key={index} data={data} notifications={notifications} setNofitications={setNofitications}/>
              }) 
          }
          <br></br>
        </Notifications>
    </Container>
  )
}

export {LoadNotification}
