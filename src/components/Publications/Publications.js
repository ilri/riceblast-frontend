import React from 'react';
import Appbar from '../Appbar/Appbar';


export default function Publications(props){
    return(
        <div>
            <div>
                <Appbar props={props} />
            </div>

            <div>
                Publications
            </div>
        </div>

    )
}