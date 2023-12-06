import { createSlice } from '@reduxjs/toolkit'

// initial state from localStorage if any or if not initialize empty array
const initialState = localStorage.getItem('cart')
  ? JSON.parse(localStorage.getItem('cart'))
  : { cartItems: [] }

const addDecimals = (num) => (Math.round(num * 100) / 100).toFixed(2)

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, { payload, type }) => {
      const doesItemExist = state.cartItems.find((c) => c._id === payload._id)

      if (doesItemExist)
        state.cartItems = state.cartItems.map((c) =>
          c._id === doesItemExist._id ? payload : c
        )
      else state.cartItems = [...state.cartItems, payload]

      // calc items price
      state.itemsPrice = addDecimals(
        state.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0)
      )

      // calc shipping price (if order is over $100 = free ship, else ship = $10)
      state.shippingPrice = addDecimals(state.itemsPrice > 100 ? 0 : 10)

      // calc tax price (15%)
      state.taxPrice = addDecimals(Number(0.15 * state.itemsPrice).toFixed(2))

      // calc total price
      state.totalPrice = (
        Number(state.itemsPrice) +
        Number(state.shippingPrice) +
        Number(state.taxPrice)
      ).toFixed(2)

      localStorage.setItem('cart', JSON.stringify(state))
    },
  },
})

export const { addToCart } = cartSlice.actions

export default cartSlice.reducer
