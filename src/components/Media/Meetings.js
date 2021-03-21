import React from 'react';
import Appbar from '../Appbar/Appbar';
import Container from '@material-ui/core/Container';
import MeetingsMain from './Meetings/Meetings'

export default function Meetings(props){
    return(
        <div>
            <div>
                <Appbar props={props} />
            </div>

            <div style={{marginLeft:'100px',marginTop:'100px'}}>
                <Container fixed>
                    <MeetingsMain />
                </Container>
            </div>
        </div>

    )
}