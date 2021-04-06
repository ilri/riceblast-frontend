import React from 'react';
import Appbar from '../Appbar/Appbar';
import Container from '@material-ui/core/Container';
import NewslettersMain from './Newsletters/Newsletters' 
import Grid from '@material-ui/core/Grid';

export default function Newsletters(props){
    return(
        <div>
            <div>
                <Appbar props={props} />
            </div>

            <div>
                <NewslettersMain />
            </div>
        </div>

    )
}