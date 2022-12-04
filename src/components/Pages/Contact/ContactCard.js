import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import PhoneIcon from '@mui/icons-material/Phone';
import MailIcon from '@mui/icons-material/Mail';
import './ContactCard.css';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const ContactCard = ({data}) => {
  return (
    <Card sx={{ maxWidth: 320, width: 250 }}>
      <CardMedia
        component="img"
        height="120"
        image={data.urlBackground}
        alt="green iguana"
      />
      <CardMedia
        className="iconoProfile"
        component="img"
        height="50"
        image={data.urlImageProfile}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" className="nameContact">
          {data.name}
        </Typography>
        <Typography className="dataContact">
          <MailIcon className="iconContact"/>
          <h3 className="textContact" >{data.email}</h3> 
        </Typography>
        <Typography className="dataContact">
          <PhoneIcon className="iconContact"/>
          <h3 className="textContact" >{data.numerPhone}</h3>
        </Typography>
        <Typography className="dataContact">
          <WhatsAppIcon className="iconContact"/>
          <h3 className="textContact" >{data.numberWhatsapp}</h3> 
        </Typography>
      </CardContent>
    </Card>
  )
}

export {ContactCard}
