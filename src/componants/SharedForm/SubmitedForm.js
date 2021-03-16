import React from 'react'

export const SubmitedForm = ({ title, setformSubbmited }) => {
    return (
        <div className="h-screen w-full bg-gray-500 pt-12" >
            <div className="form-container mx-auto border-t-8 rounded-lg  p-4   shadow-sm bg-white">

                <div className="font-bold m-4">{title ? title : "No Title"}</div>
                <div className="m-4">Your response has been recorded.</div>

                <div className="cursor-pointer" onClick={() => { setformSubbmited(false) }}>Submit another response</div>
            </div>
        </div >
    )
}
