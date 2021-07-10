const changeBadge = (id, setShoppingList) => {
  let products = localStorage.getItem('products')
  let productsArr = []

  if (products) {
    productsArr = JSON.parse(products)
  }

  let exist = productsArr.filter((product) => product.id === id);
  if (exist.length > 0) {
    productsArr.forEach((product) => {
      if (product.id === id) {
        product.quant = parseInt(product.quant)
        setShoppingList(productsArr)
      }
    })
  } 
}

export { changeBadge }