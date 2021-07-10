const decrementProduct = (id, quant, setShoppingList ) => {
  let products = localStorage.getItem('products')
  let productsArr = []

  if (products) {
    productsArr = JSON.parse(products)
  }

  let exist = productsArr.filter((product) => product.id === id);
  if (exist.length > 0) {
    productsArr.forEach((product) => {
      if (product.id === id) {
        product.quant = parseInt(product.quant) - 1

        if (product.quant > 0) {
          product.totalPrice = parseInt(product.quant) * parseInt(product.price)
        } else if (product.quant === 0) {
          productsArr = productsArr.filter((product) => product.quant !== 0)
        }
      }
    })
  }
  localStorage.setItem('products', JSON.stringify(productsArr))
  setShoppingList(productsArr)

}

const incrementProduct = (id, quant, setShoppingList) => {
  let products = localStorage.getItem('products')
  let productsArr = []

  if (products) {
    productsArr = JSON.parse(products)
  }

  let exist = productsArr.filter((product) => product.id === id);
  if (exist.length > 0) {
    productsArr.forEach((product) => {
      if (product.id === id) {
        product.quant = parseInt(product.quant) + 1
        product.totalPrice = parseInt(product.quant) * parseInt(product.price)
      }
    })
  }
  localStorage.setItem('products', JSON.stringify(productsArr))
  setShoppingList(productsArr)
}

export { decrementProduct, incrementProduct }