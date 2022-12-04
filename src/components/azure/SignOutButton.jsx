import React from "react";
import { useMsal } from "@azure/msal-react";
import { Button } from "@mui/material";
import './style.css';

export const SignOutButton = () => {
    const { instance } = useMsal();

    const handleLogout = (logoutType) => {
        if (logoutType === "popup") {
            instance.logoutPopup({
                postLogoutRedirectUri: "/",
                mainWindowRedirectUri: "/"
            });
        }
    }

    return (
        <Button variant="outline-dark" className="botonSigOut" onClick={() => handleLogout("popup")}>Salir</Button>
    );
}