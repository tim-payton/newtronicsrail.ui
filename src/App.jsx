import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

import Main from './pages/Main';
import TurnTable from './pages/TurnTable';
import Traverser from './pages/Traverser';
import RailBender from './pages/RailBender';
import logo from './assets/images/banner.png';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

const App = () => {
  const classes = useStyles();

  return (
    <Router>
      <div className="App">
        <Container maxWidth="lg">
          <div className={classes.root}>
            <Grid container spacing={3}>
              <Grid item xs={12}></Grid>
              <Grid item xs={12}>
                <Container maxWidth="md">
                  <Link to="/">
                    <img
                      src={logo}
                      alt="Newtronics Rail"
                      height="100%"
                      width="100%"
                    />
                  </Link>
                </Container>
              </Grid>
              <Switch>
                <Route path="/turntable">
                  <TurnTable />
                </Route>
                <Route path="/railbender">
                  <RailBender />
                </Route>
                <Route path="/traverser">
                  <Traverser />
                </Route>
                <Route path="/">
                  <Main />
                </Route>
              </Switch>
            </Grid>
          </div>
        </Container>
      </div>
    </Router>
  );
};

export default App;
