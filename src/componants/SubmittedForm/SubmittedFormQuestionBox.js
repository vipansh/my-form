import React from 'react'

export const SubmittedFormQuestionBox = () => {
    const [checkBox, setCheckBox] = React.useState(false)
    return (
        <div className="container mx-auto my-4">
            <div className=" relative container mx-auto border-l-8 rounded-lg   my-8  p-4 shadow-sm bg-white" >
                <div class=" p-4   text-gray-700 leading-tight " >Question </div>

                <label class="custom-label p-2 flex w-full">
                    <input type="checkbox" class="hidden" checked={checkBox}
                        onChange={() => setCheckBox(!checkBox)} />


                    <div className="w-6 h-6 border inline-block align-center mx-4 my-auto rounded-lg ">{!checkBox ? "" : <svg className="bg-blue-700 text-white rounded-lg" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>}
                    </div> options

                </label>


            </div >
        </div>
    )
}
