import React from 'react'
import {ReportsBox, Div, Form, User, DivBox} from './styles';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import GifBoxIcon from '@mui/icons-material/GifBox';
import { Button } from '@mui/material';

export function ReportBox() {
  return (
    <ReportsBox>
        <Form>
           <Div>
            <User src="https://i.blogs.es/cdaaae/dragon-ball---goku/840_560.jpg" alt=""/>
            <div className="columns">
                <input text="text" placeholder="Reporta un Accidente"/>
                <input text="text" placeholder="Usuario"/>
            </div>
            </Div>
            <Div>
               <DivBox>
                    <AddPhotoAlternateIcon />
                    <GifBoxIcon />
                </DivBox>
                <Button>Reporta</Button>
            </Div>
  
        </Form>
    </ReportsBox>
  )
}
