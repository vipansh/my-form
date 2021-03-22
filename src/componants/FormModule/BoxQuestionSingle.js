import React, { useState, useEffect } from 'react'
import { FormToolBar } from './FormToolBar'
import { NotActiveQuestion } from './NotActiveQuestion'
import { OperationBoxForQuestion } from './OperationBoxForQuestion'
import { OptionBox } from './OptionBox'



export const BoxQuestionSingle = ({ data, value, id, color, isThisActive }) => {
    const { allQuestions, setAllQuestions } = value

    const { idOfActiveQue, setidOfActiveQue } = isThisActive


    const [isactive, setIsactive] = useState()

    useEffect(() => {
        setIsactive(() => {
            return idOfActiveQue == id
        })
        console.log(idOfActiveQue == id)
    }, [idOfActiveQue])

    const [textQuetionHeight, setTextQuetionHeight] = useState("auto")
    const [isOpen, setIsOpen] = useState(false)
    const [questionType, setQuestionType] = useState("Question Type")
    const [questionData, setquestionData] = useState(data)



    function handelquestionType(values, e) {
        setIsOpen(!isOpen)
        setQuestionType("Not availabe for now")
        setTimeout(() => {
            setQuestionType("CheckBoxes")

        }, [2500])
    }

    function handelQuestionChange(e, id) {


        let val = [...allQuestions]

        val = val.map((x, i) => (i === id ? { ...x, [e.target.name]: e.target.value } : { ...x }))

        console.log(data, id)
        setAllQuestions(val)
    }






    function autoGrow(e, id) {
        setTextQuetionHeight(e.target.scrollHeight + "px")
        handelQuestionChange(e, id)
    }

    function addOption() {
        let val = [...allQuestions]
        val = val.map((x, i) => (i === id ? { ...x, options: [...x.options, ""] } : { ...x }))
        setAllQuestions(val)
        
    }
    function removeOption(index) {

        let val = [...allQuestions]
        let RemovedOption = val[id].options
        RemovedOption.splice(index, 1)
        val = val.map((x, i) => (i === index ? { ...x, options: [...RemovedOption] } : { ...x }))
        setAllQuestions(val)


    }


    function handelOptionhange(e, index) {
        let val = [...allQuestions]
        let option = val[id].options
        let updatedOption = option.map((x, i) => (i === index ? e.target.value : x))

        val = val.map((x, i) => (i === id ? { ...x, options: updatedOption } : { ...x }))

        setAllQuestions(val)

        console.log(option)

    }


    if (!isactive) {
        return <NotActiveQuestion data={data} id={id} isThisActive={isThisActive} height={textQuetionHeight} />
    }

    return (
        <div>
            <div className="flex flex-row container mx-auto justify-between my-4">
                <div className=" relative w-full mx-auto border-l-8 rounded-lg   md:my-8 p-2  md:p-4 shadow-sm bg-white" style={{ borderColor: color }}>
                    <div className="flex">
                        <textarea
                            rows="1"
                            cols="1"
                            class="bg-gray-100 p-4 inline appearance-none border rounded w-1/2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline  overflow-hidden"

                            name="question"
                            value={data.question}
                            style={{ height: textQuetionHeight, resize: "none" }}
                            onChange={(e) => { autoGrow(e, id) }}
                            type="text"
                            placeholder="Question"
                        />




                        <span className="w-1/3 aline-center m-auto">
                            <div class="z-15 bg-gray-900 relative text-sm block w-full  rounded hover:bg-gray-800 py-1 px-4 text-gray-100" onClick={() => { setIsOpen(!isOpen) }} name="questionType" >
                                {questionType}

                                {isOpen ? <div class="absolute rounded mt-2 py-2 text-gray-900 bg-gray-200   shadow w-full inset-x-0 z-10">
                                    <span class="hover:bg-gray-200 z-15 text-left block px-4 py-1" values="Checkbox" onClick={(e) => { handelquestionType("Checkbox", e) }} ><svg className="h-8 inline" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg> CheckBoxes</span>
                                    <span class="hover:bg-gray-200 z-10 text-left block px-4 py-1" values="Multiple Choice" onClick={(e) => { handelquestionType("Multiple Choice", e) }} ><svg className="h-8 inline" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                                    </svg>Multiple Choice</span>
                                    <span class="hover:bg-gray-200 z-10 text-left block px-4 py-1" values="Short Answer" onClick={(e) => { handelquestionType("Short Answer", e) }} ><svg className="h-8 inline" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                                    </svg>Short Answer</span>

                                </div> : null}
                            </div>

                        </span>
                    </div>
                    {data.options.map((x, i) => {
                        return <OptionBox removeOption={removeOption} data={x} index={i} key={i} handelOptionhange={handelOptionhange} length={data.options.length} />
                    })}
                    <button onClick={() => { addOption() }} className="cursor-pointer mx-8 hover:underline focus:outline-none"><svg className="w-8 h-8 inline  " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd" />
                    </svg>Add Another</button>
                    <div><OperationBoxForQuestion value={value} id={id} data={data} /></div>
                </div>

                <FormToolBar value={value} isThisActive={isThisActive} />
            </div>
        </div>
    )
}
