import React from 'react'
import { useState } from 'react';
import { routes } from '../../Utils/routes';
import { usuario, setUsuarios } from '../../Utils/user';
import { useNavigate } from "react-router-dom";
import CarCrashIcon from '@mui/icons-material/CarCrash';
import { Label } from '@mui/icons-material';
import { Button, Input } from '@mui/material';
import './style.css';
const Login = () => {

  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate();

  function redirect() {
    navigate(routes.home.path)
  }

  return (
    <div className="login">

      <header className="header">
          <CarCrashIcon className="icon"/>
          <h1 className="title">EciTransport</h1>
      </header>

      <div className="label">
        <div className='comp'>
          <Label className="labels" >User</Label>
          <Input className="input" type="text" placeholder='user' onChange={event => setUser(event.target.value)} />
        </div>
        
        <div className='comp'>
          <Label className="labels">Password</Label>
          <Input placeholder='Password' type="text" onChange={event => setPassword(event.target.value)}/>
        </div>
      
        <Button onClick={() => redirect()}>Entra</Button>
      
      </div>
    </div>
  )
}

export {Login}
