import { createSlice } from '@reduxjs/toolkit'

export const skillSlice = createSlice({
  name: 'skills',
  initialState: {
    skilldata: [],
  },
  reducers: {
    addskill: (state, action) => {
      state.skilldata = [...state.skilldata, action.payload.skill]
    },
  },
})
export const { addskill } = skillSlice.actions
export default skillSlice.reducer
