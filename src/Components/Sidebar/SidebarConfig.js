import { AiFillHome, AiOutlineHome,AiOutlineSearch,AiOutlineCompass,AiFillCompass, AiOutlineMessage ,AiFillMessage, AiOutlineHeart, AiFillHeart, AiOutlinePlusCircle, AiFillPlusCircle} from "react-icons/ai";
import { RiVideoFill, RiVideoLine } from "react-icons/ri";
import { CgProfile} from "react-icons/cg";
export const menu=[
    {title:"Home",icon : <AiOutlineHome className="text-2xl mr-5"></AiOutlineHome>,iactiveIcon:<AiFillHome className="text-2xl mr-5"></AiFillHome>},
    {title:"Search",icon : <AiOutlineSearch className="text-2xl mr-5"></AiOutlineSearch>,iactiveIcon:<AiOutlineSearch className="text-2xl mr-5"></AiOutlineSearch>},
    {title:"Explore",icon : <AiOutlineCompass className="text-2xl mr-5"></AiOutlineCompass>,iactiveIcon:<AiFillCompass className="text-2xl mr-5"></AiFillCompass>},
    {title:"Reels",icon : <RiVideoLine className="text-2xl mr-5"></RiVideoLine>,iactiveIcon:<RiVideoFill className="text-2xl mr-5"></RiVideoFill>},
    {title:"Message",icon : <AiOutlineMessage className="text-2xl mr-5"></AiOutlineMessage>,iactiveIcon:<AiFillMessage className="text-2xl mr-5"></AiFillMessage>},
    {title:"Notification",icon : <AiOutlineHeart className="text-2xl mr-5" ></AiOutlineHeart>,iactiveIcon:<AiFillHeart className="text-2xl mr-5"></AiFillHeart>},
    {title:"Create",icon : <AiOutlinePlusCircle className="text-2xl mr-5"></AiOutlinePlusCircle>,iactiveIcon:<AiFillPlusCircle className="text-2xl mr-5"></AiFillPlusCircle>},
    {title:"Profile",icon : <CgProfile className="text-2xl mr-5" ></CgProfile>,iactiveIcon:<CgProfile className="text-2xl mr-5"></CgProfile>}
]