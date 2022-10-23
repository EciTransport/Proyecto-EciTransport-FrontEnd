import React from 'react'
import GlobalStyle from '../../../styles/GlobalStyle';
import {Home} from '../../Generals/Home';
import {SideBar} from '../../Generals/SideBar';
import {Widgets} from '../../Generals/Widgets';
import { routes } from '../../Utils/routes';

const HomePage = () => {
  return (
    <div className="App">
      
        {/* SideBar */}
        <SideBar pathRoute={routes.home.path} />

        {/* Home */}
        <Home />

        {/* Widgets */}
        <Widgets />

        {/* Global Styles */}
        <GlobalStyle />

    </div>
  )
}

export {HomePage}
