import {React, useEffect, useState} from 'react'
import SearchIcon from '@mui/icons-material/Search';
import {Header, DivIcon, Container, Contacts} from './styles';
import {ContactCard} from './ContactCard';

const LoadContacts = () => {

  //Consult
  const [contacts, setContacts] = useState([]);
  const [message, setMessage] = useState('');

  useEffect( () => {
    fetch('http://localhost:8080/v1/contacts/consultContacts/' + message)
    .then(response => response.json())
    .then(data => setContacts(data)) } , [] );

  const handleChange = event => {
    setMessage(event.target.value.toLowerCase());
  }

  return (
    <Container>
        <div className="header">
            <h1>Contacts</h1>
            <span className="contacts-count" >{contacts.length} Contacts</span>
        </div>
        <Header>
           <DivIcon>
                <SearchIcon className="searchIcon" />
                <input onChange={handleChange} placeholder="Find Contacts"/>
            </DivIcon> 
        </Header>
        <Contacts>
            {
              contacts?.filter(c => c.name.toLowerCase().includes(message))?.map(data => <ContactCard key={data.id} data={data}/>)
            }
        </Contacts>
        <br></br>
    </Container>
  )
}

export {LoadContacts}
