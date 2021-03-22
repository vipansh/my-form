import React from 'react'


export const SaveError = ({ msg, show }) => {

    return (
        <div className={`fixed z-50 w-full  transition-slow ease-in ` + (show ? "error-msg" : "hide-error-msg")}>

            <div className="flex w-3/4 justify-center items-center m-1  py-1 px-2 bg-red-100 rounded-md text-red-700  border border-red-300 font-bold ">
                <div slot="avatar">
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-alert-octagon w-5 h-5 mx-2">
                        <polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon>
                        <line x1="12" y1="8" x2="12" y2="12"></line>
                        <line x1="12" y1="16" x2="12.01" y2="16"></line>
                    </svg>
                </div>
                <div className="text-xl font-normal  max-w-full flex-initial">
                    {msg}</div>

            </div>
        </div>

    )
}

