
import React, { useState } from "react"
import { useAuth } from "./AuthContext";

export const FormContext = React.createContext();

export const FormProvider = ({ children }) => {
    const { currentUser } = useAuth()

    var ID = function () {
        let id = Math.random().toString(36).substr(2, 9);
        return id
    };


    const [formData, setFormData] = useState({
        title: "",
        discription: "",
        color: "gray",
        content: [],
        createdBy: currentUser ? currentUser.uid : "currentuser",
        uniqueID: ID(),
        responceList: []
    })



    return (
        <FormContext.Provider
            value={{
                formData, setFormData
            }}
        >
            {children}
        </FormContext.Provider>
    );

}