import React, { useEffect, useState } from 'react'
import { useHistory } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import {
  Button,
  Container,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  ListItemSecondaryAction,
  IconButton,
  Typography,
} from '@material-ui/core';
import { incrementProduct, decrementProduct } from '../helper/change-quant'
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100%',
    minHeight: 'calc(100vh - 145px)',
    padding: '10%',
  },

  list: {
    width: '100%',
    marginBottom: 10,
    marginLeft: 20,
    marginRight: 20,
  },

  quant: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },

  buttonGroup: {
    display: 'flex',
  },

  button: {
    width: '106px',
    marginLeft: theme.spacing(1),
    backgroundColor: theme.palette.error.main,
  },

  avatar: {
    height: 50,
    width: 50,
    borderRadius: '50%',
    objectFit: 'cover',
  },

  purchase: {
    display: 'inline',
    marginLeft: 'auto',
  },
}));

const ListModal = () => {
  const classes = useStyles();
  const history = useHistory();
  const [purchaseAmount, setPurchaseAmount] = useState()
  const [shoppingList, setShoppingList] = useState(JSON.parse(localStorage.getItem('products')))

  const handleDecrement = (product) => {
    decrementProduct(product.id, product.quant, setShoppingList)
  }

  const handleIncrement = (product) => {
    incrementProduct(product.id, product.quant, setShoppingList)
  }

  const purchase = () => {
    if (window.confirm('Deseja finalizar sua compra?')) {
      setShoppingList()
      localStorage.removeItem('products')
      alert('compra finalizada!')
      history.push('/')
    }
  }

  const handleClick = () => {
    history.push('/')
  }

  useEffect(() => {
    let value = 0
    shoppingList?.forEach((product) => {
      value = value + product.totalPrice
    })
    setPurchaseAmount(value)
  }, [shoppingList])

  return (
    <Container className={classes.root}>
      {shoppingList ?
        <>
          <Typography align='center' variant="h4">Carrinho de Compras</Typography>
          <List className={classes.list}>
            {shoppingList?.map((product) => (
              <ListItem key={product.id}>
                <ListItemAvatar >
                  <img className={classes.avatar} src={product.image} alt={product.id} />
                </ListItemAvatar>
                <ListItemText primary={product.id} secondary={`Preço: R$ ${product.price},00`} />
                <ListItemText primary={`Total: R$ ${product.totalPrice},00`} />
                <ListItemSecondaryAction className={classes.quant}>
                  <ListItemText primary={`Quant: ${product.quant}`} />
                  <IconButton onClick={() => handleIncrement(product)} edge="end" aria-label="add">
                    <AddIcon />
                  </IconButton>
                  <IconButton onClick={() => handleDecrement(product)} edge="end" aria-label="delete">
                    <RemoveIcon />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            ))}
          </List>
          <Typography className={classes.purchase} variant="h6">Valor da Compra: R${purchaseAmount},00</Typography>
          <div className={classes.buttonGroup}>
            <Button
              onClick={purchase}
              variant="contained"
              color="primary"
            >
              Comprar
            </Button>
            <Button
              className={classes.button}
              onClick={handleClick}
              variant="contained"
            >
              Voltar
            </Button>
          </div>
        </>
        :
        <>
          <Typography variant="h1"> Você não fez compras ainda! </Typography>
          <Button
            onClick={handleClick}
            variant="contained"
            color="primary"
          >
            Voltar
          </Button>
        </>
      }
    </Container>

  )
}

export default ListModal