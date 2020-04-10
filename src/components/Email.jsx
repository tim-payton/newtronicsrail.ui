import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
  },
}));

const Email = () => {
  const classes = useStyles();
  return (
    <Container maxWidth="md">
      <Typography variant="body1" gutterBottom>
        To register your interest there is a contact form below, or emails can
        be sent to <a href="mailto:j.newton@newtronics.co.uk?Subject=Newtronics%20Rail%20enquiry">j.newton@newtronics.co.uk</a>
      </Typography>
      <Typography variant="body1" gutterBottom>
        Contact
      </Typography>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField
          autoFocus
          margin="normal"
          id="email"
          label="Email Address"
          type="email"
          fullWidth
          variant="outlined"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          autoFocus
          margin="normal"
          id="message"
          label="Message"
          type="text"
          multiline
          rows="10"
          fullWidth
          variant="outlined"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          endIcon={<Icon>send</Icon>}
        >
          Send
        </Button>
      </form>
    </Container>
  );
};

export default Email;
