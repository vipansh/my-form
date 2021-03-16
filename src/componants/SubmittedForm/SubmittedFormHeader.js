import React from 'react'
import { Link } from 'react-router-dom'

export const SubmittedFormHeader = ({ id }) => {
    return (
        <div class="border-b shadow-lg " >

            <header class=" md:flex md:items-center md:justify-between p-4 pb-0  md:pb-4">
                <div class=" md:flex md:items-center">
                    <Link to="/" className="mx-4 my-auto text-gray-800"><svg class="text-gray-800 h-4 w-4 inline" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                    </svg></Link>
                   "Untitled Form"
                </div>
                <nav className="w-auto text-gray-700">
                    <span className="mx-2 p-2 rounded-full relative hover:bg-gray-300 "><svg className=" h-6 inline " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                    </svg>

                    </span >


                    <span className="mx-2 p-2  rounded-full hover:bg-gray-300">

                        <svg className="h-6 inline  hover:bg-gray-200 rounded-full" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg> </span>







                    <span className="mx-4">
                        <Link to={`/form/b/fill/${id}`} class="inline-flex  text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg" >Share</Link></span>




                    <span>
                        <img alt="Placeholder" class="inline mx-4 rounded-full" src="https://picsum.photos/32/32/?random" />

                    </span>




                </nav>



            </header >


            <div className="flex justify-center ">
                <div className="mx-4 p-4 py-2 text-blue-500 font-semibold border-blue-600 border-b-4 cursor-pointer ">Questions</div>
                <div className="mx-4 p-4 py-2  cursor-pointer ">Responses</div>
            </div>
        </div >






    )
}
