import { configureStore } from '@reduxjs/toolkit'
import dishesSlice from './dishesSlice'
import cartSlice from './cartSlice'

export const store = configureStore({
  reducer: {
    dishes: dishesSlice, cartSlice
  },
})