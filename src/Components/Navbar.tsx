import React, { useState } from 'react'
import anixity from '../Constants/newanxity.png'
import ADHD from '../Constants/ADHD.png'
import OCD from '../Constants/ocd.png'
import Bipolar from '../Constants/Bipolar.png'
import ptsd from '../Constants/ptsd.png'


import { AppBar, Toolbar, Typography, Button, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  appBar: {
    
    background: 'rgba(27, 78, 230, 1)', // Change this to your desired background color
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'center',
  },
  button: {
    border: '1px solid black',
    borderRadius: '20%',
    backgroundColor: 'rgb(160,74,235)',
    margin: theme.spacing(1),
    transition: 'background-color 0.3s ease',
    '&:hover': {
      backgroundColor: 'rgb(95,58,128)',
    },
  },
  
}));

const Navbar = () => {
  const classes = useStyles();


  return (
    
    <AppBar position="static" className={classes.appBar}>
    <Toolbar className={classes.toolbar}>
      <Button className={`${classes.button}`} color="inherit"><img className='w-8'  src={anixity} alt="" />Anxiety</Button>
      <Button className={classes.button} color="inherit"><img className='w-8'  src={ADHD} alt="" />ADHD</Button>
      <Button className={classes.button} color="inherit"><img className='w-8'  src={Bipolar} alt="" />Bipolar</Button>
      <Button className={classes.button} color="inherit"><img className='w-8'  src={OCD} alt="" />OCD</Button>
      <Button className={classes.button} color="inherit"><img className='w-8'  src={ptsd} alt="" />PTSD</Button>
    </Toolbar>
  </AppBar>
  )
}

export default Navbar