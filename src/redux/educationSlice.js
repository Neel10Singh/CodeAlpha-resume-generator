import { createSlice } from '@reduxjs/toolkit'

export const educationSlice = createSlice({
  name: 'education',
  initialState: {
    educationdata: null,
  },
  reducers: {
    addeducation: (state, action) => {
      state.educationdata = action.payload.education
    },
    updateeducation: (state, action) => {
      state.educationdata = action.payload.education
    },
  },
})
export const { addeducation, updateeducation } = educationSlice.actions
export default educationSlice.reducer
