import React from 'react'
import { FaDribbble } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";




const HearderSocial = () => {
  return (
    <div className='header_socials'>
        <a href='https://linkedin.com' target="_black"><FaDribbble/></a>
        <a href='https://github.com' target="_black"><FaLinkedin/></a>
        <a href='https://dribbble.com' target="_black"><FaGithub/></a>
    </div>
  )
}

export default HearderSocial