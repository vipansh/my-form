import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export const OldFormslist = ({ data }) => {
    console.log(data)
    const [isOpen, setIsOpen] = useState(false)

    return (
        <Link to={`/form/a/${data.uniqueID}`}>
            <div className=" h-64  border-2  hover:border-blue-400  rounded relative ">
                <div className=" h-48 ">

                    <img src={process.env.PUBLIC_URL + '/ques.jpg'} alt="a" class="w-full h-auto rounded-lg" />

                </div>
                <div className="flex  flex-row justify-start">
                    <svg className="text-white mx-2 w-6 h-8 rounded-2xl bg-purple-600 inline" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>  <span class="font-semibold mx-4 inline">{data.title ? data.title : "Untitle Form"}</span>









                </div>
            </div>
        </Link >

    )
}
