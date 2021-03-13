import React from 'react'
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";
export const FreeTamplate = () => {
    return (
        <div>
            <div class="p-4 flex items-center justify-center bg-gray-100 ">
                <div class="w-full max-w-screen-md mx-auto">
                    <fieldset class="space-y-6">
                        <div class="flex items-center justify-between py-4 border-b border-gray-300">
                            <div>Start a new form </div>
                            <div className="flex items-center justify-center"><span className="hover:bg-gray-400 p-2 rounded-md cursor-pointer" >Tamplate Gallery <svg className="w-4 mx-2 inline" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                            </svg> </span>

                                <span className="rounded-full cursor-pointer hover:bg-gray-400  p-2 "><svg className="w-8 mx-2 inline    text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                                </svg></span>
                            </div>
                        </div>
                        <Link to="/form">
                            <div class="grid sm:grid-cols-6 gap-6">
                                <div>
                                    <div class=" h-32 relative flex flex-col p-1 bg-white  rounded-lg shadow-md cursor-pointer 
                            border-2  hover:border-blue-400  ">
                                        <img src={process.env.PUBLIC_URL + '/ques.jpg'} alt="a" class="w-full h-auto rounded-lg" />
                                    </div>
                                    <span class="font-semibold">Blanks</span>
                                </div>
                                <div>
                                    <div class="h-32 relative flex flex-col bg-white p-1 rounded-lg shadow-md cursor-pointer  border-2  hover:border-blue-400">
                                        <img src={process.env.PUBLIC_URL + '/ques.jpg'} alt="a" class="w-full h-auto rounded-lg" />

                                    </div>
                                    <span class="font-semibold"> Contact Information</span>
                                </div><div>

                                    <div class="h-32 relative flex flex-col bg-white p-1 rounded-lg shadow-md cursor-pointer  border-2  hover:border-blue-400">
                                        <img src={process.env.PUBLIC_URL + '/ques.jpg'} alt="a" class="w-full h-auto rounded-lg" />

                                    </div>
                                    <span class="font-semibold"> Rsvp</span>

                                </div><div>

                                    <div class="h-32 relative flex flex-col bg-white p-1 rounded-lg shadow-md cursor-pointer  border-2  hover:border-blue-400">
                                        <img src={process.env.PUBLIC_URL + '/ques.jpg'} alt="a" class="w-full h-auto rounded-lg" />

                                    </div>
                                    <span class="font-semibold">   Party Invite</span>

                                </div><div>

                                    <div class="h-32 relative flex flex-col bg-white p-1 rounded-lg shadow-md cursor-pointer  border-2  hover:border-blue-400">
                                        <img src={process.env.PUBLIC_URL + '/ques.jpg'} alt="a" class="w-full h-auto rounded-lg" />

                                    </div>
                                    <span class="font-semibold">  T-shirt Sign up</span>

                                </div><div>

                                    <div class="h-32 relative flex flex-col bg-white p-1 rounded-lg shadow-md cursor-pointer  border-2  hover:border-blue-400">
                                        <img src={process.env.PUBLIC_URL + '/ques.jpg'} alt="a" class="w-full h-auto rounded-lg" />

                                    </div>
                                    <span class="font-semibold">Event Registration</span>

                                </div>
                            </div>
                        </Link >
                    </fieldset>
                </div>
            </div>
        </div>
    )
}
