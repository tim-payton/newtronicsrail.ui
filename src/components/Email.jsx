import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const Email = () => {
  return (
    <Container>
      <Typography variant="body1" gutterBottom>
        <Box textAlign="center">
          For more information about any of the products please send an email to{' '}
          <a href="mailto:j.newton@newtronics.co.uk?Subject=Newtronics%20Rail%20enquiry">
            j.newton@newtronics.co.uk
          </a>
        </Box>
      </Typography>
    </Container>
  );
};

export default Email;
