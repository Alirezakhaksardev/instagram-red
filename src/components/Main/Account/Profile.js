import React ,{useContext} from 'react';
import { IoMdAdd } from 'react-icons/io';

import { UserContext } from '../../../Context/UserInfoContext';

const Profile = () => {
    const Users = useContext(UserContext)
    return (
        <div className="w-full flex justify-center space-x-10 pt-8 cursor-default">
            <div className="text-center text-gray-500 font-bold">
                    <p className="p-1 rounded-lg bg-gradient-to-br from-transparent to-gray-50 shadow-sm my-2">{Users.followers}</p>
                    <p className="font-normal">Followers</p>
            </div>
            <div className="relative w-20 h-24">
                <div className="bg-gray-100 w-20 h-20 rounded-3xl outline outline-offset-2 outline-2 outline-pink-500 cursor-pointer"></div>
                <div className="absolute bottom-1 right-7 text-white  p-1 rounded-md cursor-pointer bg-gradient-to-br from-pink-500 to-orange-500 outline outline-offset-0 outline-7 outline-white">
                    <IoMdAdd />
                </div>
            </div>
            <div className="text-center text-gray-500 cursor-default font-bold">
                <p className="p-1 rounded-lg bg-gradient-to-br from-transparent to-gray-50 shadow-sm my-2">{Users.following}</p>
                <p className="font-normal">Following</p>
            </div> 
        </div>
    );
}

export default Profile;
