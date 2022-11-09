import React from 'react'
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import {Posts, User, PostBody, PostDescription, Images, PostFooter} from './styles';
import './stylemenu.css';
import { LongMenu } from './MenuOptions';
import { useState } from 'react';

const Report = ({data, options}) => {


    const [like, setLike] = useState(false);

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
                    <div className="reactions">
                        {like?<FavoriteIcon onClick={()=>setLike(false)} fontSize="small" className="iconReaction"/>:<FavoriteBorderIcon onClick={()=>setLike(true)} fontSize="small" className="iconReaction"/>}
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
