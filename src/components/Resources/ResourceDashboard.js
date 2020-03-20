import React from 'react';
import Appbar from '../Appbar/Appbar';

export default function ResourceDashboard(props){
    return(
        <div>
            <div>
                <Appbar props={props} />
            </div>

            <div style={{marginTop:100,marginLeft:300}}>
                <h3>DASHBOARD</h3>
            </div>
        </div>
    )
}  