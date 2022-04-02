import React, {useState} from 'react';

export const UserContext = React.createContext();

export default function UserProvider (props) {

    const [info, setInfo] = useState('');

    const setInfoHandler = (value) => {
        setInfo(value)
    }

    const defValues = {
        userinfo:info,
        setuserinfo:setInfoHandler
    }

    return (
        <UserContext.Provider value={defValues}>
            {props.children}
        </UserContext.Provider>
    )
};
