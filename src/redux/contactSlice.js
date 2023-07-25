import { createSlice } from '@reduxjs/toolkit'

export const contactSlice = createSlice({
  name: 'contact',
  initialState: {
    contactdata: null,
  },
  reducers: {
    addcontact: (state, action) => {
      state.contactdata = action.payload.contact
    },
    updatecontact: (state, action) => {
      state.contactdata = action.payload.contact
    },
  },
})
export const { addcontact, updatecontact } = contactSlice.actions
export default contactSlice.reducer
