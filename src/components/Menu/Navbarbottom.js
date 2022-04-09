import React from 'react';
import { Link } from 'react-router-dom';

// icons
import {IoHome ,IoPlanetOutline ,IoVideocamOutline } from "react-icons/io5";
import {IoMdImages } from "react-icons/io";
import {HiSave} from "react-icons/hi"

const Navbarbottom = () => {
    return (
        <div className="flex justify-around rounded-lg text-gray-800 text-2xl">
            <div className="w-10 h-10 flex-none rounded-lg flex items-center justify-center hover:text-rose-500 transition-all ease-in-out delay-100">
                <Link to="/Nice Image"><IoMdImages /></Link>
            </div>
            <div className="w-10 h-10 flex-none rounded-lg flex items-center justify-center hover:text-rose-500 transition-all ease-in-out delay-100">
                <Link to="/Reels"><IoVideocamOutline /></Link>
            </div>
            
            <div className="w-10 h-10 flex-none rounded-lg flex items-center justify-center bg-indigo-400 text-gray-50 shadow-lg -translate-y-2">
                <Link to="/Home"><IoHome /></Link>
            </div>

            <div className="w-10 h-10 flex-none rounded-lg flex items-center justify-center hover:text-rose-500 transition-all ease-in-out delay-100">
                <Link to="/Discover"><IoPlanetOutline/></Link>
            </div>
            <div className="w-10 h-10 flex-none rounded-lg flex items-center justify-center hover:text-rose-500 transition-all ease-in-out delay-100">
                <Link to="/All Seved"><HiSave /></Link>
            </div>
        </div>
    );
}

export default Navbarbottom;
