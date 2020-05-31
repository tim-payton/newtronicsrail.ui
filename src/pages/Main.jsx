import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import firstinstall from '../assets/images/firstinstall.jpg';
import developmentrig from '../assets/images/developmentrig.jpg';
import newframe from '../assets/images/newframe.jpg';
import Email from '../components/Email';

const Main = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));
  return (
    <>
      <Grid item xs={12}>
        <Typography variant="h4" component="h2" gutterBottom align="center">
          Newtronics Rail Turn table and traverser products are still in
          development
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h5" component="h2" gutterBottom align="center">
          Click a product for more infomation
        </Typography>
      </Grid>
      <Grid item xs={matches ? 4 : 12}>
        <Paper elevation={0}>
          <Link to="/turntable">
            <img
              src={firstinstall}
              alt="Newtronics Rail"
              height="100%"
              width="100%"
            />
          </Link>
          <Typography variant="h5" gutterBottom>
            Turn Table
          </Typography>
        </Paper>
      </Grid>
      <Grid item xs={matches ? 4 : 12}>
        <Paper elevation={0}>
          <Link to="/traverser">
            <img
              src={developmentrig}
              alt="Newtronics Rail"
              height="100%"
              width="100%"
            />
          </Link>
          <Typography variant="h5" gutterBottom>
            Traverser
          </Typography>
        </Paper>
      </Grid>
      <Grid item xs={matches ? 4 : 12}>
        <Paper elevation={0}>
          <Link to="/railbender">
            <img
              src={newframe}
              alt="Newtronics Rail"
              height="100%"
              width="100%"
            />
          </Link>
          <Typography variant="h5" gutterBottom>
            Rail
          </Typography>
        </Paper>
      </Grid>
      <Grid item xs={12}>
        <Email />
      </Grid>
    </>
  );
};

export default Main;
