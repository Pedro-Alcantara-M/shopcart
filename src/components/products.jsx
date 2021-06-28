import React from 'react'
import styled from 'styled-components'
import Cards from './cards'
import StoreProducts from '../storeProducts'


const Products = () => {
  return(
    <Container>
      {StoreProducts.map((product)=>(
        <Cards
             key={product.id}
             image= {product.image}
             id= {product.id}
             price= {product.price}
             description= {product.description}
             />  
      ))}
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  position: relative;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: calc(100vh - 145px);
  background-color: #cccccc68;
`

export default Products