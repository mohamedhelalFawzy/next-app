'use client'
import { useState } from "react";
import { LuListFilter } from "react-icons/lu";  

 function Nav() {

    const [open, setOpen] = useState() 

    return(
        <div id="h" className="w-full h-[80px] bg-gray-400 flex items-center p-10 ">
            <LuListFilter onClick={()=>{setOpen(!open)}}  className="scale-[3] text-white cursor-pointer"/>

            <div className={` ${open ? 'w-[280px]' : 'w-0'}  w-[280px] h-[100vh] bg-blue-300 shadow-md absolute top-[80px] left-0 transition-[all_.2s]`}>

            </div>
        </div>
    )
}

export default Nav