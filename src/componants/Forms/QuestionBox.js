import React, { useState, useContext, useEffect } from 'react'
import { FormContext } from '../../Context/FormContext'
import { CheckBoxes } from './CheckBoxes'
import { DeleteQuestionBox } from './DeleteQuestionBox'
import { FormToolBar } from './FormToolBar'
import { MultipleChoice } from './MultipleChoice'
import { NotActiveQuestion } from './NotActiveQuestion'
import { ShortAnswer } from './ShortAnswer'

export const QuestionBox = ({ value, id, data, isThisActive,color }) => {

    const { allquestions, setAllquestions } = value


    const { idOfActiveQue, setIdOfActiveQue } = isThisActive


    const [isactive, setIsactive] = useState()

    useEffect(() => {
        setIsactive(() => {
            return idOfActiveQue == id
        })
    }, [idOfActiveQue])




    const [textQuetionHeight, setTextQuetionHeight] = useState("auto")


    const [isOpen, setIsOpen] = useState(false)



    const [questionType, setQuestionType] = useState("Question Type")

    
    useEffect(() => {
        const updatedData = allquestions.map((data, i) => id === i ?
            Object.assign(data, { questiontype: "CheckBoxes" }) : data)
        setAllquestions(updatedData)
    }, [])

    function handelquestionType(values, e) {
        setIsOpen(!isOpen)
        setQuestionType(values)
        const updatedData = allquestions.map((data, i) => id === i ?
            Object.assign(data, { questiontype: values }) : data)
        setAllquestions(updatedData)
    }

    function handelChange(e, id) {
        const updatedData = allquestions.map((data, i) => id === i ?
            Object.assign(data, { [e.target.name]: e.target.value }) : data)
        setAllquestions(updatedData)
    }


    function autoGrow(e, id) {
        setTextQuetionHeight(e.target.scrollHeight + "px")
        handelChange(e, id)
    }



    if (!isactive) {
        return <NotActiveQuestion data={data} isThisActive={isThisActive} id={id} height={textQuetionHeight} />
    }








    return (
        <div className=" relative container mx-auto border-l-8 rounded-lg   my-8  p-4 shadow-sm bg-white" style={{ borderColor: color }}>
            <FormToolBar value={value} id={id} isThisActive={isThisActive} />
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
                <span className="inline-flex align-center justify-center mx-4 p-2 rounded-full hover:bg-gray-300  "><svg className="w-8 text-gray-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg></span>



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

            <div>

                {questionType === "Short Answer" ? <ShortAnswer value={value} id={id} data={data} /> : questionType === "Multiple Choice" ? <MultipleChoice value={value} id={id} data={data} /> :
                    <CheckBoxes value={value} id={id} data={data} />}

            </div>


            <div>
                <DeleteQuestionBox value={value} id={id} data={data} />
            </div>
        </div >
    )
}




