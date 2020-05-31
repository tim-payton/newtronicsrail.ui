import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import YouTube from 'react-youtube';
import bender1 from '../assets/images/railBender/bender1.jpg';
import bender2 from '../assets/images/railBender/bender2.jpg';
import bender3 from '../assets/images/railBender/bender3.jpg';
import Email from '../components/Email';
const useStyles = makeStyles({
  youtube: {
    textAlign: 'center',
  },
});

const RailBender = () => {
  const classes = useStyles();
  return (
    <>
      <Grid item xs={12}>
        <Typography variant="h4" component="h2" gutterBottom align="center">
          Newtronics rail bender, a simple rail bending jig used for bending or
          straightening rail.
        </Typography>
      </Grid>
      <Grid item xs={4}>
        <Paper elevation={0}>
          <img src={bender1} alt="Newtronics Rail" height="100%" width="100%" />
        </Paper>
      </Grid>
      <Grid item xs={4}>
        <Paper elevation={0}>
          <img src={bender2} alt="Newtronics Rail" height="100%" width="100%" />
        </Paper>
      </Grid>
      <Grid item xs={4}>
        <Paper elevation={0}>
          <img src={bender3} alt="Newtronics Rail" height="100%" width="100%" />
        </Paper>
      </Grid>
      <Grid item xs={12}>
        <Paper elevation={0}>
          <YouTube
            containerClassName={classes.youtube}
            videoId="FUgT8Ku04Xo"
            opts={{
              height: '390',
              width: '640',
              playerVars: {
                // https://developers.google.com/youtube/player_parameters
                autoplay: 0,
              },
            }}
          />
        </Paper>
      </Grid>
      <Grid item xs={12}>
        <Email />
      </Grid>
    </>
  );
};

export default RailBender;
