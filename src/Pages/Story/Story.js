import React from 'react'
import StoryView from '../../Components/StoryComponents/StoryView'

const Story = () => {
    const story=[
        {
            image:"https://cdn.pixabay.com/photo/2023/10/25/18/32/snow-landscape-8341054_640.jpg"
        },
        {
            image:"https://cdn.pixabay.com/photo/2023/12/12/10/32/christmas-8444992_640.png"
        },
        {
            image:"https://cdn.pixabay.com/photo/2023/12/01/16/00/mushrooms-8423967_640.jpg"
        },
        {
            image:"https://cdn.pixabay.com/photo/2023/12/06/08/56/winter-8433264_640.jpg"
        },
        {
            image:"https://cdn.pixabay.com/photo/2023/11/25/04/45/mountains-8411045_640.jpg"
        },
    ]
  return (
    <div>
      <StoryView stories={story}/>
    </div>
  )
}

export default Story
