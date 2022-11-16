import React from 'react';
import {ContainerHome, HeaderHome} from './styles';
import { ReportBox } from '../../Generals/Home/ReportBox';
import { Report } from '../../Generals/Home/Report';
import { Container } from '@mui/material';

const HomeScreen = ({reports, dataUser}) => {

  return (
    <ContainerHome>
      {/* Header */}
      
      <HeaderHome>
        <h2>Home</h2>
      </HeaderHome>

      {/* Report */}
      <ReportBox /> 

      {/* Posts */}
      <Container>
        {
            reports.map(data => {
            data.hourReport = new Date(data.hourReport).toLocaleString('en-us');
            return <Report key={data.id} data={data} user={dataUser}/>
            }) 
        }
      </Container>

    </ContainerHome>
  )
}

export {HomeScreen}

