import React from 'react'
import Header from "../header/Header"

import { IoGameControllerOutline } from "react-icons/io5";
import { FaSwimmer } from "react-icons/fa";
import { LuPopcorn } from "react-icons/lu";
import { MdOutlineLaptopChromebook } from "react-icons/md";
import { LuGuitar } from "react-icons/lu";
import { MdCardTravel } from "react-icons/md";
import { CiDumbbell } from "react-icons/ci";
import { FaKitchenSet } from "react-icons/fa6";
import { IoMusicalNotes } from "react-icons/io5";
import { CiYoutube } from "react-icons/ci";
function aboutpage() {
  return (
    <div className='flex'>
      <Header />
       <div className='min-h-screen flex bg-gray-100 w-full'>
       <div className='ml-104'>
       <h3>ABOUT ME</h3>
       <h5>  My name is Kittisak buachan . My nickname is TEE .My age is 25 years old . now i'm looking for job developer. 
         My target is work as developer and develop myself for successful workjob in my life . i able to work in bangkok.
        I have learn about coding since i study at university until now i have study online corse about coding. 
         I hope you enjoy with my portfolio if you want to contact me click in CONTACT at sidebar Thank you very much :D </h5>
       <h3>EXPERIENCE</h3>
       <h5>I have experience about coding project when i study</h5>
       <ul>
        <li>1. Analyze data  using python</li>
        <li>2. Image processing detect color and display via viedo camera opencv using python</li>
        <li>3. Project mobile robot control motor and PID in ardunio and create GUI in python control wireless</li>
        <li>4. Create website  recieve data from database and post in website</li>
       </ul>
       <h5>Now i m learning next.JS framework after finish this i will learn another framework and AI</h5>
       <h3>My strengths</h3>
       <table>
        <thead>
          
        </thead>
        <tbody>
          <tr>
        <td>Develop myself</td>
        <td>Friendly</td>
        <td>Communication</td>
        <td>Growth mindset</td>
        </tr>
        <tr>
        <td>Critical thinking</td>
        <td>Positivity</td>
        <td>Teamwork</td>
        <td>Willingness to learn</td>
        </tr>
       </tbody>
       </table>
       <h3>MY HOBBY</h3>
       <table>
        <tbody>
          <tr>
            <td ><IoGameControllerOutline size={90}title="Play game"/></td>
            <td ><FaSwimmer size={90} title="Swimming"/></td>
            <td ><LuPopcorn size={90} title="Watch movie"/></td>
            <td><CiDumbbell size={90} title="Exercise"/></td>
            <td><IoMusicalNotes size={90} title=" Music" /></td>
            </tr>
            <tr>
              <td><MdOutlineLaptopChromebook size={90}title="Watch technology" /></td>
              <td><LuGuitar size={90} title="Play guitar"/></td>
              <td><MdCardTravel size={90} title="Travel"/></td>
              <td><FaKitchenSet size={90} title="Cooking"/></td>
              <td><CiYoutube size={90} title="Youtube"/></td>
            </tr>
        </tbody>
       </table>
       <h3>Other</h3>
       
       <h5>Toeic: 715 </h5>
       
       

       </div>
       </div>
      </div>
  )
}

export default aboutpage
