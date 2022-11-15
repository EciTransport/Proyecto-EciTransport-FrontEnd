import React from 'react'
import GlobalStyle from '../../../styles/GlobalStyle';
import {FuncionalityInConstruction} from '../../Generals/FuncionalityInConstruction';
import {SideBar} from '../../Generals/SideBar';
import { routes } from '../../Utils/routes';
import {MapViews} from '../../Generals/Map/MapView'

const MapPage = () => {
  return (
    <div className="App">
      
        {/* SideBar */}
        <SideBar pathRoute={routes.map.path}/>

        {/* Home */}
        <MapViews/>

        {/* Global Styles */}
        <GlobalStyle />

    </div>
  )
}

export {MapPage}
