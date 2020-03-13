import React from 'react';
import Appbar from '../Appbar/Appbar';


export default function Meetings(props){
    return(
        <div>
            <div>
                <Appbar props={props} />
            </div>

            <div>
                Meetings
            </div>
        </div>

    )
}