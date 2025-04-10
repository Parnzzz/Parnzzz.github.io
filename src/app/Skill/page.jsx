import React from 'react'
import Header from "../header/Header"
import pythonImg from'../../../image/python.png'; 
import robotImg from'../../../image/ai.png'; 
import cssImg from'../../../image/css-3.png'; 
import htmlImg from'../../../image/html.png'; 
import jsImg from'../../../image/js.png'; 
import apiImg from'../../../image/api.png'; 
import plcImg from'../../../image/plc.png'; 
import cccImg from'../../../image/c-.png'; 
import nextImg from'../../../image/next-js.png'; 


import Image from 'next/image';

function Skillpage() {
  return (
    <div className='flex bg-gray-100 '>
        <Header />
        <main className='min-h-screen grid grid-cols-3 gap-4  grid-rows-3 gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center items-center w-full bg-gray-100 ml-64 '>
        <div className='hover:scale-110 transition-all duration-300   flex flex-col items-center justify-center'>
            <Image src={pythonImg}
            width={250} height={250} alt='python'/>
           <h2>Python</h2>
        </div>
        <div className='hover:scale-110 transition-all duration-300    flex flex-col items-center justify-center '>
            <Image src={htmlImg} width={250} height={250} alt='html'/>
            <h2>HTML</h2>
        </div>
        <div className='hover:scale-110 transition-all duration-300   flex flex-col items-center justify-center  '>
        <Image src={cssImg} width={250} height={250} alt='css'/>
            <h2>CSS</h2>
        </div>
        <div className='hover:scale-110 transition-all duration-300    flex flex-col items-center justify-center '>
        <Image src={jsImg} width={250} height={250} alt='javascript'/>
            <h2>Javascript</h2>
        </div>
        <div className='hover:scale-110 transition-all duration-300    flex flex-col items-center justify-center '>
        <Image src={apiImg} width={250} height={250} alt='api'/>
            <h2>API</h2>
        </div>
        <div className='hover:scale-110 transition-all duration-300    flex flex-col items-center justify-center '>
        <Image src={nextImg} width={250} height={250} alt='next'/>
            <h2>NextJS</h2>
        </div>
        <div className='hover:scale-110 transition-all duration-300    flex flex-col items-center justify-center '>
        <Image src={plcImg} width={250} height={250} alt='plc'/>   
            <h2>PLC</h2>
        </div>
        <div className='hover:scale-110 transition-all duration-300   flex flex-col items-center justify-center '>
        <Image src={robotImg} width={250} height={250} alt='robot'/>  
            <h2>Robotics</h2>
        </div>
        <div className='hover:scale-110 transition-all duration-300   flex flex-col items-center justify-center '>
        <Image src={cccImg} width={250} height={250} alt='c++'/>  
            <h2>C++</h2>
        </div>

        
        </main>
        </div>
  )
}

export default Skillpage
