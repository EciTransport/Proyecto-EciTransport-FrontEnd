import React from "react";
import GlobalStyle from './styles/GlobalStyle';
import {ContactPage} from './components/Pages/Contact';
import {HomePage} from './components/Pages/Home';
import {MapPage} from './components/Pages/Map';
import {NotificationPage} from './components/Pages/Notification';
import {UserPage} from './components/Pages/User';
import {
  BrowserRouter as Router,
  Routes, Route, Link
} from "react-router-dom";

import { routes } from './components/Utils/routes';
import { User } from "./components/Generals/Home/styles";
import { PageLayout } from "./components/PageLayout";
import { AuthenticatedTemplate, UnauthenticatedTemplate } from "@azure/msal-react";

function App() {

  const padding = {
    padding: 5
  }

  return (
    <PageLayout>
            <AuthenticatedTemplate>
            <Router>
    
    <Routes>

      <Route exact path='/map' element={<MapPage/>} />

      <Route exact path='/notification' element={<NotificationPage/>} />

      <Route exact path='/contacts' element={<ContactPage/>} />

      <Route exact path='/profile' element={<UserPage/>} />

      <Route exact path='/' element={<HomePage/>} />

    </Routes>
    
  </Router>
            </AuthenticatedTemplate>
            <UnauthenticatedTemplate>
              <p>You are not signed in! Please sign in.</p>
          </UnauthenticatedTemplate>
        </PageLayout>
    
    
  );
}

export default App;
