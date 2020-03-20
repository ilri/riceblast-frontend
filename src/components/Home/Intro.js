import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import AboutImage from '../../assets/Rice.jpeg';
import { Link } from 'react-router-dom';








const useStyles = makeStyles({
    root: {
      maxWidth: '100%',
    },
    media: {
      height: 440,
    },
});



export default function Intro(){
    const classes = useStyles();
    return(
        <div>
            <Container fixed>
                <Typography component="div" style={{ backgroundColor: 'white', height: '63vh' }} >
                    <Card className={classes.root}>
                      <CardActionArea>
                        <CardMedia
                          className={classes.media}
                          image={AboutImage}
                          title="Rice Blast Project"
                        />
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="h2">
                            Rice Blast Project
                          </Typography>
                          <Typography variant="body2" color="textSecondary" component="p">
                            Durable rice blast resistance for Africa is an international collaborative project which aims to 
                            determine and breed appropriate rice blast resistance genes into adoption to African rice germplasm...
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                      <CardActions>
                        <Link to='/about'>
                          <Button size="small" color="primary">
                            Read More
                          </Button>
                        </Link>
                      </CardActions>
                    </Card>
                </Typography>
            </Container>
        </div>
    )
}