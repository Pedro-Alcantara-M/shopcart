import React, { useEffect, useState } from 'react'
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
import { changeBadge } from '../helper/change-badge'

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
  },
}));

const Navbar = () => {
  const classes = useStyles();
  const [shoppingList, setShoppingList] = useState(JSON.parse(localStorage.getItem('products')))
  const [quant, setQuant] = useState()

  useEffect(() => {
    let value = 0
     shoppingList?.map((product) => {
       value = value + product.quant
       changeBadge(product.id, setShoppingList)
       return setQuant(value)
      })
      
  }, [shoppingList, setQuant])

  return (
    <AppBar position="static" className={classes.root} color="primary">
      <Toolbar>
        <Typography variant="h6" className={classes.title} color="secondary" >
          E-Commerce
        </Typography>
        <Link to="/shopcart">
          <IconButton type="button">
            <Badge badgeContent={quant} className={classes.badge} color="error">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
        </Link>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar