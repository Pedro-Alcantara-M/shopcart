const selectProduct = (id, price, quant, image, setShoppingList) => {
  let products = localStorage.getItem('products')
  let productsArr = []

  if (products) {
    productsArr = JSON.parse(products)
  }

  let exist = productsArr.filter((product) => product.id === id);
  if (exist.length > 0) {
    productsArr.forEach((product) => {
      if (product.id === id) {
          product.quant = parseInt(product.quant) + parseInt(quant)
          product.totalPrice = parseInt(product.quant) * parseInt(product.price)
    }}
    )
  } else {
    let newProd = { 
      id: id, 
      price: price, 
      quant: quant, 
      image: image ,
      totalPrice: quant * price
    }
    productsArr.push(newProd)
  }
  localStorage.setItem('products', JSON.stringify(productsArr))
}

export default selectProduct