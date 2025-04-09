import React from 'react'
import Img from'../../../image/kittisak.jpg'; 
import Imgg from'../../../image/web-development.png';
//import skill from '../../Skill/skill';
//import education from '../Education/education';
//import about from '../About/about';
//import contact from '../Contact/contact';
import Link from 'next/link';
import Image from 'next/image';

function Header() {
  return (
    <main className=''>
        <div className ="flex flex-col items-center bg-orange-300 w-64 h-100 ">
        <div className='mt-10 overflow-hidden rounded-full overflow-hidden'>
        <Image src={Img} width={150} height={50} alt="picture"/>
        </div>
        <div className='flex flex-col items-center justify-center'>
        <h2>KITTISAK BUACHAN</h2>
        <h4>Developer</h4>
        <div className='mt-5'>
        <Image src={Imgg} width={100} height={50} alt="logo"/>
        </div>
        </div>
        </div>
        <ul className="flex flex-col justify-around items-center bg-orange-400 w-64 h-220 ">
            <li className='hover:text-white'><Link href="/">INDEX</Link></li>
            <li className='hover:text-white'><Link href="../Skill">SKILL</Link></li>
            <li className='hover:text-white'><Link href="../Education">EDUCATION</Link></li>
            <li className='hover:text-white'><Link href="../Certificate">CERTIFICATE</Link></li>
            <li className='hover:text-white'><Link href="../About">ABOUT</Link></li>
            <li className='hover:text-white'><Link href="../Contact">CONTACT</Link></li>
            
        
        </ul>
    </main>
  )
}

export default Header