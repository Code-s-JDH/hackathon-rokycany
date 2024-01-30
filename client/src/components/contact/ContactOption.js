import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './contactOption.css'

const ContactOption = ({ contactOptionIcon, contactOptionDesc, contactOptionName }) => {
  return (
    <div>
      <FontAwesomeIcon icon={contactOptionIcon}/>
      <p className='fontHeader2'>{contactOptionName}</p>
      <p className='fontParagraph'>{contactOptionDesc}</p>
    </div>
  )
}

export default ContactOption