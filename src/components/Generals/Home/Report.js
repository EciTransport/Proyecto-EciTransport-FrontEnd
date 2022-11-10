import React from 'react'
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import {Posts, User, PostBody, PostDescription, Images, PostFooter} from './styles';
import './stylemenu.css';
import { LongMenu } from './MenuOptions';
import { useState } from 'react';
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

const Report = ({data, options}) => {
    //Like
    const [like, setLike] = useState(false);
    //Coment
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

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
                        { options && <LongMenu id={data.id} />}
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
                        {like?<FavoriteIcon onClick={()=>setLike(false)} fontSize="small" className="iconReaction"/>:<FavoriteBorderIcon onClick={()=>setLike(true)} fontSize="small" className="iconReaction"/>}
                        <h5> {data.numberlikes} Likes</h5>
                    </Button>

                    <Button className="reactions reactionscomment" onClick={handleOpen}>
                        <ChatBubbleOutlineIcon fontSize="small" className="iconReaction" onClick={handleOpen} />
                        <h5>Comentarios</h5>
                    </Button>

                    <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
                        <Box sx={styleNew}>
                            <CommentBox data={data}/>
                        </Box>
                    </Modal>
                </PostFooter>
            </div>
        </PostBody> 
    </Posts>
  )
}

export {Report}
