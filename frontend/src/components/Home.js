import React from 'react';
import profile from '../img/prem.jpg';
import resume from  '../img/premnath-resume.pdf'

import './styles.scss'

function Home(props) {

  return (
    <div className='homeSection'>
      <div className='container'>
        <div className='topNameSection'>
          <label>Hey my name is </label>
          <h1><span>{props.name}</span></h1>
        </div>
        <div className='imgSection'>
          <img src={profile} alt='profile' />
        </div>
        <div className='contentSection'>
            <h1>I build things for <span>the web</span></h1>
            <p>I'm a {props.profile} Over 5 year's software development experience building software in product companies, professional
Services. Proﬁcient coder in multiple languages and environments including 2+ yrs in Python, Django,AWS, Docker, CI/CD tools CI tools (Jenkins) REST API S3, Flask, MySQL and 5 years on Javascript, React, JQuery, HTML, CSS, SCSS, Material, Bootstrap. Third-Party tools [e.g. Jira, GitHub, BitBucket etc.]</p>
            <div className='buttons'>
              <a href='tel:8668179384'>Contact me</a>
              <a href={resume} rel="noreferrer" target="_blank"> Download CV</a>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Home