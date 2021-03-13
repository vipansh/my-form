import React from 'react'

export const SavePopUp = ({ show, saveForm }) => {

    const { saveWorning, setSaveWorning } = show
    return (

        <div class={"absolute flex flex-col rounded-lg bg-white border   " + (saveWorning ? "show" : "hidden")} style={{ right: " 85px", top: "3px" }}>
            < div class="bg-white opacity-25 rounded-lg  absolute z-10 inset-0" ></div >
            <div class="bg-white rounded-lg md:max-w-md md:mx-auto p-4 fixed inset-x-0 bottom-0 z-50 mb-4 mx-4 md:relative">
                <div class="md:flex items-center">
                    <div class="rounded-full border border-gray-300 flex items-center justify-center w-16 h-16 flex-shrink-0 mx-auto">
                        <svg className="w-8 h-8 text-green-800 rounded-lg" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016zM12 9v2m0 4h.01" />
                        </svg>
                    </div>
                    <div class="mt-4 md:mt-0 md:ml-6 text-center md:text-left">
                        <p class="font-bold" >Save Form</p>
                        <p class="text-sm text-gray-700 mt-1">Once Saved you won't be abel to edit it.
                    </p>
                    </div>
                </div>
                <div class="text-center md:text-right mt-4 md:flex md:justify-end">
                    <button class="block w-full md:inline-block md:w-auto px-4 py-3 md:py-2 bg-red-200 text-green-700 rounded-lg font-semibold text-sm md:ml-2 md:order-2" onClick={saveForm}>Save </button>
                    <button class="block w-full md:inline-block md:w-auto px-4 py-3 md:py-2 bg-red-500 text-black-700 rounded-lg font-semibold text-sm md:ml-2 md:order-2">See Preview</button>
                    <button class="block w-full md:inline-block md:w-auto px-4 py-3 md:py-2 bg-gray-500 rounded-lg font-semibold text-sm mt-4
                    md:mt-0 md:order-1" onClick={() => { setSaveWorning(false) }}>Cancel</button>
                </div>
            </div>
        </div >
    )


}
