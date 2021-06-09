import { createSlice } from '@reduxjs/toolkit'

export const timeSlice = createSlice({
  name: 'time',
  initialState: {
    value: 0,
  },
  reducers: {
    setTime: (state, action) => {
      state.value = action.payload
    },
  },
})

export const { setTime } = timeSlice.actions;

export default timeSlice.reducer