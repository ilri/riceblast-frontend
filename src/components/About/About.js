import React from 'react';
import Appbar from '../Appbar/Appbar';
import Container from '@material-ui/core/Container';
import AboutImage from '../../assets/Rice.jpeg';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

export default function About(props){
    return(
        <div>

            <div>
                <Appbar props={props} />
            </div>

            <div >
            <Grid container spacing={1}>
                <Grid item xs={12}></Grid>

                <Grid item xs={2}></Grid>
                <Grid item xs={8}>
                    <div> 
                        <img src={AboutImage} style={{width:'100%'}} />
                    </div>
                </Grid>
                <Grid item xs={2}></Grid>


                <Grid item xs={2}></Grid>
                <Grid item xs={8} >
                    <div style={{width: '100%', marginTop:'15px'}}>

                        <Typography variant="h4" gutterBottom align='center'>
                            ABOUT <hr style={{maxWidth:'5%'}} />
                        </Typography>

                        <Paper elevation={10} >

                            <Typography 
                            variant="body1" color="textSecondary" component="div"
                            align='center' gutterBottom paragraph={true} style={{padding:'30px',fontSize:'18px'}}
                            > 
                                This is a collaborative research project that was 
                                established in 2012 under the leadership of 
                                Professor Nick Talbot, The Sainsbury Laboratory, Norwich, Norfolk, UK. 
                                The partners include the national agricultural research systems in East Africa (University of Embu, 
                                the Kenya Agricultural & Livestock Research Organization (KALRO), 
                                Tanzanian Agricultural Research Institute (TARI), 
                                and Ugandan National Agricultural Research Organization (NARO)) and 
                                West Africa (Burkina Faso’s Environmental Institute for Agricultural Research (INERA), 
                                International rice research centers based in SSA, including AfricaRice Center, 
                                Biosciences eastern and central Africa (BecA-ILRI) Hub, and IRRI (the Philippines) 
                                and American universities (University of Arkansas - Fayetteville and  the Ohio State University, USA). 
                                The overall aim of the project was to breed for durably resistant rice cultivars, based on a knowledge of 
                                pathogen diversity and identification of host resistance genes. The project has established strong research networks 
                                for improving African rice value chains through pathogen phenotypic and genotypic characterization, rice breeding, 
                                training programs for agricultural extension agents and scientists to enhance research, 
                                disease surveillance and farm advisory services. The project brought together leading international 
                                scientists from the rice blast research community with complementary expertise in pathogen biology and genomics, 
                                rice genetics and breeding, and local expertise in outreach. Our international team has proven to be well-equipped 
                                to carry out the fundamental science proposed, but also to translate the findings into durable resistance 
                                so that we can impact directly on farmers' ability to grow rice successfully in resource-poor regions of Africa. 
                                The project has had some research activities in the following countries: Benin, Burkina Faso, Burundi, Ghana, Kenya, Madagascar, 
                                Mali, Nigeria, Tanzania, Togo and Uganda. It has received grants from the UK’s Department for International Development
                                and the Bill & Melinda Gates Foundation through United Kingdom’s Biotechnology and Biological Sciences Research Council (BBSRC) 
                                under the Sustainable Crop Production Research for International Development (SCPRID, 2012-2018) and 
                                the Global Challenge Research Fund’s (GCRF) initiative on Sustainable Agriculture for sub-Saharan Africa (SASSA, 2018-2021).
                            </Typography>
                        </Paper>
                    </div>
                </Grid>
                <Grid item xs={2}></Grid>

            </Grid>
            </div>
        </div>
    )
}