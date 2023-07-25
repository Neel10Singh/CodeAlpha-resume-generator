import React, { useEffect } from 'react'
import ResumePreview from './resumePreview'
import jsPDF from 'jspdf'
import { useDispatch, useSelector } from 'react-redux'
import html2canvas from 'html2canvas'
import { useHistory } from 'react-router-dom'

function Finalize(props) {
  const history = useHistory()
  let educationSection = props.educationSection
  let contactSection = props.contactSection
  let documentd = props.document
  const doc = useSelector((state) => state.document)
  useEffect(() => {
    if (!doc || !doc.id) {
      history.push('/')
    }
  }, [])
  const saveToDatabase = async () => {}
  const downloadResume = () => {
    const input = document.getElementById('resumePreview')
    console.log(document)
    html2canvas(input)
      .then((canvas) => {
        const imgData = canvas.toDataURL('image/jpg')
        const pdf = new jsPDF('p', 'mm', 'a4')
        var width = pdf.internal.pageSize.getWidth()
        var height = pdf.internal.pageSize.getHeight()
        pdf.addImage(imgData, 'JPEG', 0, 0, width, height)
        // pdf.output('dataurlnewwindow');
        pdf.save('resume.pdf')
      })
      .catch(function (error) {
        console.log(error)
      })
  }
  return (
    <div className='container full finalize-page'>
      <div className='funnel-section '>
        <div className='finalize-preview-card ' id='resumePreview'>
          <ResumePreview
            contactSection={useSelector((state) => state.contact.contactdata)}
            skillsSection={useSelector((state) => state.skills.skilldata)}
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
        <div className='finalize-settings center'>
          <div className=' download-resume resume-options'>
            <p className='no-margin'>Download Resume As PdF</p>
            <a style={{ cursor: 'pointer' }} onClick={downloadResume}>
              download Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Finalize
