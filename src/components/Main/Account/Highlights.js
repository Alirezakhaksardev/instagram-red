import React from 'react';
import { IoMdAdd } from 'react-icons/io';

const Highlights = () => {
    return (
        <div className="w-full flex justify-center space-x-2 cursor-default p-5">
            <div className="relative w-16 h-16 border-2 border-gray-200 rounded-3xl cursor-pointer">
                <div className="absolute text-gray-500 inset-1/4 text-3xl">
                    <IoMdAdd />
                </div>
            </div>
            <div className="relative w-16 h-16 border-2 border-gray-200 rounded-3xl cursor-pointer bg-gray-50">
                <div className="absolute inset-1/4 text-3xl"></div>
            </div>
            <div className="relative w-16 h-16 border-2 border-gray-200 rounded-3xl cursor-pointer bg-gray-50">
                <div className="absolute inset-1/4 text-3xl"></div>
            </div>
            <div className="relative w-16 h-16 border-2 border-gray-200 rounded-3xl cursor-pointer bg-gray-50">
                <div className="absolute inset-1/4 text-3xl"></div>
            </div>                  
        </div> 
    );
}

export default Highlights;
