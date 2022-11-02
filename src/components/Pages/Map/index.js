import React from 'react'
import GlobalStyle from '../../../styles/GlobalStyle';
import {FuncionalityInConstruction} from '../../Generals/FuncionalityInConstruction';
import {SideBar} from '../../Generals/SideBar';
import { routes } from '../../Utils/routes';
import {Map} from '../../Generals/Map';
const MapPage = () => {
  return (
    <div className="App">
      
        {/* SideBar */}
        <SideBar pathRoute={routes.map.path}/>

        {/* Home */}
        <Map />

        {/* Global Styles */}
        <GlobalStyle />

    </div>
  )
}

export {MapPage}
