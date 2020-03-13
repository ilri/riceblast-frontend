import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import contributor1 from '../../assets/BecA.png';
import contributor2 from '../../assets/theohiostateuniversity-logo.jpg';
import contributor3 from '../../assets/inera-logo.png';
import contributor4 from '../../assets/karlo-logo.png';
import contributor5 from '../../assets/tsl.png';
import contributor6 from '../../assets/beca-logo.png';
import contributor7 from '../../assets/universityofexeter-logo1.png';
import contributor8 from '../../assets/africa-rice.png';
import contributor9 from '../../assets/IRRI-logo.svg';
import contributor10 from '../../assets/uoa.png';
import contributor11 from '../../assets/ohio.png';




const useStyles = makeStyles({
    root:{
        marginTop:20,
    },

    hr: {
      maxWidth: '10%',
    },
    wrappper:{
        backgroundColor: 'white', 
        height: '20vh',
        display:'flex',
        justifyContent:'space-between',
        flexDirection:'row',
        flexWrap:'wrap',
        padding:50,
    },
    image:{
        height:80,
        width:210,
    },
    bioImage:{
        height:80,
        width:350,
    },
    uoeImage:{
        height:110,
        width:150,   
    }

});


export default function Contributors(){
    const classes = useStyles();
    return(
        <div className={classes.root}>
            <Container fixed>
                <Typography variant='h5' align='center'>CONTRIBUTORS<hr className={classes.hr} /></Typography>
                <Typography component='div' className={classes.wrappper}>
                    {[contributor4,contributor5,contributor6,contributor7,contributor3,contributor8,contributor9,contributor10,contributor11].map((image,index)=>(
                        <img key={index + 1} src={image} className={(image === contributor6) ? classes.bioImage : (image === contributor7) ? classes.uoeImage : classes.image} style={{margin:5}} />
                    ))}
                </Typography>
            </Container>
        </div>
    )
}