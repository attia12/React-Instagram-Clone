import React, { useState } from 'react'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';

const CommentCard = () => {
    const [isCommentLiked,setisCommentLiked]=useState();
    const handleLikeComment=()=>{
        setisCommentLiked(!isCommentLiked)

    }
  return (
    <div>
      <div className='flex items-center justify-between py-5' >
        <div className='flex items-center'>
            <div>
                <img className='w-9 h-9 rounded-full' src='https://cdn.pixabay.com/photo/2023/12/05/17/45/plant-8432181_640.jpg ' alt=''/>
            </div>
            <div className='ml-3'>
                <p> 
                    <span className='font-semibold'>username</span>
                    <span className='ml-2'>nice animal</span>
                
                </p>
                <div className='flex items-center space-x-3 text-xs opacity-60 pt-2'>
                    <span>1 min ago</span>
                    <span> 23 likes</span>
                </div>
               
            </div>
        </div>
       {isCommentLiked?<AiFillHeart onClick={handleLikeComment} className='text-xs hover:opacity-50 cursor-pointer text-red-600'/>:<AiOutlineHeart className='text-xs hover:opacity-50 cursor-pointer'onClick={handleLikeComment}/>}
      </div>
    </div>
  )
}

export default CommentCard
