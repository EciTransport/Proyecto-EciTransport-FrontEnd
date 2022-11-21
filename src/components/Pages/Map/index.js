import React from 'react'
import {Map} from '../../Generals/Map';
import GlobalStyle from '../../../styles/GlobalStyle';
import {SideBar} from '../../Generals/SideBar';
import { routes } from '../../Utils/routes';


const MapPage = () => {
  return (
    <div className="App">
      
        {/* SideBar */}
        <SideBar pathRoute={routes.map.path}/>

        {/* Home */}
        <Map/>

        {/* Global Styles */}
        <GlobalStyle />

    </div>
  )
}

export {MapPage}
