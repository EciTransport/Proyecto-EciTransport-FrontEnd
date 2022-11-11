import { Container } from '@mui/material';
import React from 'react'
import {Report} from '../Report';

const LoadPosts = ({reports}) => {
  return (
    <Container>
       {
        reports.map(data => <Report key={data.id} data={data} options={false} />) 
       }
    </Container>
  )
}
export {LoadPosts}

