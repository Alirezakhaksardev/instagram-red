import React from 'react';
// IMAGES
import {IoMdOptions} from "react-icons/io";
import {IoSearch} from "react-icons/io5";

const Search = () => {
    return (
        <>
        <div className="w-full mt-5 flex justify-center items-center">
            <div className="relative w-4/5 bg-white rounded-md">
                <div className="absolute top-8 right-10 w-64 h-5 bg-blue-300 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob"></div> 
                <IoSearch className="absolute left-2 inset-y-1/4 text-xl cursor-pointer" />
                <input type="text" placeholder="Search ..." className="bg-white font-bold py-3 px-5 w-full rounded-md border-nono px-10 focus:outline-none shadow-sm"/>
                <IoMdOptions className="absolute right-2 inset-y-1/4  text-xl cursor-pointer" />
            </div>
        </div>
        </>
    );
}

export default Search;
