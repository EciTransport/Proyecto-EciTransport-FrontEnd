import React from 'react'
import GlobalStyle from '../../../styles/GlobalStyle';
import {SideBar} from '../../Generals/SideBar';
import { LoadContacts } from './LoadContacts';

const ContactPage = ({stomp, setStomp}) => {

  return (
    <div className="App">
      
        {/* SideBar */}
        <SideBar pathRoute="Contacts" stomp={stomp} setStomp={setStomp}/>

        {/* Home */}
        <LoadContacts title="Contacts" />

        {/* Global Styles */}
        <GlobalStyle />

    </div>
  )
}

export {ContactPage}
