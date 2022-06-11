import React from 'react'
import Typical from 'react-typical'
import './Profile.css'
export default function Profile() {
    return (
        <div className='profile-container' >
            <div className='profile-parent' >
                <div className='profile-details'>
                    <div className='colz' >
                        <div className='colz-icon'>

                            
                        <a href="https://github.com/Hridoyshom"target='_blank'>
                            <i className='fa fa-github-square' >

                            </i>
                        </a>
                        <a href="https://www.linkedin.com/in/hridoy-shom-339102227/" target='_blank'>
                            <i className='fa fa-linkedin-square' >

                            </i>
                        </a>
                        </div>

                    </div>

                
                <div className='profile-details-name' >
                    <span className='primary-text' >
                        {" "}
                        Hello, I'M <span className='highlighted-text' > Hridoy shom </span>
                    </span>

                </div>
                <div className='profile-details-role' >
                    <span className='primary-text' >
                        {" "}
                        <h1>
                        {" "}
                        <Typical
                        loop={Infinity}
                        steps={[
                            "Enthusiastic Dev ",
                            1000,
                            "Frontend Developer",
                            1000,
                            "MERN stack Developer",
                            1000,
                            "React Developer",
                            1000,
                            
                        ]}
                        ></Typical>
                        </h1>
                        <span className='profile-role-tagline' >
                            Ready tu build application with frontend and backend operations

                        </span>

                    </span>

                </div>
                <div className='profile-options'>
                    <button className='btn primary-btn  ' >
                        {""}
                        Hire Me{" "}
                    </button>
                    <a href="Resume Hridoy Shom.pdf" download='Resume Hridoy Shom.pdf'> <button className='btn highlighted-btn' >Get Resume</button> </a>

                </div>
                </div>
                <div className='profile-picture' >
                    <div className='profile-picture-background' >

                    </div>
                </div>
            </div>


        </div>
    )
}
