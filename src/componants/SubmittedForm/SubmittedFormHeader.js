import React from 'react'
import { Link } from 'react-router-dom'

export const SubmittedFormHeader = ({ id, value }) => {
    const { idOpen, setIdOpen } = value
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








                    <span className="mx-4">
                        <Link to={`/form/b/fill/${id}`} class="inline-flex  text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg" >Share</Link></span>




                    <span>
                        <img alt="Placeholder" class="inline mx-4 rounded-full" src="https://picsum.photos/32/32/?random" />

                    </span>




                </nav>



            </header >


            <div className="flex justify-center ">
                <div onClick={() => { setIdOpen(1) }} className={"mx-4 p-4 py-2  cursor-pointer" +
                    (idOpen === 1 ? " font-semibold border-blue-600 border-b-4 text-blue-600" : "")} >  Questions</div>

                <div onClick={() => { setIdOpen(2) }} className={"mx-4 p-4 py-2  cursor-pointer" +
                    (idOpen === 2 ? " font-semibold border-blue-600 border-b-4 text-blue-600" : "")}>  Responses</div>
            </div>
        </div >






    )
}
