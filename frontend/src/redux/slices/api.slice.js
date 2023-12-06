import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { BASE_URL } from '../constants'

export const apiSlice = createApi({
  // base url for every endpoint
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),

  //cache tags
  tagTypes: ['Product', 'Order', 'User'],

  // object of endpoints
  endpoints: (builder) => ({}),
})
