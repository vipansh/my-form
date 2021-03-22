import React from 'react'
import { OperationBoxForQuestion } from './OperationBoxForQuestion'

export const OptionBox = ({ removeOption, data, index, handelOptionhange, length }) => {
    return (
        <div class="p-2 flex w-full md:justify-between">
            <label class="custom-label p-2 flex w-full">
                <input type="checkbox" class="hidden" defaultChecked={false}
                />


                <div className=" w-4 h-4  md:w-6 md:h-6 border inline-block align-center mx-2 md:mx-4 my-auto rounded-lg ">
                </div>

                <input type="text" class="inline  outline-none border border-gray-400 rounded py-1 px-2 w-full md:w-2/3 bg-white text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:shadow-outline" value={data} placeholder="Options" onChange={(e) => { handelOptionhange(e, index) }} />
            </label>


            {length <= 1 ? null : <div className="  align-center mx-4 my-auto rounded-full p-2 md:p-4 hover:bg-gray-200 hover:text-red-600 "
                onClick={() => { removeOption(index) }}>

                <svg className="md:w-8 w-4 text-gray-700 cursor-pointer hover:text-red-600 " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </div>}
        </div>
    )
}
