import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
// import update from 'immutability-helper';
import { fieldCd, skinCodes } from '../../constants/typeCodes'
// import * as contactActions from '../../actions/contactActions';
// import { bindActionCreators } from 'redux';
// import { withRouter } from "react-router-dom";
import { useHistory } from 'react-router-dom'
import ResumePreview from './resumePreview'
import { useSelector, useDispatch } from 'react-redux'
import { addskill } from '../../redux/skillSlice'
// import { connect } from "react-redux";

function Skills(props) {
  const dispatch = useDispatch()
  let history = useHistory()
  const [skills, setSkills] = useState(
    useSelector((state) => state.skills.skilldata)
  )
  const [skill, setSkill] = useState('')
  //    useEffect(() => {
  //        if(!props.document || !props.document.id || !props.document.skinCd)
  //        {
  //            history.push('/getting-started')
  //        }
  //    }, [])
  const doc = useSelector((state) => state.document)
  useEffect(() => {
    if (!doc || !doc.id) {
      history.push('/')
    }
  }, [])
  const addskil = (event) => {
    // this.setState({contactSection:update(this.state.contactSection,{$merge: {[key]:val}})});
    setSkills([...skills, skill])
    dispatch(addskill({ skill }))
    setSkill('')
  }
  const onSubmit = async () => {
    // if(props.contactSection!=null){
    //     props.updateSkills(props.document.id,skills);
    // }
    // else{
    //     props.addSkills(props.document.id,skills);
    // }

    history.push('/proffesion')
  }

  const getFieldData = (key) => {
    return ''
  }

  return (
    <div className='container med contact'>
      <div className='section funnel-section'>
        <div className='form-card'>
          <h2 className='form-heading center'>Skills</h2>
          <div className='form-section'>
            <div className='input-group'>
              <label>Add Skill</label>
              <div className='effect'>
                <input
                  type='text'
                  name={fieldCd.Skills}
                  value={skill}
                  onChange={(e) => setSkill(e.target.value)}
                />
                <span></span>
              </div>
              <div className='error'></div>
              <button
                onClick={addskil}
                className='btn hvr-float-shadow'
                type='button'
              >
                Add Skill
              </button>
            </div>

            <div className='form-buttons'>
              <button
                onClick={onSubmit}
                className='btn hvr-float-shadow'
                type='button'
              >
                Next
              </button>
              <NavLink to='/contact' className='center'>
                Back
              </NavLink>
            </div>
          </div>
        </div>

        <div className='preview-card'>
          <ResumePreview
            contactSection={useSelector((state) => state.contact.contactdata)}
            skillsSection={skills}
            proffesionSection={useSelector(
              (state) => state.proffesions.profdata
            )}
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

export default Skills
