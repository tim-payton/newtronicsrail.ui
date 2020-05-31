import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import YouTube from 'react-youtube';
import firstinstall from '../assets/images/turntable/firstinstall.jpg';
import carousel2 from '../assets/images/turntable/carousel2.jpg';
import carousel3 from '../assets/images/turntable/carousel3.jpg';
import fifthimage from '../assets/images/turntable/5thimage.jpg';
import developmentrig from '../assets/images/turntable/developmentrig.jpg';
import Email from '../components/Email';

const useStyles = makeStyles({
  youtube: {
    textAlign: 'center',
  },
});

const TurnTable = () => {
  const classes = useStyles();
  return (
    <>
      <Grid item xs={12}>
        <Typography variant="h4" component="h2" gutterBottom align="center">
          Newtronics Rail programable automated turn tabel system, supporting up
          to 16 track positions and simple programming.
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Paper elevation={0}>
          <img
            src={firstinstall}
            alt="Newtronics Rail"
            height="100%"
            width="100%"
          />
          <Typography variant="h5" gutterBottom>
            Installation on O Gauge turntable on the Kimble layout at LWMRS.
            This system has been running for a few months on the prototype rig
            shown below. Feed back from their members have gone into development
            of the production version and will be available in the near future.
          </Typography>
        </Paper>
      </Grid>
      <Grid item xs={6}>
        <Paper elevation={0}>
          <img
            src={carousel2}
            alt="Newtronics Rail"
            height="100%"
            width="100%"
          />
        </Paper>
      </Grid>
      <Grid item xs={6}>
        <Paper elevation={0}>
          <img
            src={carousel3}
            alt="Newtronics Rail"
            height="100%"
            width="100%"
          />
        </Paper>
      </Grid>
      <Grid item xs={12}>
        <Paper elevation={0}>
          <Typography variant="h3">Latest turn table hardware</Typography>
        </Paper>
        <Paper elevation={0}>
          <Typography variant="h5" gutterBottom>
            The system does feature connections for reversible track power, but
            this current version of the hardware does not yet provide an
            interface method from the circuit to tracks on the bridge. The
            intent is there will be various versions of the system that will
            interface with common turntable platforms, a generic version that
            will allow interface to custom or less common systems and a third
            version that will allow the user to design/install their own method
            by way of a pancake or slip ring encoder for example
          </Typography>
        </Paper>
      </Grid>
      <Grid item xs={6}>
        <Paper elevation={0}>
          <img
            src={fifthimage}
            alt="Newtronics Rail"
            height="100%"
            width="100%"
          />
        </Paper>
      </Grid>
      <Grid item xs={6}>
        <Paper elevation={0}>
          <img
            src={developmentrig}
            alt="Newtronics Rail"
            height="100%"
            width="100%"
          />
        </Paper>
      </Grid>
      <Grid item xs={12}>
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
      </Grid>
      <Grid item xs={12}>
        <Paper elevation={0}>
          <Typography variant="h5" gutterBottom>
            Development platforms showing button boards. each button board has 5
            buttons, 4 track positions and a "head/tail" button that illuminates
            an on board LED.
          </Typography>
          <Typography variant="h5" gutterBottom>
            Button board have break out pads to solder your own switches and
            LED's to if you prefer to interface with your own control panel or
            push buttons.
          </Typography>
          <Typography variant="h5" gutterBottom>
            The 5th button board is a programming board (red LED), press and
            hold 5th button to enter programming mode, buttons 1-4 increment the
            turn table 0.1°, 1°, 5° and 20° respectively, direction is reversed
            depending on head/tail LED status. To store the position to a button
            board, press and hold desired button for 2 secconds. These values
            are stored on the baord through power cycles, programming board can
            be disconnected or stored under the layout/out of the way.
          </Typography>
        </Paper>
      </Grid>
      <Grid item xs={12}>
        <Email />
      </Grid>
    </>
  );
};

export default TurnTable;
