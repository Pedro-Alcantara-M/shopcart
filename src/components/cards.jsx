import React, { useState } from 'react'
import selectProduct from '../helper/select-product'
import { makeStyles } from '@material-ui/core/styles';
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardMedia,
  CardContent,
  Typography,
  TextField
} from '@material-ui/core'

const useStyles = makeStyles({
  root: {
    width: '300px',
    padding: '10px',
    margin: '20px 10px',

    '& h4': {
      margin: '5px 0'
    },

    '& body2': {
      margin: '10px 0'
    },

    '& button':{
      fontSize: '12px',
      marginRight: 10,
    }
  },
  
  media: {
    height: 240,
  },

  action: {
    display: 'flex',
    flexDirection: 'row',
    margin: '5px 0',

    '& div>fieldset': {
      width: '10px'
    }
  }
  
});


const Cards = (props) => {
  const classes = useStyles();
  const [quant, setQuant] = useState(1)
  const image = `/${props.image}.jpg`

  const handleChange = (e) => {
    setQuant(e.target.value)
  }

  const handleAdd = () => {
    selectProduct(props.id, props.price, quant, image)
    setQuant(1)
  }

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={image}
          title={props.id}
        />
          <CardContent>
            <Typography variant="h5">{props.id}</Typography>
            <Typography variant="h4" >Valor: {props.price},00</Typography>
            <Typography variant="body2">Descrição: {props.description}</Typography>
          </CardContent>
        <CardActions>
          <form className={classes.action} noValidate autoComplete="off">
          <Button 
            type='submit'
            variant="contained"
            color= 'primary'
            onClick={handleAdd} 
          >
            Adicionar ao Carrinho
          </Button>
            <TextField 
              id="outlined-basic" label="Quantidade"  
              value={quant}  
              onChange={handleChange} 
              variant="outlined" 
            />
          </form>
        </CardActions>
      </CardActionArea>
    </Card>
  )
}


export default Cards
