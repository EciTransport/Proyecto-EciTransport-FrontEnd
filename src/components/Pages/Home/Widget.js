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
            {
                reports?.filter(r => r.description.toLowerCase().includes(message) || r.author.nombre.toLowerCase().includes(message)
                || r.hourReport.toLowerCase().includes(message) || r.sentido.toLowerCase().includes(message) || r.ubicacion.toLowerCase().includes(message))
                ?.map(data => {
                data.hourReport = new Date(data.hourReport).toLocaleString('en-us');
                return <Report key={data.id} data={data} options={false} user={user} />
                }) 
            }
        </DivContent>
    </ContainerWidget>
  )
}

export {Widget}

