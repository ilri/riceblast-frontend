import React from 'react';
import Appbar from '../Appbar/Appbar';
import Container from '@material-ui/core/Container';
import OutreachMain from './Outreach/Outreach';

export default function Stakeholders(props){
    return(
        <div>
            <div>
                <Appbar props={props} />
            </div>

            <div style={{marginLeft:'100px',marginTop:'100px'}}>
                <Container fixed>
                    <OutreachMain />
                </Container>
            </div>
        </div>

    )
}