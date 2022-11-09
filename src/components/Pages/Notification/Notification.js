import React from 'react';
import './Notification.css';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

const Notification = () => {
  return (
    <div className="notification">
      <div className="dataNotification">
            <img className="imageNotification" src="https://elcomercio.pe/resizer/pfVziOV4X8Vu9nwknDc-oNItlB8=/1200x900/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/6Y2EDIISGFGVFANEVDCR5LCG34.jpg"/>
            <h1 className="user" >Yesid Mora</h1>
            <span className="spam"> 12:30 pm</span>
      </div>

      <div className="description">
          <h2>Laura Comento tu estado.</h2>
      </div>

      <div className="iconMore">
            <MoreHorizIcon />
      </div>
    </div>
  )
}

export {Notification}
