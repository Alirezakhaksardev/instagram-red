import React , {useState,useEffect}  from 'react';

// Context
import UserInfoContext from './Context/UserInfoContext';

//components
import Account from './components/Main/Account';
import Menu from './components/Menu/Menu';
import Header from './components/Main/Header';
import Reels from './components/Main/Reels';
import Discover from './components/Main/Discover';
import Igshop from './components/Main/IG-Shop';

// react router dom
import {Routes,Route} from 'react-router-dom';

//Loading 
// import { css } from "@emotion/react";
import BeatLoader from "react-spinners/BeatLoader";
import Navbarbottom from './components/Menu/Navbarbottom';

const App = () => {

    const [loading , setLoading] = useState(false);

    useEffect( () => {
        setLoading(true);
        setTimeout(() =>{
            setLoading(false);
        },1000)
    }, []);

    const Divload = <div className="flex justify-center items-center h-full transition-all ease-linear delay-100">
        <BeatLoader color="#818cf8" loading={loading} size={15} margin={2} />
        </div>
        ;
    return (
        <main className="bg-gray-50 w-screen h-screen flex items-center justify-center overflow-hidden">
            <UserInfoContext>
                <div className="relative w-screen flex justify-center lg:space-x-5 justify-items-center items-center h-screen bg-gray-100">

                    <div className="absolute top-10 right-44 w-40 h-10 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                    <div className="absolute bottom-20 left-48 w-40 h-10 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
            
                    {/* Main App */}
                    <div className="flex justify-center hidden lg:block w-96 bg-gradient-to-br from-white to-transparent bg-opacity-20 rounded-xl md:h-4/5 shadow-lg">
                        <Menu /> 
                    </div>

                    {/* Main App */}
                    <div className="bg-gray-50 w-full lg:w-2/4 lg:bg-white lg:rounded-xl h-full lg:h-4/5 shadow-lg flex flex-col transition-all ease-linear delay-100 
                            ">
                        {/* Header */}
                        <Header />
                        
                        <Routes >
                            <Route path='/Home' element={loading ? Divload : <Account />} />
                            <Route path='/Reels' element={loading ? Divload : <Reels />} />
                            <Route path='/Discover' element={loading ? Divload : <Discover />} />
                            <Route path='/IG%20Shop' element={loading ? Divload : <Igshop />} />
                        </Routes> 
                        {/* Navbar button just form mobile size (lg:hidden) */}
                        <div className="border-t border-rose-300 fixed bottom-0 w-full lg:hidden bg-gray-50 px-5 py-1 bg-gradient-to-t">
                            <Navbarbottom />
                        </div>             
                    </div>                   
                </div>
            </UserInfoContext>
            
        </main>
    );
}



export default App;