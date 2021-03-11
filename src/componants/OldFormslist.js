import React, { useState } from 'react'

export const OldFormslist = () => {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className=" h-64  border-2  hover:border-blue-400  rounded relative ">
            <div className=" h-48 ">

                asdva
        </div>
            <div className="flex  flex-col justify-center">
                <h2 class="font-semibold mx-4">Untitle Form</h2>

                <div class=" flex   flex-row justify-between">
                    <div>

                        <svg className="text-white mx-2 w-6 h-8 rounded-2xl bg-purple-600 inline" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
             Uploded On:
                </div>

                    <span className="rounded-full cursor-pointer hover:bg-gray-400  px-2 " onClick={() => { setIsOpen(!isOpen) }}><svg className="w-8  inline    text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                    </svg></span>

                    {isOpen ? <div id="usermenu" class="absolute  z-40  w-full " style={{ left: "90px", top: '34px' }}>
                        <div class="bg-white shadow-xl  rounded lg:mr-3 rounded-t-none py-4 my-4 font-semibold">

                            <div class=" my-2 block text-gray-800 hover:text-gray-900  hover:bg-gray-200 ignore-body-click"><snap className="mx-2"></snap><svg className="w-4 inline mx-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                            </svg>Rename</div>
                            <div class="my-2 block text-gray-800 hover:text-gray-900 ignore-body-click hover:bg-gray-200 "><snap className="mx-2"></snap><svg className="w-4 inline mx-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>Remove</div>
                            <div class="my-2 block text-gray-800 hover:text-gray-900 ignore-body-click hover:bg-gray-200 "><snap className="mx-2"></snap><svg className="w-4 inline mx-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>Open in New tab</div>


                        </div>
                    </div> : null}



                </div>
            </div>
        </div>

    )
}
