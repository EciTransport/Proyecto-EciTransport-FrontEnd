import React from 'react';
import {Container, Notifications} from './styles';
import { Notification } from './Notification';

const LoadNotification = () => {
  return (
    <Container>
        <div className="header">
            <h1>Notifications</h1>
            <span className="contacts-count" >12 Notifications</span>
        </div>
        <br></br>
        <Notifications>
            <Notification />
            <Notification />
            <Notification />
        </Notifications>
    </Container>
  )
}

export {LoadNotification}
