import {React, useState} from 'react';
import SearchIcon from '@mui/icons-material/Search';
import {ContainerWidget, Header, DivIcon, DivContent} from './styles';
import { Report } from '../../Generals/Home/Report';

const Widget = ({reports, user}) => {

  const [message, setMessage] = useState(null);

  const handleChange = event => {
    setMessage(event.target.value.toLowerCase());
  }


  return (
    <ContainerWidget>
        <Header>
           <DivIcon>
                <SearchIcon className="searchIcon" />
                <input onChange={handleChange} placeholder="Find Reports"/>
            </DivIcon> 
        </Header>

        <DivContent>

        </DivContent>
    </ContainerWidget>
  )
}

export {Widget}

