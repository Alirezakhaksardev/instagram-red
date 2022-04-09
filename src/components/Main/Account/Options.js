import React  from 'react';
const Options = () => {
    
    return (
        <div className="w-full flex justify-center mt-5 space-x-5">
            <button type="button" className="px-5 py-2 bg-gray-100 rounded-2xl text-bold">Edit profile</button>
            <button type="button" className="px-5 py-2 bg-gray-100 rounded-2xl text-bold">Statistics</button>
            <button type="button" className="px-5 py-2 bg-indigo-400 rounded-2xl text-bold text-gray-50">Contact</button>
        </div>

    );
}

export default Options;
