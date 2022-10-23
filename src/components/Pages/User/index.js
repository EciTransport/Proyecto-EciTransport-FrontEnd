import React from 'react'
import GlobalStyle from '../../../styles/GlobalStyle';
import {FuncionalityInConstruction} from '../../Generals/FuncionalityInConstruction';
import {SideBar} from '../../Generals/SideBar';
import {Widgets} from '../../Generals//Widgets';

import { HeaderProfile } from './ProfileHeader';
import { routes } from '../../Utils/routes';

const UserPage = () => {
  return (
    <div className="App">
      
        {/* SideBar */}
        <SideBar pathRoute={routes.profile.path}/>

        <HeaderProfile />
        
        {/* Global Styles */}
        <GlobalStyle />

    </div>
  )
}

export {UserPage}
