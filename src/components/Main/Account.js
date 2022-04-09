import React , {useEffect}  from 'react';

// components
import Profile from './Account/Profile';
import Nameskill from './Account/NameSkill';
import About from './Account/About';
import Options from './Account/Options';
import Highlights from './Account/Highlights';
import Listaccount from './Account/ListAccount';
import Posts from './Account/Posts';
import Usetitle from '../../hooks/useTitle';

    const Account = () => {
        useEffect(()=>{
            Usetitle('Profile');
            var idA = document.getElementById('account');
            setTimeout(()=>{
                idA.classList.remove('opacity-0');
                idA.classList.add('opacity-1');
            },500)
        },[]);

        return (
            <div className="opacity-0 transition-all linear delay-100 overflow-y-auto " id="account">
                {/* Profile */}
                <Profile />
                {/* Id Name and Skill*/}
                <Nameskill />
                {/* about user */}
                <About />
                {/* Buttons */}
                <Options />
                {/* Story Highlights */}
                <Highlights />      
                <div className="bg-gradient-to-r from-transparent via-gray-200 to-transparent w-full h-px"></div>
                {/* List Account  */}
                <Listaccount />
                <div className="bg-gradient-to-r from-transparent via-gray-200 to-transparent w-full h-px"></div>
                {/* posts */}
                <Posts />
            </div>
            
        );
    }

    export default Account;
