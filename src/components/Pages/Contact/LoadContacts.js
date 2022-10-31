import {React, useState} from 'react'
import SearchIcon from '@mui/icons-material/Search';
import {Header, DivIcon, Container, Contacts} from './styles';
import {ContactCard} from './ContactCard';

const LoadContacts = () => {

  const [message, setMessage] = useState('');

  const handleChange = event => {
    setMessage(event.target.value);
    console.log('value is:', event.target.value);
  };

  return (
    <Container>
        <div className="header">
            <h1>Contacts</h1>
            <span className="contacts-count" >10 Contacts</span>
        </div>
        <Header>
           <DivIcon>
                <SearchIcon className="searchIcon" />
                <input onChange={handleChange} placeholder="Buscar Contactos"/>
            </DivIcon> 
        </Header>
        <Contacts>
            <ContactCard />
            <ContactCard />
            <ContactCard />
            <ContactCard />
            <ContactCard />
            <ContactCard />
            <ContactCard />
            <ContactCard />
            <ContactCard />
            <ContactCard />
            <ContactCard />
            <ContactCard />
        </Contacts>
        <br></br>
    </Container>
  )
}

export {LoadContacts}
