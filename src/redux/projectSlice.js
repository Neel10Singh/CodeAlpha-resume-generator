import { createSlice } from '@reduxjs/toolkit'

export const projectSlice = createSlice({
  name: 'projects',
  initialState: {
    projdata: [],
  },
  reducers: {
    addproj: (state, action) => {
      state.projdata = [...state.projdata, action.payload.project]
    },
  },
})
export const { addproj } = projectSlice.actions
export default projectSlice.reducer
