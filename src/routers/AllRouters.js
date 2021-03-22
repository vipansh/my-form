import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import { AuthProvider } from "../Context/AuthContext";
import { ErrorProvider } from "../Context/ErrorContext";
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
                        <Route path="/form/b/fill/:id" component={SharedFormPage} />
                      
                        <PrivateRoute path="/" exact component={HomePage} />
                        <PrivateRoute path="/form/a/:id" component={SubmittedFormPage} />

                        <ErrorProvider>
                            <PrivateRoute path="/form" component={FormPage} exact />
                        </ErrorProvider>


                    </Switch>
                </FormProvider  >
            </AuthProvider>

        </Router >

    )
}
