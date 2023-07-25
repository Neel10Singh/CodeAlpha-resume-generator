import { configureStore } from '@reduxjs/toolkit'

import documentReducer from './documentSlice'
import contactReducer from './contactSlice'
import skillReducer from './skillSlice'
import proffesionReducer from './proffesionSlice'
import educationReducer from './educationSlice'
import projectReducer from './projectSlice'
export default configureStore({
  reducer: {
    document: documentReducer,
    contact: contactReducer,
    skills: skillReducer,
    proffesions: proffesionReducer,
    education: educationReducer,
    projects: projectReducer,
  },
})
