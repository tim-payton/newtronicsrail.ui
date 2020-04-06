import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Carousel from "./components/Carousel";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Container from "@material-ui/core/Container";
import logo from "./assets/images/banner.png";
import firstinstall from "./assets/images/firstinstall.jpg";
import developmentrig from "./assets/images/developmentrig.jpg";
import newframe from "./assets/images/newframe.jpg";
import fouthimage from "./assets/images/4thimage.jpg";
import fifthimage from "./assets/images/5thimage.jpg";
import Email from "./components/Email";
import CheckIcon from "@material-ui/icons/Check";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <Container maxWidth="lg">
        <div className={classes.root}>
          <Grid container spacing={3}>
            <Grid item xs={12}></Grid>
            <Grid item xs={12}>
              <Container maxWidth="md">
                <img
                  src={logo}
                  alt="Newtronics Rail"
                  height="100%"
                  width="100%"
                />
              </Container>
            </Grid>
            <Grid item xs={12}>
              <Typography
                variant="h4"
                component="h2"
                gutterBottom
                align="center"
              >
                NEWTRONICS RAIL TURN TABLE SYSTEM
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body1" gutterBottom>
                While the Newtronics turntable system is not currently available
                for purchase. It has been tested and developed for a club who
                have a midlands O gauge 70ft turn table.
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body1" gutterBottom>
                Below are a few photos of various stages of development, the
                latest revision of the circuit is nearing completion, to meet
                the final version of the frame, shown below.
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Paper elevation={0}>
                <img
                  src={firstinstall}
                  alt="Newtronics Rail"
                  height="100%"
                  width="100%"
                />
                <Typography variant="h5" gutterBottom>
                  FIRST INSTALL
                </Typography>
                <Typography variant="body1" gutterBottom>
                  Installation on O Gauge turntable on the Kimble layout at
                  LWMRS. This system has been running for a few months on the
                  prototype rig shown below. Feed back from their members have
                  gone into development of the production version and will be
                  available in the near future.
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={4}>
              <Paper elevation={0}>
                <img
                  src={developmentrig}
                  alt="Newtronics Rail"
                  height="100%"
                  width="100%"
                />
                <Typography variant="h5" gutterBottom>
                  DEVELOPMENT RIG
                </Typography>
                <Typography variant="body1" gutterBottom>
                  Supports 16 tracks, both head and tail. One programming board,
                  simple to use, easy to integrate into custom switch panels
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={4}>
              <Paper elevation={0}>
                <img
                  src={newframe}
                  alt="Newtronics Rail"
                  height="100%"
                  width="100%"
                />
                <Typography variant="h5" gutterBottom>
                  THE NEW FRAME
                </Typography>
                <Typography variant="body1" gutterBottom>
                  Second generation frame, built from laser cut acrylic, simple
                  mounting solution, belt tension adjustment, compact design
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper elevation={0}>
                <img
                  src={fouthimage}
                  alt="Newtronics Rail"
                  height="100%"
                  width="100%"
                />
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
            <Grid item xs={12}>
              <Typography variant="body2" gutterBottom>
                Shown above, a demonstrator model to prove the concept. This is
                a prototype rig, and the frame (shown above) and latest circuit
                board revision add more features, greater stability, reliability
                and easier install and adjustment.
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body2" gutterBottom>
                Shown below are a few pictures of the latest turn table system,
                with more features, better mechanical design, and several
                software improvements over the prototype shown above. Extensive
                testing on this unit is imminent, taking one step closer to
                having units to sell.
              </Typography>
            </Grid>
            <Grid item xs={4} />
            <Grid item xs={4}>
              <Carousel />
            </Grid>
            <Grid item xs={4} />
            <Grid item xs={12}>
              <Typography variant="h3" gutterBottom align="center">
                NEWTRONICS RAIL TURN TABLE
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="h5" gutterBottom>
                Turn Table ​Features
              </Typography>
            </Grid>
            <Grid item xs={10}>
              <List dense>
                <ListItem>
                  <ListItemIcon>
                    <CheckIcon />
                  </ListItemIcon>
                  <ListItemText primary="Designed for N, OO & O gauge turn tables" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckIcon />
                  </ListItemIcon>
                  <ListItemText primary="Supports up to 16 tracks" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckIcon />
                  </ListItemIcon>
                  <ListItemText primary="Simple push button interface" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckIcon />
                  </ListItemIcon>
                  <ListItemText primary="Easy to interface with your own control panel" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckIcon />
                  </ListItemIcon>
                  <ListItemText primary="Better than 0.1° accuracy" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckIcon />
                  </ListItemIcon>
                  <ListItemText primary="Single belt drive keeping it simple and cost effective" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckIcon />
                  </ListItemIcon>
                  <ListItemText primary="Turn table acceleration" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckIcon />
                  </ListItemIcon>
                  <ListItemText primary="Non interrupted track power for full 360°" />
                </ListItem>
              </List>
            </Grid>
            <Grid item xs={12}>
              <Email />
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  );
}

export default App;
