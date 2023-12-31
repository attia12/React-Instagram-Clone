import React, { useState } from 'react'
import { IoReorderThree } from "react-icons/io5";
import {menu} from './SidebarConfig'
import { useNavigate } from 'react-router-dom';
import CreatePostModal from '../Post/CreatePostModal';
import { useDisclosure } from '@chakra-ui/react';
import SearchComponets from '../SearchComponents/SearchComponets';


const Sidebar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
    const [activeTab,setActiveTab]=useState(" ");
    const [isSearchVisible,setisSearchVisible]=useState(false);
    const navigate=useNavigate();

    
    const handleTabClick=(title) =>{
        setActiveTab(title)
        if(title ==="Profile")
        {
            navigate("/username")
            setisSearchVisible(false);
        }
        else if(title ==="Home")
        {
            navigate("/")
            setisSearchVisible(false);

        }
        else if(title ==="Create")
        {
          onOpen();
          setisSearchVisible(false);

        }
        else if(title==="Search")
        {
          setisSearchVisible(true)

        }
        else 
        {setisSearchVisible(false);}
    };
  return (
    <div className='sticky top-0 h-[100vh] flex '>
      <div className={`flex flex-col justify-between h-full ${activeTab ==="Search"?"px-2":""}`}>
        { <div>
            { activeTab !=="Search" && <div className='pt-10'>
          <img className='w-40' src="https://i.imgur.com/zqpwkLQ.png" alt=''/>  
        </div>}
        <div className='mt-10'>
            {  menu.map((item)=>   <div onClick={()=>handleTabClick(item.title)} className='flex items-center mb-5 cursor-pointer text-lg'>
            {activeTab ===item.title ? item.iactiveIcon:item.icon}
           { activeTab !=="Search" && <p className={`${activeTab ===item.title?"font-bold":"font-semibold"}`}>{item.title}</p>}
            
          </div>)}
         
        </div>
        </div>}
        <div className='flex items-center cursor-pointer pb-10'>
      <IoReorderThree className='text-2xl' />
     {activeTab!=="Search" && <p className='ml-5'>More</p>}

      </div>
       
      </div>
      <CreatePostModal onClose={onClose} isOpen={isOpen}/>
      {isSearchVisible && <SearchComponets/>}
   
    </div>
  )
}

export default Sidebar
