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
import { addeducation } from '../../redux/educationSlice'
import { stat } from 'fs'

function Education(props) {
  const dispatch = useDispatch()
  console.log('Education')
  let history = useHistory()
  const [education, setEducation] = useState(
    useSelector((state) => state.education.educationdata)
  )

  const onchange = (event) => {
    var key = event.target.name
    var val = event.target.value
    setEducation({ ...education, [key]: val })
  }
  const getFieldData = (key) => {
    if (education && education[key]) {
      return education[key]
    }
    return ''
  }
  const onSubmit = async (e) => {
    //console.log(this.state.educationSection);
    // if(props.educationSection!=null){
    //     props.updateEducation(props.document.id,education);
    // }else{
    //     props.addEducation(props.document.id,education);
    // }
    dispatch(addeducation({ education }))
    history.push('/projects')
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
          <h2 className='form-heading center'>Educational Section</h2>
          <div className='form-section'>
            <div className='input-group'>
              <label>College Name</label>
              <div className='effect'>
                <input
                  type='text'
                  name={fieldCd.SchoolName}
                  onChange={onchange}
                  value={getFieldData(fieldCd.SchoolName)}
                />
                <span></span>
              </div>
              <div className='error'></div>
            </div>

            <div className='input-group'>
              <label>Degree</label>
              <div className='effect'>
                <input
                  type='text'
                  name={fieldCd.Degree}
                  onChange={onchange}
                  value={getFieldData(fieldCd.Degree)}
                />
                <span></span>
              </div>
              <div className='error'></div>
            </div>

            <div className='input-group'>
              <label>CGPA</label>
              <div className='effect'>
                <input
                  type='text'
                  name={fieldCd.GraduationCGPA}
                  onChange={onchange}
                  value={getFieldData(fieldCd.GraduationCGPA)}
                />
                <span></span>
              </div>
              <div className='error'></div>
            </div>

            <div className='input-group'>
              <label>City/State</label>
              <div className='effect'>
                <input
                  type='text'
                  name={fieldCd.City}
                  onChange={onchange}
                  value={getFieldData(fieldCd.City)}
                />
                <span></span>
              </div>
              <div className='error'></div>
            </div>

            <div className='input-group'>
              <label>Graduation Month</label>
              <div className='effect'>
                <input
                  type='text'
                  name={fieldCd.GraduationDate}
                  onChange={onchange}
                  value={getFieldData(fieldCd.GraduationDate)}
                />
                <span></span>
              </div>
              <div className='error'></div>
            </div>

            <div className='input-group'>
              <label>Graduation Year</label>
              <div className='effect'>
                <input
                  type='text'
                  name={fieldCd.GraduationYear}
                  onChange={onchange}
                  value={getFieldData(fieldCd.GraduationYear)}
                />
                <span></span>
              </div>
              <div className='error'></div>
            </div>

            <div className='form-buttons'>
              <button
                className='btn hvr-float-shadow'
                type='button'
                onClick={onSubmit}
              >
                Next
              </button>
              <NavLink to='/proffesion' className='center'>
                Back
              </NavLink>
            </div>
          </div>
        </div>
        <div className='preview-card'>
          <ResumePreview
            contactSection={useSelector((state) => state.contact.contactdata)}
            skillsSection={useSelector((state) => state.skills.skilldata)}
            proffesionSection={useSelector(
              (state) => state.proffesions.profdata
            )}
            educationSection={education}
            projectSection={useSelector((state) => state.projects.projdata)}
            skinCd={props?.document?.skinCd}
          ></ResumePreview>
        </div>
      </div>
    </div>
  )
}

export default Education
