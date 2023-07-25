import { createSlice } from '@reduxjs/toolkit'

export const proffesionSlice = createSlice({
  name: 'proffesions',
  initialState: {
    profdata: [],
  },
  reducers: {
    addprof: (state, action) => {
      state.profdata = [...state.profdata, action.payload.proffesion]
    },
  },
})
export const { addprof } = proffesionSlice.actions
export default proffesionSlice.reducer
