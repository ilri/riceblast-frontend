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

            <div>
                <OutreachMain />
            </div>
        </div>

    )
}