import React from 'react'
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import {Posts, User, PostBody, PostDescription, Images, PostFooter} from './styles';

const Report = ({data}) => {

  return (
    <Posts>
        
        <div className="post_user">
            <User src={data.author.imageProfile}/>
        </div>
        
        <PostBody>
            <div>
                <div>
                    <h3>{data.author.nombre}
                        <span>
                            <CheckCircleIcon className="post_icon"/> 
                            {data.author.email}
                        </span> 
                    </h3>
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
                    <FavoriteBorderIcon fontSize="small"/>
                    <h5> {data.numberlikes} Likes</h5>
                    <ChatBubbleOutlineIcon fontSize="small" />
                    <h5>Comentarios</h5>
                </PostFooter>
            </div>
        </PostBody> 
    </Posts>
  )
}

export {Report}
