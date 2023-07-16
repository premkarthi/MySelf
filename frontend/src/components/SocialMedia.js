import React from 'react'
import { FaLinkedin } from 'react-icons/fa';
import { FaBehanceSquare } from 'react-icons/fa';
import { FaGithubSquare } from 'react-icons/fa';

function SocialMedia() {
  return (
    <div className='socialSection'>
        <ul>
            <li><a href='https://www.linkedin.com/in/premnath-j-03b105154/' rel="noreferrer"  target="_blank"><FaLinkedin /></a></li>
            <li><a href='https://www.behance.net/premkarthi9ef9' rel="noreferrer"  target="_blank"> <FaBehanceSquare /></a></li>
            <li><a href='https://github.com/premkarthi' rel="noreferrer"  target="_blank"><FaGithubSquare /></a></li>
        </ul>
    </div>
  )
}

export default SocialMedia