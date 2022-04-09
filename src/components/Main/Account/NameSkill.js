import React , {useContext} from 'react';

import { UserContext } from '../../../Context/UserInfoContext';

const Nameskill = () => {
    const Users = useContext(UserContext)

    return (
        <div className="w-full flex justify-center pt-2 cursor-default divide-x font-bold text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-800">
            <div className="pr-5 text-md lg:text-lg text-right lg:w-6/12 w-full">{Users.name} {Users.family}</div>
            <div className="pl-5 text-md lg:text-lg lg:w-6/12 w-full">development</div>
        </div>
    );
}

export default Nameskill;
