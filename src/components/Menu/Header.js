import React from 'react';
import {useNavigate} from 'react-router-dom';
// Icons 
import { IoIosArrowBack , IoIosArrowForward ,IoLogoInstagram } from "react-icons/io";
import {GoKebabHorizontal} from "react-icons/go";

const Header = () => {

    const navigate = useNavigate();
    const arrowHandeler = (arrow) => {
        switch (arrow){
            case "Back":
                return navigate(-1);
            case "Forward":
                return navigate(+1);
        }
    }
    return (
        <>
        <div className="w-full h-4 bg-gray-50 py-5 px-5 lg:rounded-t-xl border-b-2 border-rose-300 flex justify-between items-center">
            <div className="flex justify-center space-x-1">
                <div className="w-3 h-3 bg-rose-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-300 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <div className="flex justify-center space-x-2">
                <div className="rounded-md p-1  hover:bg-gray-100 cursor-pointer transition-all ease-linear delay-100" onClick={() => arrowHandeler("Back")}><IoIosArrowBack className="text-xl text-gray-500 cursor-pointer" /></div>
                <div className="rounded-md p-1 hover:bg-gray-100 cursor-pointer transition-all ease-linear delay-100" onClick={() => arrowHandeler("Forward")}><IoIosArrowForward className="text-xl text-gray-500 cursor-pointer" /></div>
            </div>
        </div>
         {/* instagram icon */}
         <div className="w-full py-5 px-5 flex justify-between items-center">
            <div className="flex flex-row items-center space-x-1">
                <IoLogoInstagram className="text-2xl text-gray-700" />
                <h4 class="font-instagram text-2xl">Instagram</h4>
            </div>
            <div className="rounded-md p-1 hover:bg-gray-100 cursor-pointer transition-all ease-linear delay-100">
                <GoKebabHorizontal className="text-xl text-gray-700" />
            </div>
        </div>
        </>
        
    );
}

export default Header;
