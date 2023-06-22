import { useContext } from "react";

import { Navigate } from "react-router-dom";
import { AuthContext } from "./AuthProviders";


const PrivateRoute = ({children}) => {
    const {user, loading}= useContext(AuthContext)
    console.log(loading)

    if(loading){
        return<progress className="progress w-56"></progress>
    }
    if(user){
        return children
    }
    return <Navigate to="/login" state={{from:location}} replace></Navigate>
        
    
};

export default PrivateRoute;