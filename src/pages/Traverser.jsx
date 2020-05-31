import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import YouTube from 'react-youtube';
import traverser1 from '../assets/images/traverser/traverser1.jpg';
import traverser2 from '../assets/images/traverser/traverser2.jpg';
import traverser3 from '../assets/images/traverser/traverser3.jpg';
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
          The traverser system is currently being re developed to use the same
          circuity as the turn table. Im calling the system documented below a
          proof of concept.
        </Typography>
        <Typography variant="h5" gutterBottom>
          The proof of concept traverser system photographed below is currently
          installed and working in two layouts. Feedback received went into the
          design of the turntable system and has cascade down into the
          redevelopment of this system.
        </Typography>
      </Grid>
      <Grid item xs={6}>
        <Paper elevation={0}>
          <img
            src={traverser1}
            alt="Newtronics Rail"
            height="100%"
            width="100%"
          />
        </Paper>
      </Grid>
      <Grid item xs={6}>
        <Paper elevation={0}>
          <img
            src={traverser3}
            alt="Newtronics Rail"
            height="100%"
            width="100%"
          />
        </Paper>
      </Grid>
      <Grid item xs={12}>
        <Paper elevation={0}>
          <img
            src={traverser2}
            alt="Newtronics Rail"
            height="100%"
            width="100%"
          />
        </Paper>
      </Grid>
      <Grid item xs={12}>
        <Paper elevation={0}>
          <Typography variant="h5" gutterBottom>
            This system can opperate 4x 4 button boards for a total of 16 track
            positions, and the revised system based on the turn table will also
            support 16 track positions. The programming of this system is done
            with a press and hold of a programming button and a rotary encoder
            with coarse and fine movements, position is stored by press and hold
            of track button.
          </Typography>
          <Typography variant="h5" gutterBottom>
            Speed is easily variable with a trim pot on the board.
          </Typography>
          <Typography variant="h5" gutterBottom>
            This proof of concept system is compatible with automation systems
            such as MERG or any others that can control a 0-5V digital output to
            select track position, any automation output or LED driver could be
            repurposed for this.
          </Typography>
          <Typography variant="h5" gutterBottom>
            The revised system will also support this by way of an addon board
            that will replace the standard button board.
          </Typography>
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
        <Paper elevation={0}>
          <YouTube
            containerClassName={classes.youtube}
            videoId="oUYmmVkDm8U"
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

export default TurnTable;
