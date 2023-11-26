// import { createContext } from "react";

// const AuthContext = createContext();
// AuthContext.displayName ='AuthContext';

// export default AuthContext;

import { createContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocalStorage } from '../hooks/useLocalStorage.js';

// import { authServiceFactory } from '../services/authService';
import * as authService from '../services/authService.js'
import Path from '../path.js';

const AuthContext = createContext();

export const AuthProvider = ({
    children,
}) => {
    const [auth, setAuth] = useLocalStorage('auth', {});
    const navigate = useNavigate();

    // const authService = authServiceFactory(auth.accessToken)

    const loginSubmitHandler = async (values) => {

        const result = await authService.login(values.email, values.password);

        setAuth(result);

        navigate(Path.Home);

    };
    const registerSubmitHandler = async (values) => {
        if (!values.email || !values.username || !values.password || !values["repeat-password"]) {
            alert('All fields are required!');
            return;
        }
        if (values.password !== values["repeat-password"]) {
            alert('Passwords don\'t match!');
            return;
        }


        const result = await authService.register(values.email, values.username, values.password);
        setAuth(result);
        navigate(Path.Home);
    };

    const logoutHandler = () => {
        setAuth({});
    }
    const values = {
        loginSubmitHandler,
        registerSubmitHandler,
        logoutHandler,
        username: auth.username || auth.email,
        email: auth.email,
        userId: auth._id,
        token: auth.accessToken,
        isAuthenticated: !!auth.accessToken,
    };

    return (
        <>
            <AuthContext.Provider value={values}>
                {children}
            </AuthContext.Provider>
        </>
    );
}

AuthContext.displayName = 'AuthContext';

export default AuthContext;