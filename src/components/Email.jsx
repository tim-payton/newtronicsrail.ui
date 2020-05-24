import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

const Email = () => {
  return (
    <Container maxWidth="md">
      <Typography variant="body1" gutterBottom>
        For more information about any of the products please forward your
        emails to
        <a href="mailto:j.newton@newtronics.co.uk?Subject=Newtronics%20Rail%20enquiry">
          j.newton@newtronics.co.uk
        </a>
      </Typography>
    </Container>
  );
};

export default Email;
