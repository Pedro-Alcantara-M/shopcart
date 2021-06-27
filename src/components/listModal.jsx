import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {
  List, 
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
  list: {
    marginBottom: 10,
    marginLeft: 20,
    marginRight: 20,
  },

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
  const totalPrice =  props.price * props.quant

  return (
      <List className={classes.list}>
        <ListItem>
          <ListItemAvatar >
             <img className={classes.avatar} src={props.image} alt={props.id} />
          </ListItemAvatar>
          <ListItemText primary={props.id} secondary={`Preço: ${props.price},00`} />
          <ListItemText  primary={`Total: ${totalPrice},00` } />
          <ListItemSecondaryAction className={classes.quant}>
            <ListItemText  primary={`Quant: ${props.quant}`} />
            <IconButton  edge="end" aria-label="add">
              <AddIcon />
            </IconButton>
            <IconButton  edge="end" aria-label="delete">
              <RemoveIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      </List>
  )
}

export default ListModal