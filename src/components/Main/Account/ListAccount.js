import React from 'react';

import {IoVideocamOutline ,IoTvOutline } from "react-icons/io5";
import { TiUserOutline ,TiLinkOutline} from "react-icons/ti";
import { HiOutlineSave , HiViewGrid} from "react-icons/hi";
const Listaccount = () => {
    return (
        <div className="w-full my-2">
            <ul className="flex justify-evenly lg:justify-center items-center space-x-0 divide-x divide-slate-50">
                <li><button className="border-none px-2 py-1 hover:bg-gray-50 text-rose-300 rounded-lg hover:shadow-sm transition-all ease-linear delay-100">{<HiViewGrid className="text-2xl" />}</button></li>
                <li><button className="border-none px-2 py-1 hover:bg-gray-50 text-gray-700 rounded-lg hover:shadow-sm transition-all ease-linear delay-100">{<IoVideocamOutline className="text-2xl" />}</button></li>
                <li><button className="border-none px-2 py-1 hover:bg-gray-50 text-gray-700 rounded-lg hover:shadow-sm transition-all ease-linear delay-100">{<IoTvOutline className="text-2xl" />}</button></li>
                <li><button className="border-none px-2 py-1 hover:bg-gray-50 text-gray-700 rounded-lg hover:shadow-sm transition-all ease-linear delay-100">{<TiUserOutline className="text-2xl" />}</button></li>
                <li><button className="border-none px-2 py-1 hover:bg-gray-50 text-gray-700 rounded-lg hover:shadow-sm transition-all ease-linear delay-100">{<TiLinkOutline className="text-2xl" />}</button></li>
                <li><button className="border-none px-2 py-1 hover:bg-gray-50 text-gray-700 rounded-lg hover:shadow-sm transition-all ease-linear delay-100">{<HiOutlineSave className="text-2xl" />}</button></li>
            </ul>
        </div>
    );
}

export default Listaccount;
