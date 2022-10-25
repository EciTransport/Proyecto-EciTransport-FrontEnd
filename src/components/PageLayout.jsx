import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { useIsAuthenticated } from "@azure/msal-react";
import { SignInButton } from "./SignInButton";
import { SignOutButton } from "./SignOutButton";
import styled from 'styled-components'
import { NavLink } from "react-router-dom";

/**
 * Renders the navbar component with a sign-in button if a user is not authenticated
 */
export const PageLayout = (props) => {
    const isAuthenticated = useIsAuthenticated();

    return (
        <>      <NavContainer>
                <img src={require('../images/logo.png')} style={{ width: 70, height: 50 }} ></img>
                <h2>Bienvenido a <span>ECITransport</span></h2>
                </NavContainer>

                <a className="navbar-brand" href="/">página login</a>
                { isAuthenticated ? <SignOutButton /> : <SignInButton /> }
                
            
            <br />
            <br />
            {props.children}
        </>
    );
};

const NavContainer = styled.nav`
    h2{
        font-weight: 400;
        span{
            font-weight: bold;
        }
    }
    padding: .4rem;
    background-color: #FF0000;
    display:flex;
    align-items:center;
    justify-content: space-between;
`;