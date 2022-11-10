import {React, useState, useEffect} from 'react';
import {ReportsBox, Div, Form, User, PostDescriptionComment} from './styles';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useMsal } from "@azure/msal-react";

const CommentBox = ({data}) => {

  const { accounts } = useMsal();
  const name = accounts[0] && accounts[0].name;
  const [user, setUser] = useState([]);

  useEffect( () => {
    fetch('http://localhost:8080/v1/user/email/' + name.toLowerCase() + '@carlosorduz01outlook.onmicrosoft.com')
    .then(response => response.json())
    .then((data) => setUser(data.value)) } , [] );

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

        <Div>
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
        </Div>

    </ReportsBox>
  )
}

export {CommentBox}





