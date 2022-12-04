import React from 'react'
import { useState, useEffect } from 'react';
import { routes } from '../../Utils/routes';
import { useNavigate } from "react-router-dom";
import { PageLayout } from '../../azure/PageLayout';
import { AuthenticatedTemplate, UnauthenticatedTemplate } from "@azure/msal-react";
import './style.css'
import { Button } from "@mui/material";
import { useMsal } from "@azure/msal-react";
import { useDispatch } from "react-redux";
import { getData } from "../../redux/sessionUser";
import { getDataReports } from "../../redux/reports";

const Login = () => {
  const { accounts } = useMsal();
  const name = accounts[0] && accounts[0].name;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function redirect() {
    navigate(routes.home.path);
    fetch('https://demo-1670185917097.azurewebsites.net/v1/user/email/' + name.toLowerCase() + '@carlosorduz01outlook.onmicrosoft.com')
    .then(response => response.json())
    .then((data) => dispatch(getData(data.value)))

    fetch('https://demo-1670185917097.azurewebsites.net/v1/reports/')
    .then(response => response.json())
    .then((data) => dispatch(getDataReports(data)))
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