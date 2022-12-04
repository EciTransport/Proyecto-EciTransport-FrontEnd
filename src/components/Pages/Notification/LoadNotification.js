import {React, useEffect, useState} from 'react';
import {Container, Notifications} from './styles';
import { Notificacion } from './Notificacion';

const LoadNotification = ({emailUser, notifications, stomp}) => {

  return (
    <Container>
        <div className="header">
            <h1>Notifications</h1>
            <span className="contacts-count" >{(notifications)?notifications.filter(r => r.userReceiver.email == emailUser).length:null} Notifications</span>
        </div>
        <br></br>
        <Notifications>
          {
            (notifications)?notifications.filter(r => r.userReceiver.email == emailUser)
            .map((data, index) => {
              return <Notificacion key={index} data={data} notifications={notifications} stomp={stomp}/>
              }):null
          }
          <br></br>
        </Notifications>
    </Container>
  )
}

export {LoadNotification}
