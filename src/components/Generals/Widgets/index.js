import React from 'react'
import {Search} from '@mui/icons-material'
import SearchIcon from '@mui/icons-material/Search';
import {Widget, Header, DivIcon, DivContent} from './styles';

const Widgets = () => {
  return (
    <Widget>
        <Header>
           <DivIcon>
                <SearchIcon className="searchIcon" />
                <input placeholder="Buscar Reportes"/>
            </DivIcon> 
        </Header>

        <DivContent>
            <h2></h2>
        </DivContent>
    </Widget>
  )
}

export {Widgets}

