"use client"
import Image from "next/image";
import Header from "./header/Header"
import backgroundImg from '../../image/code1.jpg';
import styled from 'styled-components'

const slideInLeft = `
@keyframes slideInLeft {
   from {
   transform:translateX(-2000px);
   opacity: 0;
}
to{
   
    transform:translateX(0px);
    opacity: 1;
}
}
` 
const StyledComponent = styled.h1`
${slideInLeft}
 
 animation-name: slideInLeft;
 animation-duration: 1s;
 animation-timing-function: ease-in-out;
 animation-delay:0s;
 animation-iteration-count: 1;
 animation-direction: normal;
 animation-fill-mode: forwards;
 margin-left: 300px;
 `
 const StyledComponent1 = styled.h1`
${slideInLeft}
 
 animation-name: slideInLeft;
 animation-duration: 1s;
 animation-timing-function: ease-in;
 animation-delay:1s;
 animation-iteration-count: 1;
 animation-direction: normal;
 animation-fill-mode: forwards;
 margin-left: 300px;
 `
 const StyledComponent2 = styled.h1`
${slideInLeft}
 
 animation-name: slideInLeft;
 animation-duration: 1s;
 animation-timing-function: ease-in;
 animation-delay:2s;
 animation-iteration-count: 1;
 animation-direction: normal;
 animation-fill-mode: forwards;
 margin-left: 300px;
 `
 const StyledComponent3 = styled.h1`
 ${slideInLeft}
  
  animation-name: slideInLeft;
  animation-duration: 1s;
  animation-timing-function: ease-in;
  animation-delay:3s;
  animation-iteration-count: 1;
  animation-direction: normal;
  animation-fill-mode: forwards;
  margin-left: 30px;
  `
  const StyledComponent4 = styled.h1`
  ${slideInLeft}
   
   animation-name: slideInLeft;
   animation-duration: 1s;
   animation-timing-function: ease-in;
   animation-delay:4s;
   animation-iteration-count: 1;
   animation-direction: normal;
   animation-fill-mode: forwards;
   margin-left: 30px;
   `
 
 const WordsContainer = styled.div`
 display: flex;
 justify-content: center;
 
`;

export default function Home() {
  return (
    <div className="flex bg-gradient-to-r from-lime-300 to-lime-600">
      <Header />
      <div className= " w-full min-h-screen flex flex-col items-start justify-center ">
      <StyledComponent> HELLO </StyledComponent>
        <StyledComponent1> WELCOME</StyledComponent1>
        <WordsContainer>
          
          <StyledComponent2>TO</StyledComponent2>
          <StyledComponent3>MY</StyledComponent3>
          <StyledComponent4>PORTFOLIO</StyledComponent4>
        </WordsContainer>
        
      </div>
      </div>
      
     
     
  );
}


//flex flex-col gap-[32px] row-start-2 items-center sm:items-start
