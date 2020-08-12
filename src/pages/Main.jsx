import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import firstinstall from '../assets/images/firstinstall.jpg';
import developmentrig from '../assets/images/developmentrig.jpg';
import railBender from '../assets/images/railBender/bender1.jpg';
import Email from '../components/Email';

const Main = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));
  let train = `          
  e@@@@@@@@@@@@@@@
  @@@""""""""""\n
 @" ___ ___________\n
II__[w] | [i] [z] |\n
{======|_|~~~~~~~~~|\n
/oO--000'"\`-OO---OO-\n`

  return (
    <>
      <Grid item xs={12}>
        <Typography variant="h4" component="h2" gutterBottom align="center">
          Newtronics Rail Turn table and traverser products are still in
          development
          <br />
          
          <br />


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
              src={railBender}
              alt="Newtronics Rail"
              height="100%"
              width="100%"
            />
          </Link>
          <Typography variant="h5" gutterBottom>
            Rail Bender
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
