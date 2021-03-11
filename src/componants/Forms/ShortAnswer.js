import React, { useState, useEffect } from 'react'




export const ShortAnswer = ({ value, id, data }) => {
    const { allquestions, setAllquestions } = value


    const [questionArray, setquestionArray] = useState(data.options)

    useEffect(() => {
        const updatedData = allquestions.map((data, i) => id === i ?
            Object.assign(data, { options: questionArray }) : data)
        setAllquestions(updatedData)

    }, [questionArray])



    function handelChange(e, index) {



        const values = [...questionArray]
        values[index].option = e.target.value
        setquestionArray(values)



    }

    return (
        <div className="mt-6">



            <input type="text" class="inline mx-4  outline-none border border-gray-400 rounded py-1 px-4 w-2/3 bg-white text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:shadow-outline" value={allquestions.option} placeholder="placeholder" onChange={(e) => { handelChange(e, id) }} />




        </div >
    )
}









