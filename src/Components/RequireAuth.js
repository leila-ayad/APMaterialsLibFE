import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

const RequireAuth = () => {
    const { auth } = useAuth();
    const location = useLocation();
    
    return (

        auth?.accessToken
        ? <Outlet />
            //sends user to login if they're not logged in
            : <Navigate to="/login" state={ {from: location}} replace />
    );
}

export default RequireAuth;