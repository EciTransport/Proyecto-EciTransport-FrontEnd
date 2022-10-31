import React from 'react'
import { useState } from 'react';
import { routes } from '../../Utils/routes';
import { useNavigate } from "react-router-dom";
import { PageLayout } from '../../azure/PageLayout';
import { AuthenticatedTemplate, UnauthenticatedTemplate } from "@azure/msal-react";
import './style.css'
import { Button } from "@mui/material";

const Login = () => {

  const navigate = useNavigate();

  function redirect() {
    navigate(routes.home.path);
  }

  return (
    <div className="login">
      <PageLayout >
        
          <AuthenticatedTemplate>
            <div className="data">
              <h1 className="texto titleData">Bienvenido a EciTransport</h1>
              <h4 className="texto">La Red Social de los Accidentes</h4>
              <Button className="boton" onClick={redirect}>Siguiente</Button>
            </div>
          </AuthenticatedTemplate>

          <UnauthenticatedTemplate>
          <div className="data" >
              <h1 className="texto" >Inicia Sesion</h1>
              <h4 className="texto" >Podras Reportar un accidente y conocer toda la situacion de movilidad</h4>
              <h4 className="texto" >Puedes encontrar el código fuente aquí: <a href='https://github.com/EciTransport'>Ver</a></h4>
          </div> 
          </UnauthenticatedTemplate>
      </PageLayout>
    
    </div>
  )
}

export {Login}