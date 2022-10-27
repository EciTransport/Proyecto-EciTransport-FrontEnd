import React from "react";
import { useIsAuthenticated } from "@azure/msal-react";
import { SignInButton } from "./SignInButton";
import { SignOutButton } from "./SignOutButton";
import styled from 'styled-components'
import { NavLink } from "react-router-dom";
import './loginstyle.css'
/**
 * Renders the navbar component with a sign-in button if a user is not authenticated
 */
export const PageLayout = (props) => {
    const isAuthenticated = useIsAuthenticated();

    return (
        <>
              <div className="LoginPage mw-100">
                  <nav className="navBar flex-grow-1 justify-content-evenly">
                    <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Logo_de_la_Escuela_Colombiana_de_Ingenier%C3%ADa.svg/2560px-Logo_de_la_Escuela_Colombiana_de_Ingenier%C3%ADa.svg.png' style={{ width: 120, height: 50 }} ></img>
                    <h2>Bienvenido a <span>ECITransport</span></h2>
                    <div className="Login">
                        <a className="navbar-brand" href="/"></a>
                        { isAuthenticated ? <SignOutButton /> : <SignInButton /> }
                    </div>
                  </nav>
              </div>

            {props.children}
        </>
    );
};
