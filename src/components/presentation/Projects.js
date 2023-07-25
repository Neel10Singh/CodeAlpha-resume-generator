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
import { addproj } from '../../redux/projectSlice'

function Projects(props) {
  const dispatch = useDispatch()
  let history = useHistory()
  const [projects, setProjects] = useState(
    useSelector((state) => state.projects.projdata)
  )
  const [project, setProject] = useState({})

  const onchange = (event) => {
    var key = event.target.name
    var val = event.target.value
    setProject({ ...project, [key]: val })
  }
  const AddProj = () => {
    setProjects([...projects, project])
    dispatch(addproj({ project }))
    setProject({})
  }
  const getFieldData = (key) => {
    if (project && project[key]) {
      return project[key]
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
    history.push('/finalize')
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
          <h2 className='form-heading center'>Projects Section</h2>
          <div className='form-section'>
            <div className='input-group'>
              <label>Project Name</label>
              <div className='effect'>
                <input
                  type='text'
                  name={fieldCd.ProjectName}
                  onChange={onchange}
                  value={getFieldData(fieldCd.ProjectName)}
                />
                <span></span>
              </div>
              <div className='error'></div>
            </div>

            <div className='input-group'>
              <label>Project Description</label>
              <div className='effect'>
                <input
                  type='text'
                  name={fieldCd.ProjectDesc}
                  onChange={onchange}
                  value={getFieldData(fieldCd.ProjectDesc)}
                />
                <span></span>
              </div>
              <div className='error'></div>
            </div>

            <div className='input-group'>
              <label>Project Link</label>
              <div className='effect'>
                <input
                  type='text'
                  name={fieldCd.ProjectLink}
                  onChange={onchange}
                  value={getFieldData(fieldCd.ProjectLink)}
                />
                <span></span>
              </div>
              <div className='error'></div>
              <button
                className='btn hvr-float-shadow'
                type='button'
                onClick={AddProj}
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
              <NavLink to='/education' className='center'>
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
            educationSection={useSelector(
              (state) => state.education.educationdata
            )}
            projectSection={projects}
            skinCd={props?.document?.skinCd}
          ></ResumePreview>
        </div>
      </div>
    </div>
  )
}

export default Projects
