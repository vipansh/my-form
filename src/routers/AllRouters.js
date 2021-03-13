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
import { SharedFormPage } from "../pages/SharedFormPage";
import { SubmittedFormPage } from "../pages/SubmittedFormPage";
import PrivateRoute from "./PrivateRoute";


export const AllRouters = () => {
    return (
        <Router>

            <AuthProvider>
                <FormProvider>
                    <Switch>
                        <Route path="/logIn" component={LogIn} />
                        <PrivateRoute path="/" exact component={HomePage} />
                        <Route path="/form/a/fill/:id" component={SharedFormPage} />
                        <Route path="/form/a/:id" component={SubmittedFormPage} />

                        <Route path="/form" component={FormPage} exact />


                    </Switch>
                </FormProvider  >
            </AuthProvider>

        </Router >

    )
}
