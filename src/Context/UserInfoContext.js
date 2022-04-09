import React , {createContext,useState} from 'react';

export const UserContext = createContext();

const UserInfoContext = ({children}) => {

    const [users , setUsers] = useState({
        name:"Alireza",
        family: "Khaksar",
        AccountId:"AlirezaKhaskar.officail.com",
        following: "100",
        followers: "1M",
        aboutUser: <p>Lorem ipsum dolor sit amet consectetur 👨‍💻 <br />  adipiscing elit sed do eiusmod tempor <span className="text-indigo-500 cursor-pointer">@_Alirezakhaksar</span>  🤞</p>
    });

    return (
        <UserContext.Provider value={users}>
            {children}
        </UserContext.Provider>
    );
}
export default UserInfoContext;