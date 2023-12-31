
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import ProgressBar from './ProgressBar'
const StoryViewerContainer=styled.div`
display:flex;
justify-content:center;
align-items:center;
height:100vh;
background-color:black;
`
const StoryImage=styled.img`
max-height:90vh;
object-fit:contain;
`
const StoryView = ({stories}) => {
    const [curentStoryIndex,setcurentStoryIndex]=useState(0);
    const [activeIndex,setactiveIndex]=useState(0);
    const handleNextStory=()=>{
        if(curentStoryIndex<stories.length-1)
        {
            setcurentStoryIndex(curentStoryIndex+1)
            setactiveIndex(activeIndex+1);
        }
        else if(curentStoryIndex===stories.length-1) {
            setcurentStoryIndex(0);
            setactiveIndex(0);

        }

    }
    useEffect(()=>{
        const interval=setInterval(()=>{handleNextStory()},2000)
        return () => clearInterval(interval);


    },[curentStoryIndex])
  return (
    <div className='relative w-full'>
     <StoryViewerContainer>
        <StoryImage src={stories?.[curentStoryIndex].image}/>
        <div className='absolute top-0 flex w-full'>
            {stories.map((item,index)=><ProgressBar key={index} duration={2000} index={index} activeIndex={activeIndex}/>)}
        </div>
     </StoryViewerContainer>
    </div>
  )
}

export default StoryView
