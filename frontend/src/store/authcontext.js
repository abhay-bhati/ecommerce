import React, {useState} from 'react';

export const AuthContext = React.createContext();

export default function AuthProvider (props) {

    const [isLogin, setIsLogin] = useState(localStorage.getItem('token'));

    const setLoginHandler = (value) => {
        setIsLogin(value)
    }

    const defValues = {
        login:isLogin,
        setlogin:setLoginHandler
    }

    return (
        <AuthContext.Provider value={defValues}>
            {props.children}
        </AuthContext.Provider>
    )
};
