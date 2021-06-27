import React from 'react'
import { 
  AppBar, 
  Toolbar,
  Typography, 
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  text: {
    marginLeft: "45%",
  },

  small: {
    fontSize: '0.9rem',
  }
}))

const Footer = () => {
  const classes = useStyles();
  return(
    <AppBar position="static" color="primary">
      <Toolbar>
        <Typography variant="h5" className={classes.text} color="secondary" >
           E-Commerce <small className={classes.small}>© 2021</small>
        </Typography>
      </Toolbar>
    </AppBar>
   
  )
}

export default Footer