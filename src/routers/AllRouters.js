import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import { AuthProvider } from "../Context/AuthContext";
import { FormProvider } from "../Context/FormContext";
import { FormPage } from "../pages/FormPage"
import { HomePage } from "../pages/HomePage"
import { LogIn } from "../pages/LogIn"
import PrivateRoute from "./PrivateRoute";


export const AllRouters = () => {
    return (
        <Router>

            <AuthProvider>
                <FormProvider>
                    <Switch>
                        <Route path="/logIn" component={LogIn} />
                        <Route path="/form" component={FormPage} />
                        <PrivateRoute path="/" exact component={HomePage} />
                    </Switch>
                </FormProvider  >
            </AuthProvider>

        </Router >

    )
}
