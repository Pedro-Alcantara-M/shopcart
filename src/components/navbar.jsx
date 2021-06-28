import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {
  AppBar,
  Button,
  Badge,
  Toolbar,
  Typography,
  IconButton,
  List,
  Modal,
  Container
} from '@material-ui/core'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import ListModal from './listModal';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  badge: {
    padding: '0 4px',
  },

  list: {
    marginBottom: 10,
    marginLeft: 20,
    marginRight: 20,
  },

  listModal: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    width: '100%',
    backgroundColor: theme.palette.background.paper,

    '& button': {
     marginLeft: 'auto',
    },

    '& h5': {
      marginTop: 10,
    },
  },

  purchase: {
    marginRight: 35,
  },

  button: {
    margin: 20,
    marginRight: 'auto',
  },


  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },

  title: {
    fontSize: '2rem',
    flexGrow: 1,
  },
}));


const Navbar = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [purchaseAmount, setPurchaseAmount] = useState()
  const [totalQuant, setTotalQuant] = useState()
  const [shoppingList, setShoppingList] = useState(JSON.parse(localStorage.getItem('products')))

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const purchase = () => {
    if (window.confirm('Deseja finalizar sua compra?')) {
      setOpen(false)
      setShoppingList()
      localStorage.removeItem('products')
      alert('compra finalizada!')
    }
  }

  useEffect(() => {
    let value = 0
    let quant = 0
    shoppingList?.forEach((product) => {
      value = value + product.totalPrice
      quant = quant + product.quant
    })
    setPurchaseAmount(value)
    setTotalQuant(quant)
  }, [shoppingList])



  return (
    <AppBar color="primary">
      <Toolbar>
        <Typography variant="h6" className={classes.title} color="secondary" >
          E-Commerce
        </Typography>
        <IconButton type="button" onClick={handleOpen}>
          <Badge badgeContent={totalQuant} className={classes.badge} color="error">
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
        <Modal
          className={classes.modal}
          open={open}
          onClose={handleClose}
          aria-labelledby="Open shopcart"
          aria-describedby="list of products"
        >
          <Container className={classes.listModal}>
            <Typography align='center' variant="h5">Compras</Typography>
            <List className={classes.list}>
              {shoppingList?.map((product) => (
                <ListModal
                  key={product.id}
                  id={product.id}
                  price={product.price}
                  quant={product.quant}
                  totalPrice={product.totalPrice}
                  image={product.image}
                />
              ))
              }
            </List>
            <Typography align='right' className={classes.purchase} variant="h6">Valor da Compra: R${purchaseAmount},00</Typography>
            <Button
              className={classes.button}
              onClick={purchase}
              variant="contained"
              color="primary"
            >
              Finalizar Compra
            </Button>
          </Container>
        </Modal>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar