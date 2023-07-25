import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { withRouter } from 'react-router-dom'
import ResumePreview from './resumePreview'
import { skinCodes, fieldCd } from './../../constants/typeCodes'
// import { connect } from 'react-redux'
// import * as educationActions from '../../actions/educationActions';
// import {bindActionCreators} from 'redux';
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addprof } from '../../redux/proffesionSlice'

function Proffesion(props) {
  const dispatch = useDispatch()
  let history = useHistory()
  const [proffesions, setProffesions] = useState(
    useSelector((state) => state.proffesions.profdata)
  )
  const [proffesion, setProffesion] = useState({})

  const onchange = (event) => {
    var key = event.target.name
    var val = event.target.value
    setProffesion({ ...proffesion, [key]: val })
  }
  const AddProf = () => {
    setProffesions([...proffesions, proffesion])
    dispatch(addprof({ proffesion }))
    setProffesion({})
  }
  const getFieldData = (key) => {
    if (proffesion && proffesion[key]) {
      return proffesion[key]
    }
    return ''
  }
  const onSubmit = async (e) => {
    //console.log(this.state.educationSection);
    // if(props.proffesionSection!=null){
    //     props.updateProffesion(props.document.id,proffesion);
    // }else{
    //     props.addProffesion(props.document.id,proffesion);
    // }
    history.push('/education')
  }
  const doc = useSelector((state) => state.document)
  useEffect(() => {
    if (!doc || !doc.id) {
      history.push('/')
    }
  }, [])
  return (
    <div className='container med education'>
      <div className='section funnel-section'>
        <div className='form-card'>
          <h2 className='form-heading center'>Proffesional Section</h2>
          <div className='form-section'>
            <div className='input-group'>
              <label>Job Title</label>
              <div className='effect'>
                <input
                  type='text'
                  name={fieldCd.JobTitle}
                  onChange={onchange}
                  value={getFieldData(fieldCd.JobTitle)}
                />
                <span></span>
              </div>
              <div className='error'></div>
            </div>

            <div className='input-group'>
              <label>Company</label>
              <div className='effect'>
                <input
                  type='text'
                  name={fieldCd.JobCompany}
                  onChange={onchange}
                  value={getFieldData(fieldCd.JobCompany)}
                />
                <span></span>
              </div>
              <div className='error'></div>
            </div>

            <div className='input-group'>
              <label>Start Date</label>
              <div className='effect'>
                <input
                  type='text'
                  name={fieldCd.JobStartDate}
                  onChange={onchange}
                  value={getFieldData(fieldCd.JobStartDate)}
                />
                <span></span>
              </div>
              <div className='error'></div>
            </div>

            <div className='input-group'>
              <label>End Date</label>
              <div className='effect'>
                <input
                  type='text'
                  name={fieldCd.JobEndDate}
                  onChange={onchange}
                  value={getFieldData(fieldCd.JobEndDate)}
                />
                <span></span>
              </div>
              <div className='error'></div>
            </div>
            <div className='input-group'>
              <label>Job Description</label>
              <div className='effect'>
                <input
                  type='text'
                  name={fieldCd.JobDescription}
                  onChange={onchange}
                  value={getFieldData(fieldCd.JobDescription)}
                />
                <span></span>
              </div>
              <div className='error'></div>
              <button
                className='btn hvr-float-shadow'
                type='button'
                onClick={AddProf}
              >
                Add
              </button>
            </div>

            <div className='form-buttons'>
              <button
                className='btn hvr-float-shadow'
                type='button'
                onClick={onSubmit}
              >
                Next
              </button>
              <NavLink to='/skills' className='center'>
                Back
              </NavLink>
            </div>
          </div>
        </div>
        <div className='preview-card'>
          <ResumePreview
            contactSection={useSelector((state) => state.contact.contactdata)}
            skillsSection={useSelector((state) => state.skills.skilldata)}
            proffesionSection={proffesions}
            educationSection={useSelector(
              (state) => state.education.educationdata
            )}
            projectSection={useSelector((state) => state.projects.projdata)}
            skinCd={props?.document?.skinCd}
          ></ResumePreview>
        </div>
      </div>
    </div>
  )
}

export default Proffesion
