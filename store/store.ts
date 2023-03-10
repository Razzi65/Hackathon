import { configureStore } from '@reduxjs/toolkit'
import authSlice from './authSlice'
import eventSlice from './eventSlice'


export const store = configureStore({
    reducer: {
      authSlice,
      eventSlice
    },
  })

  