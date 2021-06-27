const selectProduct = (id, price, quant, image) => {
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
    }}
    )
  } else {
    let newProd = { id: id, price: price, quant: quant, image: image }
    productsArr.push(newProd)
  }
  localStorage.setItem('products', JSON.stringify(productsArr))
}

export default selectProduct