import React from 'react'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import {
  AppBar,
  Badge,
  Toolbar,
  Typography,
  IconButton,
} from '@material-ui/core'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: 0,
    width: '100%',
  },

  badge: {
    padding: '0 4px',
  },

  title: {
    fontSize: '2rem',
    flexGrow: 1,
    
    [theme.breakpoints.down('xs')]: {
      fontSize: '1.8rem',
    },
  },
}));

const Navbar = () => {
  const classes = useStyles();
  const shoppingList = JSON.parse(localStorage.getItem('products'))


  return (
    <AppBar position="static" className={classes.root} color="primary">
      <Toolbar>
        <Typography variant="h6" className={classes.title} color="secondary" >
          E-Commerce
        </Typography>
        <Link to="/shopcart">
          <IconButton type="button">
            <Badge badgeContent={shoppingList ? shoppingList : 0}  variant='dot' className={classes.badge} color="error">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
        </Link>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar