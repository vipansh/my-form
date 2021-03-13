import React from 'react'

export const SubmittedFormTitle = () => {
    return (
        <div className="container mx-auto border-t-8 rounded-lg    p-4 shadow-sm bg-white" >
            <div className="p-4">
                <div type="text" name="title" class="relative outline-none rounded py-4 px-3 w-full bg-white hover:shadow text-5xl text-gray-700 placeholder-gray-800 focus:outline-none focus:shadow-outline" >Title</div>
            </div>
            <div className="p-4">
                <div type="text" name="discription" class="relative outline-none rounded py-4 px-3 w-full bg-white hover:shadow text-base text-gray-700 placeholder-gray-800 focus:outline-none focus:shadow-outline" >discription</div>
            </div>
        </div>
    )
}
