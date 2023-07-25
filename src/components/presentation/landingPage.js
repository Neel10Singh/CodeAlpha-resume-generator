import React, { useState } from 'react'
import logo from '../../static/images/resume.png'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { adddoc } from '../../redux/documentSlice'

const Lp = () => {
  const id = useSelector((state) => state.document.id)
  const dispatch = useDispatch()
  const getstarted = () => {
    if (id === null) {
      dispatch(adddoc())
    }
  }
  return (
    <div className='container  lp-page center'>
      <div className='section'>
        <h1>Create a resume that stands out</h1>
        <p className='subhead'>
          Only 2% Resume make it past the first round. Be in that top 2%
        </p>
        <br></br>
        <div>
          <NavLink to='/contact'>
            <button
              className='btn hvr-floar-shadow getstart'
              onClick={getstarted}
            >
              Get Started for Free
            </button>
          </NavLink>
        </div>
        <img src={logo} className='lp-resume' alt='logo' />
      </div>
    </div>
  )
}

export default Lp
