import React from 'react'
import Header from "../header/Header"
function educationPage() {
  return (
    <div className='flex'>
      <Header />
      <div className='min-h-screen flex flex-col justify-around items-center   bg-gray-100 w-full ml-64'>
      <div className='hover:scale-120 flex flex-col items-center bg-gray-400  w-150 rounded-xl p-10 ' >
      <h2>Primary/Elementary School </h2>
      <p> Thampirak School Grade 1-6 English program</p>
      </div>
      
      <div className='hover:scale-120 flex flex-col items-center bg-green-400  w-150 rounded-xl p-10'>
      <h2>Secondary School Junior High School</h2>
      <p>Matthayom watnairong </p>
      <p>(Mini English Program)</p>
      </div>
      <div className='hover:scale-120 flex flex-col items-center bg-blue-400  w-150 rounded-xl p-10'>
      <h2> Secondary School Senior High School </h2>
      <p>Matthayom watnairong SCI-MATH </p>
      <p>(Intensive English Program)</p>
      </div>
      <div className='hover:scale-120 flex flex-col items-center bg-purple-400  w-150 rounded-xl p-10'>
      <h2>Bachelor Degrees</h2>
       <p>Facutly of engineering</p>
       <p>Production department</p>
       <p>Major Robotics engineering </p>
      </div>
      </div>
      </div>
  )
}

export default educationPage
