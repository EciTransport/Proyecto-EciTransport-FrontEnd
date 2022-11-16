import React, { useEffect, useState } from 'react'
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import {Posts, User, PostBody, PostDescription, Images, PostFooter} from './styles';
import './stylemenu.css';
import { LongMenu } from './MenuOptions';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { Button } from '@mui/material';
import {CommentBox} from './CommentBox';

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
    const [numLikes, setNumLikes] = useState(0);
    //Coment
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    //useEffect(() => {
    //    data.idUserLikes.map(value => {if(value == user.id) setLike(true)});
    //    setNumLikes(data.idUserLikes.length);
    //}, []);

    function delLike() {
        setLike(false);
        fetch('http://localhost:8080/v1/reports/likeDel/' + data.id + '/' + user.id, {method: 'PUT'})
        .then(response => response.json())
        .then(value => setNumLikes(value.length));
    }

    function addLike() {
        setLike(true);
        fetch('http://localhost:8080/v1/reports/likeAdd/' + data.id + '/' + user.id, {method: 'PUT'})
        .then(response => response.json())
        .then(value => setNumLikes(value.length));
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
                {
                    data.imagesReport.map(image =>
                        <Images key={image.urlImage} src={image.urlImage} />
                    )
                }
                <PostFooter>
                    

                    <Button className="reactions reactionslike">
                        {like?<FavoriteIcon onClick={()=> delLike()} fontSize="small" className="iconReaction"/>:<FavoriteBorderIcon onClick={()=>addLike()} fontSize="small" className="iconReaction"/>}
                        <h5> {numLikes} Likes</h5>
                    </Button>

                    <Button className="reactions reactionscomment" onClick={handleOpen}>
                        <ChatBubbleOutlineIcon fontSize="small" className="iconReaction" onClick={handleOpen} />
                        <h5>Comentarios</h5>
                    </Button>

                    <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
                        <Box sx={styleNew}>
                            <CommentBox key={data.id} data={data}/>
                        </Box>
                    </Modal>

                </PostFooter>
            </div>
        </PostBody> 
    </Posts>
  )
}

export {Report}
