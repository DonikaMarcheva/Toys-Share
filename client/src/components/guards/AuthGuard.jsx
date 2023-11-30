import { useContext } from "react";
import AuthContext from "../../contexts/authContext.jsx";
import { Navigate, Outlet } from "react-router-dom";
import Path from "../../path.js";

export default function AuthGurd(props) {
    const { isAuthenticated } = useContext(AuthContext);

    if (!isAuthenticated) {
        return <Navigate to={Path.Login} />;
    }

    return <Outlet />;
}

