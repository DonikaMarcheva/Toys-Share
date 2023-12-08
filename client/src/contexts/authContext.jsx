import { createContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocalStorage } from '../hooks/useLocalStorage.js';

import * as authService from '../services/authService.js'
import Path from '../path.js';

const AuthContext = createContext();

export const AuthProvider = ({
    children,
}) => {
    const [auth, setAuth] = useLocalStorage('auth', {});
    const navigate = useNavigate();

    const loginSubmitHandler = async (values) => {

        const result = await authService.login(values.email, values.password);

        setAuth(result);

        navigate(Path.Home);

    };
    const registerSubmitHandler = async (values) => {

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