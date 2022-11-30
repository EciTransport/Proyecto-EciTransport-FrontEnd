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
            (reports)?reports.map((data, index) => {
            return <Report key={index} data={data} user={dataUser} />
            }):null
        }
      </Container>

    </ContainerHome>
  )
}

export {HomeScreen}

