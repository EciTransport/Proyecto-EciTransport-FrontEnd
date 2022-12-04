import {React, useEffect, useState} from "react";
import {ContactPage} from './components/Pages/Contact';
import {HomePage} from './components/Pages/Home';
import {MapPage} from './components/Pages/Map';
import {NotificationPage} from './components/Pages/Notification';
import {UserPage} from './components/Pages/User';
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login } from "./components/Pages/Login";
import GlobalStyle from "./styles/GlobalStyle";

function App() {

  const [stomp, setStomp] = useState('')

  return (
    <Router>

      <Routes>

        <Route exact path='/home' element={<HomePage stomp={stomp} setStomp={setStomp}/> } /> 

        <Route exact path='/map' element={<MapPage stomp={stomp} setStomp={setStomp} />} />

        <Route exact path='/notification' element={<NotificationPage stomp={stomp} setStomp={setStomp} />} />

        <Route exact path='/contacts' element={<ContactPage stomp={stomp} setStomp={setStomp} />} />

        <Route exact path='/profile' element={<UserPage stomp={stomp} setStomp={setStomp} />} />

        <Route exact path='/' element={<Login/>} />

      </Routes>

  </Router>

  );
}

export default App;
