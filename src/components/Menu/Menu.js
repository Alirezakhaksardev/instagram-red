import React from 'react';

// components
import Header from './Header';
import Search from './Menu-Com/Search';
import Lists from './Menu-Com/Lists';

const Menu = () => {

    return (
        <>
            {/* Header */}
            
            <Header />

            {/* Input search */}
            
            <Search />
            
            {/* end */}
            
            <div className="bg-gradient-to-r from-transparent via-gray-200 to-transparent w-full mt-10 h-px"></div>
            
            {/* List Menu */}
            
            <Lists />
            
            {/* end */}
        </>
    );
}

export default Menu;
