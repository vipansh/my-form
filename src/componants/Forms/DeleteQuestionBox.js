import React, { useState, useEffect } from 'react'

export const DeleteQuestionBox = ({ value, id, data }) => {

    const { allquestions, setAllquestions } = value

    const [required, setRequired] = useState(false)
    const [deleteMsg, setdeleteMsg] = useState("Delete")
    useEffect(() => {
        const updatedData = allquestions.map((data, i) => id === i ?
            Object.assign(data, { required: required }) : data)
        setAllquestions(updatedData)
    }, [required])

    function removeOne() {
        if (allquestions.length !== 1) {
            let values = [...allquestions]
            values.splice(id, 1)
            setAllquestions(values)
        }
        else {
            setdeleteMsg("Form Can't be empty")
            setInterval(() => { setdeleteMsg("Delete") }, 3000)
        }
    }

    function dublicateOne() {
        const tamplet = {
            question: data.question,
            questiontype: data.questiontype,
            required: data.required,
            options: [...data.options]
        }
        let values = [...allquestions, tamplet]

        setAllquestions(allquestions => {
            return [...allquestions, tamplet]
        })
        // setIdOfActiveQue(allquestions.length)
    }


    return (
        <div className="flex justify-end">
            <div class="flex items-center cursor-pointer rounded-md hover:text-gray-900" onClick={() => { dublicateOne() }}>
                <span><svg class=" text-gray-700 hover:text-gray-900 h-8 inline" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
                </svg>Dublicate</span>


            </div>
            <div class="flex items-center cursor-pointer rounded-md m-4" onClick={() => { removeOne() }}>  <span class=" text-red-300 hover:text-red-800  text-left  px-4 py-1"  > <svg className="h-8 inline" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>{deleteMsg}</span></div>


            <div class="m-4 flex items-center cursor-pointer rounded-md">
                <label

                    class="flex items-center cursor-pointer"
                >
                    <div class="relative">
                        <input id="toogleA" type="checkbox" class="hidden" checked={required} onChange={() => { setRequired(!required) }} />
                        <div
                            class="toggle__line w-10 h-4 bg-gray-400 rounded-full shadow-inner"
                        ></div>
                        <div
                            class="toggle__dot absolute w-6 h-6 bg-white rounded-full shadow inset-y-0 left-0"
                        ></div>
                    </div>
                    <div
                        class="ml-3 text-gray-700 font-medium"
                    >
                        <span className={!required ? "text-gray-700" : "text-green-700"}>Required</span>
                    </div>
                </label>

            </div>
        </div>
    )
}
