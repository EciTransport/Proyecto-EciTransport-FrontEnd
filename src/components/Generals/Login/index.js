import React from 'react'
import { useState } from 'react';
import { routes } from '../../Utils/routes';
import { usuario, setUsuarios } from '../../Utils/user';
import { useNavigate } from "react-router-dom";

const Login = () => {

  const [title, setTitle] = useState('')

  const navigate = useNavigate();

  function redirect() {
    setUsuarios(title)
    navigate(routes.home.path)
  }

  return (
    <div>
      <label>Digite el codigo de Usuario: </label>

      <input onChange={event => setTitle(event.target.value)} />

      <button onClick={() => redirect()}>Entra</button>

    </div>
  )
}

export {Login}
