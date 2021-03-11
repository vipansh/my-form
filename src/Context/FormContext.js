
import React, { useState } from "react"

export const FormContext = React.createContext();

export const FormProvider = ({ children }) => {

    const [formData, setFormData] = useState([{
        title: "",
        discription: "",
        color: "red"

    }])



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