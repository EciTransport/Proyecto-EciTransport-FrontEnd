import React from 'react'
import GlobalStyle from '../../../styles/GlobalStyle';
import {FuncionalityInConstruction} from '../../Generals/FuncionalityInConstruction';
import {SideBar} from '../../Generals/SideBar';
import { routes } from '../../Utils/routes';

const MapPage = () => {
  return (
    <div className="App">
      
        {/* SideBar */}
        <SideBar pathRoute={routes.map.path}/>

        {/* Home */}
        <FuncionalityInConstruction title="Map"/>

        {/* Global Styles */}
        <GlobalStyle />

    </div>
  )
}

export {MapPage}
