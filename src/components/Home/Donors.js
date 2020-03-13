import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import donor1 from '../../assets/ukaid-dfid-logo.jpg';
import donor2 from '../../assets/bgmf.png';
import donor3 from '../../assets/DFID.gif';
import donor4 from '../../assets/bbsrc-logo.png';


const useStyles = makeStyles({
    root:{
        marginTop:20,
        marginBottom:20,
    },
    hr: {
      maxWidth: '5%',
    },
    wrappper:{
        backgroundColor: 'white', 
        height: '15vh',
        display:'flex',
        justifyContent:'space-between',
        padding:50,
    },
    image:{
        height:100,
        width:200,
    },
    imageDonor4:{
        height:80,
        width:200,
    },
});


export default function Donors(){
    const classes = useStyles();
    return(
        <div className={classes.root}>
            <Container fixed>
                <Typography variant='h5' align='center'>DONORS<hr className={classes.hr} /></Typography>
                <Typography component='div' className={classes.wrappper}>
                    {[donor1,donor2,donor3,donor4].map((image,index)=>(
                        <img key={index + 1} src={image} className={(image === donor4) ? classes.imageDonor4 : classes.image} />
                    ))}
                </Typography>
            </Container>
        </div>
    )
}