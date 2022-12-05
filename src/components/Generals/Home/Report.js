import React, { useEffect, useState } from 'react'
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import {Posts, User, PostBody, PostDescription, Images, PostFooter, DivModal} from './styles';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { Button } from '@mui/material';
import {CommentBox} from './Comment';
import CloseIcon from '@mui/icons-material/Close';

const styleNew = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 550,
    bgcolor: 'background.paper',
    border: '2px solid var(--Icon-App-Color)',
    boxShadow: 24,
    background: 'white',
    'border-radius': '1.0em',
    p: 4,
};

const Report = ({data, user, footerReportOff, stomp, setStomp}) => {
    //Like
    const [like, setLike] = useState(false);

    //Coment
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    useEffect(() => {
        if (data.idUserLikes.indexOf(user.id) == 0) {
            setLike(true);
        }
        console.log("Data " + data.idUserLikes + " User " + user.id)
    }, [])

    function delLike() {
        setLike(false); 
        doDelLike()
        .then((report) => {
            console.log("Reporte Actualizado", report);
            stomp.send('/app/updateReport', {}); 
        })
        .catch((error) => {
            console.log("Error encontrado:", error);
        });
    }

    function doDelLike() {
        return new Promise((resolve, reject) => {
            fetch('https://demo-1670185917097.azurewebsites.net/v1/reports/likeDel/' + data.idString + '/' + user.id, {method: 'PUT'})
            .then((response) => {
              if (response.ok) {
                return response.json();
              }
              reject(
                "No hemos podido recuperar ese json. El código de respuesta del servidor es: " + response.status
              );
            })
            .then((json) => resolve(json))
            .catch((err) => reject(err));
        });
    }

    function addLike() {
        setLike(true);
        doAddLike()
        .then((report) => {
            console.log("Reporte Actualizado", report);
            stomp.send('/app/updateReport', {});
            if (data.author.id != user.id) {
                createNotification();
            }
        })
        .catch((error) => {
            console.log("Error encontrado:", error);
        });
    }

    function doAddLike() {
        return new Promise((resolve, reject) => {
        fetch('https://demo-1670185917097.azurewebsites.net/v1/reports/likeAdd/' + data.idString + '/' + user.id, {method: 'PUT'})
            .then((response) => {
              if (response.ok) {
                return response.json();
              }
              reject(
                "No hemos podido recuperar ese json. El código de respuesta del servidor es: " + response.status
              );
            })
            .then((json) => resolve(json))
            .catch((err) => reject(err));
        });
    }

    function createNotification() {
        const dataNotification =
          {
            "userReceiver": {
                "id": data.author.id,
                "nombre": data.author.nombre,
                "email": data.author.email,
                "imageProfile": data.author.imageProfile
            },
            "userCreator": {
                "id": user.id,
                "nombre": user.nombre,
                "email": user.email,
                "imageProfile": user.imageProfile
            },
            "hour": new Date(),
            "description": user.nombre + ' Reacciono a tu Reporte.'
          }
    
        doNotification(dataNotification)
        .then((notification) => {
          console.log("La notificacion es:", notification);
          stomp.send('/app/addNotification', {}, JSON.stringify(notification))
        })
        .catch((error) => {
          console.log("Error encontrado:", error);
        });
    }


    function doNotification(data) {
        return new Promise((resolve, reject) => {
          fetch('https://demo-1670185917097.azurewebsites.net/v1/notification', {
            method: 'POST',
            body: JSON.stringify(data),
            headers:{
              'Content-Type': 'application/json'
            }
          })
          .then((response) => {
              if (response.ok) {
                return response.json();
              }
              reject(
                "No hemos podido recuperar ese json. El código de respuesta del servidor es: " + response.status
              );
            })
          .then((json) => resolve(json))
          .catch((err) => reject(err));
        });
    }

  return (
    <Posts>
        
        <div className="post_user">
            <User src={data.author.imageProfile}/>
        </div>
        
        <PostBody>
            <div>
                <div>
                    <div className="header">
                        <h3>{data.author.nombre}
                            <span >
                                <CheckCircleIcon className="post_icon"/> 
                                {data.author.email}
                            </span>  
                        </h3>
                    </div>
                    <span>{new Date(data.hourReport).toLocaleString('en-us')}</span>
                    <PostDescription>
                        <p>{data.description}</p>
                        <p>{data.ubicacion}</p>
                        <p>{data.sentido}</p>
                    </PostDescription>
                </div>
                <div className="imagenes">
                    {
                        data.imagesReport.map((image, index) =>
                            <Images key={index} src={image} />
                        )
                    }
                </div>

                {footerReportOff?null:<PostFooter>
                
                    <Button className="reactions reactionslike">
                        {like?<FavoriteIcon onClick={()=> delLike()} fontSize="small" className="iconReaction"/>:<FavoriteBorderIcon onClick={()=>addLike()} fontSize="small" className="iconReaction"/>}
                        <h5> {data.idUserLikes.length} Likes</h5>
                    </Button>

                    <Button className="reactions reactionscomment" onClick={handleOpen}>
                        <ChatBubbleOutlineIcon fontSize="small" className="iconReaction" onClick={handleOpen} />
                        <h5>Comments</h5>
                    </Button>

                    <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
                        <Box sx={styleNew}>
                            <DivModal>
                                <CommentBox key={data.idString} data={data} user={user} stomp={stomp}/>
                                <CloseIcon className="icon_close" onClick={handleClose}/>
                            </DivModal> 
                        </Box>
                    </Modal>

                </PostFooter>}
            </div>
        </PostBody> 
    </Posts>
  )
}

export {Report}
