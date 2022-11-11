import React from 'react';
import {ReportsBoxComment, DivComment, UserComment, PostDescriptionComment} from './styles';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const CommentCard = ({data}) => {
  return (
    <ReportsBoxComment>
        <DivComment>
              <div className="header">
                <UserComment src={data.user.imageProfile} alt="" className="user"/>
                <h3 className="headerh3">
                  <div>
                      {data.user.nombre}
                      <CheckCircleIcon className="post_icon"/> 
                      <span> {data.hour}</span>  
                  </div>
                  <span >
                      {data.user.email}
                  </span>
                </h3>
              </div>
        </DivComment>
        <PostDescriptionComment>
            <p>{data.comment}</p>
        </PostDescriptionComment>
    </ReportsBoxComment>
  )
}

export {CommentCard}
