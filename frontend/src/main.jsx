import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom'

import App from './App.jsx'
import Home from './screens/home.screen.jsx'
import ProductScreen from './screens/product.screen.jsx'
import CartScreen from './screens/cart.screen.jsx'
import LoginScreen from './screens/login.screen.jsx'
import RegisterScreen from './screens/register.screen.jsx'
import ShippingScreen from './screens/shipping.screen.jsx'
import PrivateRoute from './components/private-route.component.jsx'

// redux/state
import { Provider } from 'react-redux'
import store from './redux/store.redux'

import './assets/styles/bootstrap.custom.css'
import './assets/styles/index.css'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index={true} element={<Home />} />
      <Route path='product/:id' element={<ProductScreen />} />
      <Route path='cart' element={<CartScreen />} />
      <Route path='login' element={<LoginScreen />} />
      <Route path='register' element={<RegisterScreen />} />

      <Route path='' element={<PrivateRoute />}>
        <Route path='shipping' element={<ShippingScreen />} />
      </Route>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
)
