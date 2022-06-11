import React from 'react'

import Profile from './Profile'
import './Home.css'
import Nav from '../Nav/Nav'
import Project from '../Project'
import Contact from '../ContactMe/Contact'
import Blogs from '../Blogs'



export default function Home() {
  return (
    <div className='home-container'>
         <Nav></Nav>
        <Profile></Profile>
        <Project></Project>
        <Contact></Contact>
        <Blogs></Blogs>
        
        
        

    </div>
  )
}
