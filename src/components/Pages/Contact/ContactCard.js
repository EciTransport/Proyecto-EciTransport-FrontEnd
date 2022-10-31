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

const ContactCard = () => {
  return (
    <Card sx={{ maxWidth: 320, width: 250 }}>
      <CardMedia
        component="img"
        height="120"
        image="https://media.istockphoto.com/photos/firefighter-kneels-before-the-fire-picture-id1213917900?k=20&m=1213917900&s=612x612&w=0&h=iwPDFwG3HZ1ETx8-uEH5nWSfbrlk1Lm7m1cGM2gdrQE="
        alt="green iguana"
      />
      <CardMedia
        className="iconoProfile"
        component="img"
        height="50"
        image="https://1000marcas.net/wp-content/uploads/2022/06/Fire-Department-Logo.png"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" className="nameContact">
          Bomberos
        </Typography>
        <Typography className="dataContact">
          <MailIcon className="iconContact"/>
          <h3 className="textContact" >bomberos@outlook.com</h3> 
        </Typography>
        <Typography className="dataContact">
          <PhoneIcon className="iconContact"/>
          <h3 className="textContact" >(+57) 3203846339</h3>
        </Typography>
        <Typography className="dataContact">
          <WhatsAppIcon className="iconContact"/>
          <h3 className="textContact" >(+57) 3203846339</h3> 
        </Typography>
      </CardContent>
    </Card>
  )
}

export {ContactCard}
