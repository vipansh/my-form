
import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";

const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
    const { currentUser } = useAuth();

    return (
        <Route
            {...rest}
            render={props => {
                return true ? <RouteComponent {...props} /> : <Redirect to="/login" />
            }}
        ></Route>
    );
};


export default PrivateRoute