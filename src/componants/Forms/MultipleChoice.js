import React, { useState, useEffect } from 'react'




export const MultipleChoice = ({ value, id, data }) => {
    const { allquestions, setAllquestions } = value


    const [questionArray, setquestionArray] = useState(data.options)

    useEffect(() => {
        const updatedData = allquestions.map((data, i) => id === i ?
            Object.assign(data, { options: questionArray }) : data)
        setAllquestions(updatedData)

    }, [questionArray])







    function handelAdd() {
        let values = [...questionArray]
        values.push({ option: null })
        setquestionArray(values)
    }

    function handelRemove(a) {

        let values = [...questionArray]
        values.splice(a, 1)
        setquestionArray(values)
    }

    function handelChange(e, index) {



        const values = [...questionArray]
        values[index].option = e.target.value
        setquestionArray(values)



    }

    return (
        <div className="mt-6">




            { questionArray.map((all, index) => <Boxes key={index} index={index} handelRemove={handelRemove} handelChange={handelChange} values={{ questionArray, setquestionArray }} allquestions={all} />)}


            <div onClick={() => { handelAdd() }} className="cursor-pointer mx-8 hover:underline"><svg className="w-8 h-8 inline  " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd" />
            </svg>Add Another</div>
        </div >
    )
}











const Boxes = ({ index, handelRemove, values, handelChange, allquestions }) => {
    const [checkboxValue, setCheckboxValue] = useState(false)

    const { questionArray, setquestionArray } = values


    return (
        <div class="p-2 flex w-full justify-between">
            <label class="custom-label p-2 flex w-full">
                <input type="checkbox" class="hidden" checked={checkboxValue}
                    onChange={() => setCheckboxValue(!checkboxValue)} />


                <div className="w-6 h-6 border inline-block align-center mx-4 my-auto rounded-lg ">{!checkboxValue ? "" : <svg className="bg-blue-700 text-white rounded-lg" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>}
                </div>

                <input type="text" class="inline  outline-none border border-gray-400 rounded py-1 px-2 w-2/3 bg-white text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:shadow-outline" value={allquestions.option} placeholder="placeholder" onChange={(e) => { handelChange(e, index) }} />
            </label>


            {questionArray.length === 1 ? "" : <div className="  align-center mx-4 my-auto rounded-full p-4 hover:bg-gray-200 hover:text-red-600 "
                onClick={() => { handelRemove(index) }}
            >
                <svg className="w-8 text-gray-700 hover:text-red-600 " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </div>}
        </div>

    )
}
