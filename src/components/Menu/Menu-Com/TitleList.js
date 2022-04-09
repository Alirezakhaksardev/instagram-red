import React from 'react';

const Titlelist = (props) => {
    const {title} = props;
    return (
        <>
            <p className='font-bold text-gray-400'>{title}</p>
        </>
    );
}

export default Titlelist;
