import React, {useState} from "react";
import { useMsal } from "@azure/msal-react";
import { loginRequest } from "../../loginAzure/authConfig";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import './style.css';
export const SignInButton = () => {
    const navigate = useNavigate();
    const { instance } = useMsal();
    
    const handleLogin = (loginType) => {
        if (loginType === "popup") {
            instance.loginPopup(loginRequest).catch(e => {
                console.log(e);
            });
            console.log("logeado");
        }
    }
    return (
        <Button className="botonSigIn" variant="outline-dark" onClick={() => handleLogin("popup")}>Ingresar</Button>
    );
}