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

// loaders
import fetchProducts from './loaders/products.loader.js'
import fetchProduct from './loaders/product.loader.js'

// redux/state
import { Provider } from 'react-redux'
import store from './redux/store.redux'

import './assets/styles/bootstrap.custom.css'
import './assets/styles/index.css'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index={true} path='/' element={<Home />} loader={fetchProducts} />
      <Route
        path='product/:id'
        element={<ProductScreen />}
        loader={fetchProduct}
      />
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
