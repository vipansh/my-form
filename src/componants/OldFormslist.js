import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export const OldFormslist = ({ data }) => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <Link to={`/form/a/${data.uniqueID}`} className="block h-42 w-42   border-2 border-gray-700  sm:border-gray-400 hover:border-blue-400 hover:text-blue-700  hover:font-semibold  rounded">
            <div className="  flex flex-col justify-evenly ">
                <div className=" m-2  overflow-hidden w-auto">

                    <img src={process.env.PUBLIC_URL + '/ques.jpg'} alt="a" className=" rounded-lg" />

                </div>
                <div className="px p-2  ">
                    <svg className="text-white  w-4 h-4 rounded-2xl bg-purple-600 inline" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>  <span className="font-semibold  inline">{data.title ? data.title : "Untitle Form"}</span>
                </div>
            </div>
        </Link >

    )
}
