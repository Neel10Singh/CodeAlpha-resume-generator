import { createSlice } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid'

export const documentSlice = createSlice({
  name: 'document',
  initialState: {
    id: null,
  },
  reducers: {
    adddoc: (state) => {
      state.id = uuidv4()
    },
  },
})
export const { adddoc } = documentSlice.actions
export default documentSlice.reducer
