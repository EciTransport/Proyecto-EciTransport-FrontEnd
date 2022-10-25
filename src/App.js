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
import { Login } from "./components/Generals/Login";

function App() {

  const padding = {
    padding: 5
  }

  return (
    <Router>
    
    <Routes>

      <Route exact path='/home' element={<HomePage/>} />

      <Route exact path='/map' element={<MapPage/>} />

      <Route exact path='/notification' element={<NotificationPage/>} />

      <Route exact path='/contacts' element={<ContactPage/>} />

      <Route exact path='/profile' element={<UserPage/>} />

      <Route exact path='/' element={<Login/>} />

    </Routes>
    
  </Router>
  );
}

export default App;
