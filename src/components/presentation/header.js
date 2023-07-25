import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../static/images/resumeicon.jpg'
import { useDispatch, useSelector } from 'react-redux'
import { adddoc } from '../../redux/documentSlice'

const Header = (props) => {
  const id = useSelector((state) => state.document.id)
  const dispatch = useDispatch()
  const getstarted = () => {
    if (id === null) {
      dispatch(adddoc())
    }
  }

  return (
    <header className='header'>
      <nav className='nav'>
        <a href='/' className='holder-logo'>
          <img className='logo' src={logo}></img>
        </a>

        <span className='logotext'>ResMe</span>

        <div className='header-links full-height'>
          <ul className='nav-end'>
            <li className='build' onClick={getstarted}>
              <NavLink className='btn-nvt-gm' to='/contact'>
                Start Building
              </NavLink>
            </li>
            <li className='holder-pricing'>
              <NavLink className='btn-nvt-gm' to='/about-us'>
                About Us
              </NavLink>
            </li>
          </ul>

          {/* </>:<LoggesOut></LoggesOut>} */}
        </div>
      </nav>
    </header>
  )
}

// const mapStateToProps=(state)=>{
//   return{
//      auth: state.firebase.auth
//   }
// }
// const mapDispatchToProps= (dispatch)=>{
//   return {
//    signOut:()=>dispatch(authActions.signout())
//   }
// }
export default Header
