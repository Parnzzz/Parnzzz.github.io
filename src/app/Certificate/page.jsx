import React from 'react'
import Header from "../header/Header"
import Link from "next/image"
import htmlImg from'../../../image/htmlcer-1.png';
import cssImg from'../../../image/csscer-1.png'; 
import jsImg from'../../../image/jscer-1.png';
import apiImg from'../../../image/apicer-1.png';  


import Image from 'next/image';

function cerpage() {
  return (
    <div className='flex bg-gray-100'>
        <Header />
       <div className='grid grid-cols-2 grid-rows-2  sm:grid-cols-1 md:grid-cols-2 justify-center items-center w-full ml-64'>
       <div className='hover:scale-120 transition-all duration-300  flex flex-col items-center mt-10 '>
        <h2>Certificate HTML</h2>
       <Image src={htmlImg} width={600} height={400} alt="htmlcer"/>
       </div>

       <div className='hover:scale-120 transition-all duration-300  flex flex-col items-center mt-10 '>
       
        <h2>Certificate CSS</h2>
       <Image src={cssImg} width={600} height={400} alt="csscer"/>
       </div>
       <div className='hover:scale-120 transition-all duration-300 flex flex-col items-center w-full mt-10'>
        <h2>Certificate Javascrpit</h2>
       <Image src={jsImg} width={600} height={400} alt="jscer"/>
       </div>
       <div className='hover:scale-120 transition-all duration-300 flex flex-col items-center w-full mt-10'>
        <h2>Certificate API</h2>
       <Image src={apiImg} width={600} height={400} alt="apicer"/>
       </div> 
    
    
    
    </div>
        
        
        
        
        
        
        
        
        
        </div>
  )
}

export default cerpage
