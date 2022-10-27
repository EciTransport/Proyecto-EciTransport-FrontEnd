import React, {useState} from "react";
import { useMsal } from "@azure/msal-react";
import { loginRequest } from "../../azure/authConfig";
import { useNavigate } from "react-router-dom";
import { routes } from "../Utils/routes";
import { callMsGraph } from "../../azure/graph";
import { Button } from "@mui/material";
/**
 * Renders a button which, when selected, will open a popup for login
 */
export const SignInButton = () => {
    
    const navigate = useNavigate();

    function redirect() {
      navigate(routes.login.path);
    }

    //Azure
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
        <Button variant="outline-dark" className="ml-auto" onClick={() => handleLogin("popup")}>Ingresar</Button>
    );
}