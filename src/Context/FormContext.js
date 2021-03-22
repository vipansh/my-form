
import React, { useState } from "react"

export const FormContext = React.createContext();

export const FormProvider = ({ children }) => {

    var ID = function () {
        let id = Math.random().toString(36).substr(2, 9);
        return id
    };


    const [formData, setFormData] = useState({
        title: "",
        discription: "",
        color: "gray",
        content: [],
        createdBy: "currentUser",
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