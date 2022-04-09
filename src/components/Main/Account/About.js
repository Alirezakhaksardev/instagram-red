import React , {useContext} from 'react';

import { UserContext } from '../../../Context/UserInfoContext';

const About = () => {
    const Users = useContext(UserContext)

    return (
        <div className="w-full flex justify-center pt-2 cursor-default text-gray-400">
            <div className=" text-md lg:text-base text-center lg:w-3/5 md:w-full w-full">{Users.aboutUser}</div>
        </div>
    );
}

export default About;
