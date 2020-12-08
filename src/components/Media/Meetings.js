import React from 'react';
import Appbar from '../Appbar/Appbar';
import Container from '@material-ui/core/Container';


export default function Meetings(props){
    return(
        <div>
            <div>
                <Appbar props={props} />
            </div>

            <div style={{marginLeft:'100px',marginTop:'100px'}}>
                <Container fixed>
                    <div>
                        <h6>MEETINGS</h6>
                    </div>
                </Container>
            </div>
        </div>

    )
}