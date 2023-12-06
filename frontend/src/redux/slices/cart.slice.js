import { createSlice } from '@reduxjs/toolkit'
import { updateCart } from '../../utils/cart.utils'

// initial state from localStorage if any or if not initialize empty array
const initialState = localStorage.getItem('cart')
  ? JSON.parse(localStorage.getItem('cart'))
  : { cartItems: [] }

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, { payload }) => {
      const doesItemExist = state.cartItems.find((c) => c._id === payload._id)

      if (doesItemExist)
        state.cartItems = state.cartItems.map((c) =>
          c._id === doesItemExist._id ? payload : c
        )
      else state.cartItems = [...state.cartItems, payload]

      return updateCart(state)
    },
    removeFromCart: (state, { payload }) => {
      state.cartItems = state.cartItems.filter((c) => c._id !== payload._id)

      return updateCart(state)
    },
  },
})

export const { addToCart, removeFromCart } = cartSlice.actions

export default cartSlice.reducer
