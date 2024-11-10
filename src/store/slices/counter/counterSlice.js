import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  counter: 10,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.counter += 1
    },
    decrease: state => {
        state.counter -= 1
    },
    changeByValue: (state, actions) => {
        state.counter = state.counter + actions.payload 
    }
    
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrease, changeByValue } = counterSlice.actions