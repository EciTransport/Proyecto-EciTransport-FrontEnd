import React from 'react'
import GlobalStyle from '../../../styles/GlobalStyle';
import {FuncionalityInConstruction} from '../../Generals/FuncionalityInConstruction';
import {SideBar} from '../../Generals/SideBar';
import { routes } from '../../Utils/routes';

const ContactPage = () => {
  return (
    <div className="App">
      
        {/* SideBar */}
        <SideBar pathRoute={routes.contacts.path}/>

        {/* Home */}
        <FuncionalityInConstruction title="Contacts"/>

        {/* Global Styles */}
        <GlobalStyle />

    </div>
  )
}

export {ContactPage}
