import {React, useState} from 'react';
import SearchIcon from '@mui/icons-material/Search';
import {ContainerWidget, Header, DivIcon, DivContent} from './styles';
import { Report } from '../../Generals/Home/Report';

const Widget = ({reports, user, stomp}) => {

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
                (reports)?reports.filter(r => r.description.toLowerCase().includes(message) || r.author.nombre.toLowerCase().includes(message)
                || r.hourReport.toLowerCase().includes(message))
                ?.map((data, index) => {
                return <Report key={index} data={data} user={user} footerReportOff={true} stomp={stomp}/>
                }):null
            }
        </DivContent>
    </ContainerWidget>
  )
}

export {Widget}

