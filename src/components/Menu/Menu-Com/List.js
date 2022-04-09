import React from 'react';

import {Link, useParams} from 'react-router-dom';



const List = (props) => {
    const {name , icon , Url} = props;
    const params = useParams();
    const run = params.pages;
    return (
        <>
            {name === run ? 
                <Link to={Url} className="w-full flex items-center space-x-3 transition-all ease-linear delay-100 text-lg bg-indigo-400 p-2 px-5 border-2 border-transparent rounded-xl text-gray-100">
                    {icon}
                    <li >{name}</li>
                </Link> 
                :
                <Link to={Url} className="w-full flex items-center space-x-3 text-lg transition-all ease-linear delay-100 hover:border-indigo-400 border-2 border-transparent p-2 px-5 rounded-xl">
                    {icon}
                    <li>{name}</li>
                </Link>
            }
        </>
    );
}

export default List;
