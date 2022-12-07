import {React, useState} from 'react';
import {ReportsBox, Div, Form, User, PostDescriptionComment, LoadComment, CommentReport} from './styles';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { CommentCard } from './CommentCard';
import { Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { Error } from './Error';
import { useSelector } from "react-redux";

const CommentBox = ({data, user, stomp}) => {

  const [description, setDescription] = useState('');
  const [error, setError] = useState(false);
  const dataComments = useSelector((state) => state.comments.value);
  const dataNotifications = useSelector((state) => state.notifications.value);

  function createComment() {
    if (description == "" || description == null) {
      setError(true);
      return;
    }
    setError(false);
    const dataComment = 
    { 
      "idReport": data.idString,
      "user": {
        "id": user.id, 
        "nombre": user.nombre,
        "email": user.email,
        "imageProfile": user.imageProfile
      },
      "hour": new Date(),
      "comment": description
    };
    if (data.author.id != user.id) {
      console.log("Crear Notificacion");
      //createNotification();
    } else {
      console.log("No Crear Notificacion");
    }
    doComment(dataComment)
    .then((comment) => {
      console.log("El comentario es:", comment);
      console.log("Lon1", dataComments);
      var newListComments = [...dataComments];
      newListComments.push(comment);
      console.log("Lon2", newListComments);
      console.log(stomp);
      stomp.send('/app/addComment', {});
    })
    .catch((error) => {
      console.log("Error encontrado:", error);
    });
    cleanInput();
  }

  function doComment(data) {
    return new Promise((resolve, reject) => {
      fetch('http://localhost:8080/v1/comments/' , {
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

  function cleanInput() {
    setDescription(null);
    const input = document.getElementById("commentar");
    input.value = "";
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
        "description": user.nombre + ' Comento tu reporte.'
      }

    doNotification(dataNotification)
    .then((notification) => {
      console.log("La notificacion es:", notification);
      stomp.send('/app/addNotification', {})
    })
    .catch((error) => {
      console.log("Error encontrado:", error);
    });
  }

  function doNotification(data) {
    return new Promise((resolve, reject) => {
      fetch('http://localhost:8080/v1/notification', {
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

  function deleteElement(id) {
    doDeleteReport(id)
      .then(() => {
        console.log("Eliminar Comentario");
        stomp.send('/app/delComment', {});
      })
      .catch((error) => {
        console.log("Error encontrado:", error);
      });
  }

  function doDeleteReport(id) {
    return new Promise((resolve, reject) => {
      fetch('http://localhost:8080/v1/comments/delete/' + id, {method: 'DELETE'})
      .then((response) => {
          if (response.ok) {
            return;
          }
          reject(
            "No hemos podido recuperar ese json. El código de respuesta del servidor es: " + response.status
          );
        })
        .then((json) => resolve(json))
        .catch((err) => reject(err));
    });
  }

  let componentError;
  if (error) {
    componentError = <Error message="Obligatory field"/>
  }
  else {
    componentError = null;
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
                (dataComments)?dataComments.filter(c => c.idReport == data.idString)
                .map((comment, index) => {
                  return <div className="returnComment" key={index}>
                    <CommentCard key={comment.hour} data={comment}/>
                    {(comment.user.id == user.id)?<DeleteIcon className="moreIconComment" onClick={() => deleteElement(comment.idString)}/>:null}
                  </div>
                }):null
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
                    <input id="commentar" required onChange={event => setDescription(event.target.value)} text="text" placeholder="Comment the report"/>
              </div>
              <Button onClick={() => createComment()} >Comment</Button>
          </div>

          <div className="error">
            {componentError}
          </div>

        </div>
    </ReportsBox>
  )
}

export {CommentBox}





