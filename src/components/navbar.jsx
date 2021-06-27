import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { 
  AppBar, 
  Toolbar,
  Typography, 
  IconButton, 
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

  listModal: {
    width: '60%',
    backgroundColor: theme.palette.background.paper,
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

const listShopCart = JSON.parse(localStorage.getItem('products'))

const Navbar = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Typography variant="h6" className={classes.title} color="secondary" >
          E-Commerce
        </Typography>
        <IconButton type="button" onClick={handleOpen}>
          <ShoppingCartIcon/>
        </IconButton>
        <Modal
          className={classes.modal}
          open={open}
          onClose={handleClose}
          aria-labelledby="Open shopcart"
          aria-describedby="list of products"
        >
        <Container className={classes.listModal}>
        <Typography variant="h5">Compras</Typography>
        {listShopCart?.map((product) => (
            <ListModal
            key={product.id}
            id={product.id}
            price={product.price}
            quant={product.quant}
            image={product.image}
            />
          ))
          }
          </Container>
        </Modal>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar