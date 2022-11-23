import React, { useEffect, useState } from 'react'
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import {Posts, User, PostBody, PostDescription, Images, PostFooter, DivModal} from './styles';
import './stylemenu.css';
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

const Report = ({data, user}) => {
    //Like
    const [like, setLike] = useState(false);
    const [arrayLikes, setArrayLikes] = useState([]);    

    //Coment
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    useEffect(() => {
        fetch('http://localhost:8080/v1/reports/listLike/' + data.idString)
        .then(response => response.json())
        .then(data => {setArrayLikes(data); console.log("Data " + data + " User " + user.id); if (data.indexOf(user.id) == 0) setLike(true);  })  }, [])
        
    function delLike() {
        setLike(false);
        if (arrayLikes.indexOf(user.id) == 0) {
            fetch('http://localhost:8080/v1/reports/likeDel/' + data.idString + '/' + user.id, {method: 'PUT'})
            .then(response => response.json())
            .then(value => setArrayLikes(value));
        }
    }

    function addLike() {
        setLike(true);
        if (arrayLikes.indexOf(user.id) == -1) {
            if (data.idUserLikes.indexOf(user.id))
            fetch('http://localhost:8080/v1/reports/likeAdd/' + data.idString + '/' + user.id, {method: 'PUT'})
            .then(response => response.json())
            .then(value => setArrayLikes(value));
            if (data.author.id != user.id) {
                createNotification();
            }
        }
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
    
        fetch('http://localhost:8080/v1/notification', {
          method: 'POST',
          body: JSON.stringify(dataNotification),
          headers:{
            'Content-Type': 'application/json'
          }
        })
        .catch(error => console.error('Error:', error));
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
                    <span>{data.hourReport}</span>
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

                <PostFooter>
                
                    <Button className="reactions reactionslike">
                        {like?<FavoriteIcon onClick={()=> delLike()} fontSize="small" className="iconReaction"/>:<FavoriteBorderIcon onClick={()=>addLike()} fontSize="small" className="iconReaction"/>}
                        <h5> {arrayLikes.length} Likes</h5>
                    </Button>

                    <Button className="reactions reactionscomment" onClick={handleOpen}>
                        <ChatBubbleOutlineIcon fontSize="small" className="iconReaction" onClick={handleOpen} />
                        <h5>Comentarios</h5>
                    </Button>

                    <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
                        <Box sx={styleNew}>
                            <DivModal>
                                <CommentBox key={data.idString} data={data} user={user}/>
                                <CloseIcon className="icon_close" onClick={handleClose}/>
                            </DivModal> 
                        </Box>
                    </Modal>

                </PostFooter>
            </div>
        </PostBody> 
    </Posts>
  )
}

export {Report}
