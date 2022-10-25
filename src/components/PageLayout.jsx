import React from "react";
import {NavContainer} from '../styles/Loginstyle';
import { useIsAuthenticated } from "@azure/msal-react";
import { SignInButton } from "./SignInButton";
import { SignOutButton } from "./SignOutButton";
import styled from 'styled-components'
import { NavLink } from "react-router-dom";
import './loginstyle.css'
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
/**
 * Renders the navbar component with a sign-in button if a user is not authenticated
 */
export const PageLayout = (props) => {
    const isAuthenticated = useIsAuthenticated();

    return (
                
        <>
              <Container className="LoginPage mw-100">
                  <Navbar className="navBar flex-grow-1 justify-content-evenly">
                    <img src={require('../images/logo.png')} style={{ width: 70, height: 50 }} ></img>
                    <h2>Bienvenido a <span>ECITransport</span></h2>
                    <div className="Login">
                        <a className="navbar-brand" href="/"></a>
                        { isAuthenticated ? <SignOutButton /> : <SignInButton /> }
                        
                    </div>
                  </Navbar>
                  <div className='bg-image hover-overlay'>
                        <img src='https://media.discordapp.net/attachments/938211601813753869/1034571161960448050/img-home.jpg' className='img-fluid' alt='Sample' />
                        
                    </div>
                
                

              </Container>
              
                

                
                
            
            <br />
            <br />
            {props.children}

        </>
    );
};

