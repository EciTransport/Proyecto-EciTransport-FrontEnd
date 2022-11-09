import React from 'react';
import {ContainerHome, HeaderHome} from './styles';
import { ReportBox } from '../../Generals/Home/ReportBox';
import { Report } from '../../Generals/Home/Report';
import { Container } from '@mui/material';
const HomeScreen = ({reports}) => {

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
            reports.map(data => <Report key={data.id} data={data} options={false} />) 
        }
      </Container>

    </ContainerHome>
  )
}

export {HomeScreen}

