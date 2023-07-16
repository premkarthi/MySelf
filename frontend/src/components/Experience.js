import React, { useEffect, useRef, useState } from 'react';
import canon from '../img/canon.png';
import Avon from '../img/avon.png';
import Bareminerals from '../img/bareminrals.png';
import Boots from '../img/boots.png';
import Samsung from '../img/samsung.png';
import uspa from '../img/uspa.png';
import wickes from '../img/wickes.png';
import tp from '../img/tp.png';
import Slider from "react-slick";

function Experience() {

    const [nav1, setNav1] = useState(null);
    const [nav2, setNav2] = useState(null);
    const slider1 = useRef(null);
    const slider2 = useRef(null);



    useEffect(() => {
        setNav1(slider1.current);
        setNav2(slider2.current);
      }, []);

      var settting1 = {
          asNavFor: nav2,
          ref: slider1,
          arrows: false,
          vertical: true,
          autoplay: true,
          slidesToShow:1,
          slidesToScroll:1,
          infinite: true,
          autoplaySpeed:10000,
          useTransform: false,
          focusOnSelect: true,
          
          responsive: [{
            breakpoint: 900,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: false,
                arrows: false,
                vertical: false
            }
          }]
      }

      var settting2 = {
        asNavFor: nav1,
        ref: slider2,
        arrows: false,
        vertical: true,
        autoplay: true,
        slidesToShow:1,
        slidesToScroll:1,
        infinite: true,
        autoplaySpeed:10000,
        useTransform: false,
        focusOnSelect: true,
        responsive: [{
          breakpoint: 900,
          settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: false,
              arrows: false,
              vertical: false
          }
        }]
    }

  return (
    <div className='experienceSection '>
        <div className='container'>
            <h1>Where I've Worked</h1>
            <div className='panelBlock'>
                <div className='leftBlock'>
                    <Slider {...settting1} className="companyList"> 
                        <li>Increasingly Technologies Pvt Ltd </li>
                        <li>10kInfo Data solution </li>
                        <li>Eooglo Software Technology </li>
                    </Slider>
                </div>
                <div className='rightBlock'>
                        <Slider {...settting2} className="wordedList">
                             <li >
                            <div className='userProfile'>UX/UI Developer </div> 
                            <p className='duration'>July 2019 - Present </p>
                            <ul className='points'>
                                <li>Knowledge of MariaDB & REST-full web services (HTTP requests, JSON) and Design Documentation
</li>
                                <li>Writing cross-browser compliant HTML, CSS & JavaScript.</li>
                                <li>Understanding of AJAX and JavaScript Dom manipulation Techniques
                                </li>
                                <li>Tested front-end code in multiple browsers to ensure cross-browser compatability.
                                </li>
                                <li>
                                        Web page development from design to test and up to production deployment and github.
                                </li>
                                <li>
                                Worked within a team environment to conceptualize project goals.</li>
                                <li>
                                Worked with JIRA tool to solve and report the bugs and issues.</li> 
                                <li>
                                Working in cross selling platform, the smart are in the use UX the features and the ease of use. Brands
        like Samsung, Travis Perkins, Canon, US Polo, Avon. Motorola, Boots, Bareminerals etc.... 
                                </li>

                            </ul>
                            <div className='workedBrands'>
                                <ul>
                                    <li><img src={Samsung} alt=""></img></li>
                                    <li><img src={canon} alt=""></img></li>
                                    <li><img src={Avon} alt=""></img></li>
                                    <li><img src={Bareminerals} alt=""></img></li>
                                    <li><img src={Boots} alt=""></img></li>
                                    <li><img src={uspa} alt=""></img></li>
                                    <li><img src={wickes} alt=""></img></li>
                                    <li><img src={tp} alt=""></img></li>

                                </ul>
                            </div>
                            </li>
                            <li>
                                <div className='userProfile'>UI Developer </div> 
                                <p className='duration'>Jan 2019 - July 2019 </p>
                                <ul className='points'>
                                    <li>Developing and maintaining the front-end functionality of websites.</li>
                                    <li>Building sites using React & Angular 2+ Framework with responsive and browser
compatibility.
                                    </li>
                                    <li>User research and Analysis.
                                    </li>
                                    <li>
                                    Creating Email-templates & Email-alertsDesign and deliver wireframes,
user stories, user journeys and mockups optimised for a wide.
                                    </li>
                                    <li>
                                    Took a part in the understanding and design phases of multiple projects,
Including user </li>
                                    <li>
                                    competitive research, visual design and various other communication
assets.</li> 
                                    <li>
                                    Develop user-centered design process utilizing expertise in information /
interaction design, visualdesign, usability, and current web technologies. 
                                    </li>

                                </ul>
                            </li>
                            <li>
                                <div className='userProfile'>Software Developer </div> 
                                <p className='duration'>Dec 2016 - Dec 2018 </p>
                                <ul className='points'>
                                    <li>Participating in discussions with clients to clarify what they want.</li>
                                    <li>Developing websites that have a consistent feel and look throughout all
web properties.
                                    </li>
                                    <li>
                                    Managed and maintained development of PHP backend for dynamic
database driven website.
                                    </li>
                                    <li>
                                    Worked within a team environment to conceptualize project goals.</li>
                                    <li>
                                    Simultaneously managing several databases and
Implementing the project Design, Development and Deployment.</li> 
    <li>Working as a part of the Urban home care & PDMSCAN team, developing and building RestAPI. And responsible for creating an internal dashboard tool.</li>
    <li>Development of REST APIs in Python and MariaDB, providing backend capabilities to interface with
Frontend and other APIs</li>
                                </ul>
                            </li>
                        </Slider>
                </div>
            </div>
        </div>
       
    </div>

  )
}

export default Experience