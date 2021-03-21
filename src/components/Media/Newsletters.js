import React from 'react';
import Appbar from '../Appbar/Appbar';
import Container from '@material-ui/core/Container';
import NewslettersMain from './Newsletters/Newsletters' 

export default function Newsletters(props){
    return(
        <div>
            <div>
                <Appbar props={props} />
            </div>

            <div style={{marginLeft:'100px',marginTop:'100px'}}>
                <Container fixed>
                    <NewslettersMain />
                </Container>
            </div>
        </div>

    )
}