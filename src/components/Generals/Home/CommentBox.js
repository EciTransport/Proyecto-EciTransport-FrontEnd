import {React, useState, useEffect} from 'react';
import {ReportsBox, Div, Form, User, PostDescriptionComment, LoadComment, CommentReport} from './styles';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useMsal } from "@azure/msal-react";
import { CommentCard } from './CommentCard';
import { Button } from '@mui/material';

const CommentBox = ({data, user}) => {

  const [description, setDescription] = useState('');
  const [notifications, setNofitications] = useState([]);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    setComments(data.comments) }, [])

  useEffect( () => {
    fetch('http://localhost:8080/v1/notification/All')
    .then(response => response.json())
    .then((data) => setNofitications(data)) } , [] );

  function createComment() {
    const dataComment = 
      { 
        "user": {
          "id": user.id, 
          "nombre": user.nombre,
          "email": user.email,
          "imageProfile": user.imageProfile
        },
        "hour": new Date(),
        "comment": description
      };

      fetch('http://localhost:8080/v1/reports/comment/' + data.id, {
        method: 'PUT',
        body: JSON.stringify(dataComment),
        headers:{
          'Content-Type': 'application/json'
        }
      })
      .catch(error => console.error('Error:', error));
      if (data.author.id != user.id) {
        createNotification();
      }
      setComments((previusComments) => previusComments.concat(dataComment));
      setDescription(null);
  }

  function createNotification() {
    
    const dataNotification =
      {
        "id": notifications.length + 1,
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
        "description": user.nombre + ' Comento tu reporte.'
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
    <ReportsBox>
      <Form>
           <Div>
              <div className="header">
                <User src={data.author.imageProfile} alt="" className="user"/>
                <h3 className="headerh3">
                  <div>
                      {data.author.nombre}
                      <CheckCircleIcon className="post_icon"/> 
                      <span> {data.hourReport}</span>  
                  </div>
                  <span >
                      {data.author.email}
                  </span>
                </h3>
              </div>
            </Div>

            <PostDescriptionComment>
                  <p>{data.description}</p>
                  <p>{data.ubicacion}</p>
                  <p>{data.sentido}</p>
            </PostDescriptionComment>
        </Form>

        <LoadComment>
            {
                comments.map(comment => {
                comment.hour = new Date(comment.hour).toLocaleString('en-us');
                return <CommentCard key={comment.user} data={comment}/>
                }) 
            }
        </LoadComment>

        <div className='sectionComment'>
          <CommentReport>
                <div className="header">
                  <User src={user.imageProfile} alt="" className="user"/>
                  <h3 className="headerh3">
                    <div>
                        {user.nombre}
                        <CheckCircleIcon className="post_icon"/> 
                    </div>
                    <span >
                        {user.email}
                    </span>
                  </h3>
                </div>
          </CommentReport>

          <div className='createComment'>
              <div className="columns">
                    <input onChange={event => setDescription(event.target.value)} required text="text" placeholder="Comenta este Reporte"/>
              </div>
              <Button onClick={() => createComment()} >Comment</Button>
          </div>

        </div>
    </ReportsBox>
  )
}

export {CommentBox}





