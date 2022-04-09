import React ,{useContext} from 'react';
import { IoIosSettings , IoIosArrowDown , IoMdMenu } from 'react-icons/io';

import { UserContext } from '../../Context/UserInfoContext';

const Header = () => {
    const Users = useContext(UserContext)
    return (
        <div className="w-full h-4 bg-gray-50 py-5 px-5 lg:rounded-t-xl border-b-2 border-rose-300 flex justify-between items-center">
            <div className="hover:bg-gray-100 p-1 hover:rounded-md transition-all ease-linear delay-100"><IoIosSettings className="text-xl text-gray-500 cursor-pointer" /></div>
            <div className="text-gray-400 hover:text-gray-500 flex transition-all ease-linear delay-100 items-center space-x-4 font-bold cursor-pointer">{Users.AccountId} <IoIosArrowDown/></div>
            <div className="hover:bg-gray-100 p-1 hover:rounded-md transition-all ease-linear delay-100"><IoMdMenu className="text-xl text-gray-500 cursor-pointer" /></div>
        </div>
    );
}

export default Header;
