import React from 'react'
import { fieldCd } from './../../constants/typeCodes'
function ResumePreview(props) {
  // console.log('Resume Preview');
  const rvContact = (key, valToAppend) => {
    if (props.contactSection) {
      return props.contactSection[key]
        ? props.contactSection[key] + (valToAppend ? valToAppend : '')
        : ''
    }
    return ''
  }
  const rvSkills = () => {
    console.log(props.skillsSection)
    if (props.skillsSection) {
      return props.skillsSection
    }
    return ''
  }
  const getprofdata = (prof, key) => {
    return prof[key]
  }
  const getprojdata = (proj, key) => {
    return proj[key]
  }
  const rvEducation = (key, valToAppend) => {
    if (props.educationSection) {
      return props.educationSection[key]
        ? props.educationSection[key] + (valToAppend ? valToAppend : '')
        : ''
    }
    return ''
  }

  return (
    <div className={'resume-preview '}>
      <div className={'name-section'}>
        <p className={'center contact-name bold text-upper'}>
          {' '}
          {rvContact(fieldCd.FirstName, ' ') + rvContact(fieldCd.LastName)}{' '}
        </p>
        <div className='contcts'>
          <p className={'center'}>email:{rvContact(fieldCd.Email)}</p>
          <p className={'center'}>contact:{rvContact(fieldCd.Phone)} </p>
        </div>
        <div className={'divider'}></div>
        <p className={'center address'}>
          {rvContact(fieldCd.Street, ', ') +
            rvContact(fieldCd.City, ', ') +
            rvContact(fieldCd.State, ', ') +
            rvContact(fieldCd.Country, ', ') +
            rvContact(fieldCd.ZipCode, ', ')}
        </p>
        <p className='about'>{rvContact(fieldCd.ProfSummary)}</p>
      </div>
      <div className={'divider'}></div>
      <div className={'profSummSection text-upper'}>
        <p className='heading bold'>SKILLS</p>

        <div className='skills'>
          {props?.skillsSection?.map((skill) => {
            return <span className='skill'>{skill} </span>
          })}
        </div>
      </div>
      <div className={'divider'}></div>
      <div className={'profSummSection '}>
        <p className='heading bold text-upper'>PROFESSIONAL SUMMARY</p>

        <div>
          {props?.proffesionSection?.map((prof) => {
            return (
              <div className='professionreview'>
                <div className='jobtitle'>
                  <p>{getprofdata(prof, fieldCd.JobTitle)} || </p>
                  <p> {getprofdata(prof, fieldCd.JobCompany)}</p>
                </div>
                <div className='jobdates'>
                  <p>Start Date:{getprofdata(prof, fieldCd.JobStartDate)}</p>
                  <p>End Date:{getprofdata(prof, fieldCd.JobEndDate)}</p>
                </div>
                <p className='jobdesc'>
                  {getprofdata(prof, fieldCd.JobDescription)}
                </p>
              </div>
            )
          })}
        </div>
      </div>
      <div className={'divider'}></div>
      <div className={'educationSection text-upper'}>
        <p className='heading bold'>EDUCATIONAL DETAILS</p>
        <div className='schoolhead'>
          <p>{rvEducation(fieldCd.SchoolName)}, </p>
          <p>{rvEducation(fieldCd.City)}</p>
        </div>
        <p className='schooldets'>{rvEducation(fieldCd.Degree)}</p>

        <p className='schooldets'>CGPA:{rvEducation(fieldCd.GraduationCGPA)}</p>
        <div className='grad'>
          <span>Gradutaion by:{rvEducation(fieldCd.GraduationDate)}, </span>
          <span>{rvEducation(fieldCd.GraduationYear)}</span>
        </div>
      </div>
      <div className={'divider'}></div>
      <div className={'educationSection '}>
        <p className='heading bold text-upper'>PROJECTS</p>

        <div>
          {props?.projectSection?.map((proj) => {
            return (
              <div className='professionreview'>
                <span className='projname'>
                  {getprojdata(proj, fieldCd.ProjectName)}
                </span>
                <span className='projdesc'>
                  {getprojdata(proj, fieldCd.ProjectDesc)}
                </span>
                <span className='projlink'>
                  Link: {getprojdata(proj, fieldCd.ProjectLink)}
                </span>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
export default ResumePreview
