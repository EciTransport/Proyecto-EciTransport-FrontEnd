import { Button } from '@mui/material';
import React from 'react'
import { useState, useEffect } from 'react';
import {Container, Header, Map} from './styles';
const MapScreen = () => {

  return (
    <Container>

        <Header>
            <h2>Map</h2>
        </Header>
        
        <Map>
            <img className="imageMap" src="https://wallpaperaccess.com/full/7130210.jpg"/>
        </Map>

    </Container>
  )
}

export {MapScreen}
