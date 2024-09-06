import { AppBar , Button , Toolbar, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const Nabar = () => {
  return(
  
    <div>
    <AppBar>
    <Toolbar>
    <Typography variant='h6' component="div" color="black">App2</Typography>&nbsp;&nbsp;&nbsp;
    <Link to='/s'>
    <Button variant="contained" color="secondary">Statebasics</Button>
    </Link>
    &nbsp;
    <Link to='/'>
    <Button variant="contained" color="secondary">Signup</Button>
    </Link>
    &nbsp;
    <Link to='/Login'>
    <Button variant="contained"color="secondary">Login</Button>
    </Link>
    &nbsp;
    <Link to='/C'>
    <Button variant="contained" color="secondary">Counter</Button>
    </Link>
    &nbsp;
    <Link to='/n'>
    <Button variant="contained" color="secondary">Name</Button>
    </Link>
    <Link to='/f'>
    <Button variant="contained" color="secondary">Api</Button>
    </Link>
    <Link to='/p'>
    <Button variant="contained" color="secondary">Pockemon</Button>
    </Link>
    </Toolbar>
    </AppBar>
    </div>
  )
}
export default Nabar