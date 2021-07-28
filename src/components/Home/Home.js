import React from 'react';
import Appbar from '../Appbar/Appbar';
import Intro from './Intro';
import Contributors from './Contributors';
import Donors from './Donors';

export default function Home(props){
    return(
        <div>
            <div>
                {/* <Appbar props={props} /> */}
            </div>

            <div>
                <Intro />
            </div>

            <div>
                <Contributors />
            </div>

            <div>
                <Donors />
            </div>
        </div>
    )
}