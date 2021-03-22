
import React, { useState } from "react"

export const ErrorContext = React.createContext();

export const ErrorProvider = ({ children }) => {

    const [showError, setshowError] = useState(false)
    const [errorMessage, seterrorMessage] = useState("error")
    return (
        <ErrorContext.Provider
            value={{
                iserror: [showError, setshowError], msg: [errorMessage, seterrorMessage]
            }} >
            { children}
        </ErrorContext.Provider >
    );

}