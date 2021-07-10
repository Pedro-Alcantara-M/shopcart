import { Switch, Route } from 'react-router-dom'
import Products from './components/products'
import ListModal from './components/listModal'

const Routes = () => {

  return (
    <Switch>
      <Route  exact path="/">
        <Products />
      </Route>
      <Route path="/shopcart">
        <ListModal />
      </Route>
    </Switch>
  )
}

export default Routes