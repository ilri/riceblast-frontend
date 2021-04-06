import React from 'react';
import Appbar from '../Appbar/Appbar';
import Agronomy from './Factsheets/Agronomy';
import Pests from './Factsheets/Pests';
import PhysiologicalDisorders from './Factsheets/PhysiologicalDisorders';
import PostHarvest from './Factsheets/PostHarvest';
import Weeds from './Factsheets/Weeds';
import Diseases from './Factsheets/Diseases';
import {downloadFactsheet} from './Factsheets/DowloadFactSheet';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';






export default function Factsheets(props){
    const handleDownload = (factSheet, factSheetName) => () => {
      downloadFactsheet(factSheet,factSheetName);
    };
    return(
        <div>
            <div>
                <Appbar props={props} />
            </div>

            <Grid item xs={12} style={{marginTop:'80px'}}>
              <Grid container justify="center" alignItems="center">
                <Typography variant='h5'>FACTSHEETS<hr style={{width:'15%'}} /></Typography>
              </Grid>
            </Grid>
            <Container fixed >
              <Grid container spacing={3}>
              <Grid item xs={1}></Grid>

                <Grid item xs={11}>
                <Agronomy handleDownload={handleDownload} />

                </Grid>
                <Grid item xs={1}></Grid>

                <Grid item xs={11}>
                  <Pests handleDownload={handleDownload} />

                </Grid>
                <Grid item xs={1}></Grid>

                  <Grid item xs={11}>
                    <PhysiologicalDisorders handleDownload={handleDownload} />

                  </Grid>
                  <Grid item xs={1}></Grid>

                  <Grid item xs={11}>
                    <Diseases handleDownload={handleDownload} />

                  </Grid>
                  <Grid item xs={1}></Grid>

                  <Grid item xs={11}>
                    <PostHarvest handleDownload={handleDownload} />

                  </Grid>

                  <Grid item xs={1}></Grid>

                  <Grid item xs={11}>
                    <Weeds handleDownload={handleDownload} />

                  </Grid>
              </Grid>
          </Container>
        </div>
    )
}