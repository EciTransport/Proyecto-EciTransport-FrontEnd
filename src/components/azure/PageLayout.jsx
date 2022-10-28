import React from "react";
import { useIsAuthenticated } from "@azure/msal-react";
import { SignInButton } from "./SignInButton";
import { SignOutButton } from "./SignOutButton";
import CarCrashIcon from '@mui/icons-material/CarCrash';
import './style.css';

export const PageLayout = (props) => {
    
    const isAuthenticated = useIsAuthenticated();

    return (
        <>
            <nav className="navBarLogin">
                <div className="sponsor">
                    <CarCrashIcon className="icon"/>
                    <h2 className="title" >Bienvenido a ECITransport</h2>
                </div>
                <div>
                    { isAuthenticated ? <SignOutButton /> : <SignInButton /> }
                </div>
            </nav>
            {props.children}
        </>
    );
};

