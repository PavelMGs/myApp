import { createSlice } from '@reduxjs/toolkit'

export const daySlice = createSlice({
  name: 'day',
  initialState: {
    value: 0,
  },
  reducers: {
    setDay: (state, action) => {
      state.value = action.payload
    },
  },
})

export const { setDay } = daySlice.actions;

export default daySlice.reducer