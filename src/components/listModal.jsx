import React, { useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {
  ListItem, 
  ListItemText, 
  ListItemAvatar, 
  ListItemSecondaryAction, 
  IconButton,
} from '@material-ui/core';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';

import {incrementProduct, decrementProduct} from '../helper/change-quant'

const useStyles = makeStyles((theme) => ({
  
  quant: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },

  avatar: {
    height: 50,
    width: 50,
    borderRadius: '50%',
    objectFit: 'cover',
  },
}));

const ListModal = (props) => {
  const classes = useStyles();
  const [shoppingList, setShoppingList] = useState(JSON.parse(localStorage.getItem('products')))

  const handleDecrement = () => {
    setShoppingList(decrementProduct(props.id, props.quant))
  }

  const handleIncrement = () => {
    setShoppingList(incrementProduct(props.id, props.quant))
  }

  return (
      <>
        <ListItem>
          <ListItemAvatar >
             <img className={classes.avatar} src={props.image} alt={props.id} />
          </ListItemAvatar>
          <ListItemText primary={props.id} secondary={`Preço: R$ ${props.price},00`}/>
          <ListItemText  primary={`Total: R$ ${props.totalPrice},00` } />
          <ListItemSecondaryAction className={classes.quant}>
            <ListItemText  primary={`Quant: ${props.quant}`} />
            <IconButton onClick={handleIncrement} edge="end" aria-label="add">
              <AddIcon />
            </IconButton>
            <IconButton onClick={handleDecrement} edge="end" aria-label="delete">
              <RemoveIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
        </>
  )
}

export default ListModal