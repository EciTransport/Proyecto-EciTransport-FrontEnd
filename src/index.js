import React from 'react';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { PublicClientApplication } from "@azure/msal-browser";
import { MsalProvider } from "@azure/msal-react";
import { msalConfig } from "./loginAzure/authConfig";
//add the following to use Redux
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import dataReducer from "./components/redux/sessionUser";
import dataReports from "./components/redux/reports";
import dataNotification from "./components/redux/notifications";
import dataComments from "./components/redux/comments";
import { render } from 'react-dom';

const rootElement = document.getElementById('root');
const msalInstance = new PublicClientApplication(msalConfig);

const store = configureStore({
    reducer: {
      theStore: dataReducer,
      reports: dataReports,
      notifications: dataNotification,
      comments:dataComments,
    },
  });

render(
  <React.StrictMode>
        <MsalProvider instance={msalInstance}>
            <Provider store={store}>
                <App />
            </Provider>
        </MsalProvider>
  </React.StrictMode>,
  rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
