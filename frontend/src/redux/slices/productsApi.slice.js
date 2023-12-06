import { PRODUCTS_URL } from '../constants'
import { apiSlice } from './api.slice'

export const productsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => PRODUCTS_URL,
      keepUnusedDataFor: 5,
    }),
    getSingleProduct: builder.query({
      query: (id) => `${PRODUCTS_URL}/${id}`,
      keepUnusedDataFor: 5,
    }),
  }),
})

export const { useGetProductsQuery, useGetSingleProductQuery } =
  productsApiSlice
