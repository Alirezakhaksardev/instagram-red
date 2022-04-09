import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import List from './List';
import Titlelist from './TitleList';

// icons
import {IoHome ,IoPlanetOutline ,IoVideocamOutline , IoStorefrontOutline} from "react-icons/io5";
import {IoMdImages } from "react-icons/io";
import {HiSave} from "react-icons/hi"


const lists = [
    {
        id:1,
        name:"Home",
        icon:<IoHome />,
        Url:"/Home"
    },
    {
        id:3,
        name:"Discover",
        icon:<IoPlanetOutline />,
        Url:"/Discover"
    },
    {
        id:3,
        name:"Reels",
        icon:<IoVideocamOutline />,
        Url:"/Reels"
    },
    {
        id:4,
        name:"IG Shop",
        icon:<IoStorefrontOutline />,
        Url:"/IG Shop"
    }
];
const listsaved = [
    {
        id:1,
        name:"All Seved",
        icon:<HiSave />,
        Url:"/All Seved"
    },
    {
        id:2,
        name:"Nice Image",
        icon:<IoMdImages />,
        Url:"/Nice Image"
    }
] 

const Lists = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Navigate to="/Home" />} />
    
                {/* List menu */}
                <Route path={"/:pages"} element={
                    <>
                        <div className="p-5 overflow-y-auto">
                        <Titlelist title="menu" />
                            <ul className="w-full list-none flex mt-2 flex flex-col space-y-2">
                                
                                {lists.map(items => <List key={items.id} name={items.name} icon={items.icon} Url={items.Url} />)}

                            </ul>
                        </div>
                        <div className="bg-gradient-to-r from-transparent via-gray-200 to-transparent w-full mt-2 h-px"></div>
                         {/* Saved */}
                        
                        <div className="p-5 overflow-y-auto">
                        <Titlelist title="menu" />
                            <ul className="w-full list-none flex mt-2 flex flex-col space-y-2">
                                
                                {listsaved.map(items => <List key={items.id} title="menu" name={items.name} icon={items.icon} Url={items.Url} />)}
                                
                            </ul>
                        </div>

                    </>
                } />


            </Routes>
        </>
    );
}

export default Lists;
