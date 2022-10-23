import React from 'react'
import GlobalStyle from '../../../styles/GlobalStyle';
import {FuncionalityInConstruction} from '../../Generals/FuncionalityInConstruction';
import {SideBar} from '../../Generals/SideBar';
import { routes } from '../../Utils/routes';

const NotificationPage = () => {
  return (
    <div className="App">
      
        {/* SideBar */}
        <SideBar pathRoute={routes.notification.path}/>

        {/* Home */}
        <FuncionalityInConstruction title="Notifications"/>

        {/* Global Styles */}
        <GlobalStyle />

    </div>
  )
}

export {NotificationPage}
