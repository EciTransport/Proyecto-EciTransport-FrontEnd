import React from 'react'
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {Posts, User, PostBody, PostDescription, Images, PostFooter} from './styles';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import './stylemenu.css';
import MenuList from '@mui/material/MenuList';
import Button from '@mui/material/Button';
import { LongMenu } from './MenuOptions';
const Report = ({data}) => {

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
                        <LongMenu id={data.id} />
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
                    <div className="reactions">
                        <FavoriteBorderIcon fontSize="small" className="iconReaction"/>
                        <h5> {data.numberlikes} Likes</h5>
                    </div>
                    <div className="reactions">
                        <ChatBubbleOutlineIcon fontSize="small" className="iconReaction"/>
                        <h5>Comentarios</h5>
                    </div>
                </PostFooter>
            </div>
        </PostBody> 
    </Posts>
  )
}

export {Report}
