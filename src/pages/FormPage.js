import React, { useState, useEffect, useContext } from 'react'
import { BoxQuestionSingle } from '../componants/FormModule/BoxQuestionSingle'
import { EnterFormTitle } from '../componants/FormModule/EnterFormTitle'
import { FormHeader } from '../componants/FormModule/FormHeader'
import { SaveError } from '../componants/FormModule/SaveErrors'
import { ErrorContext } from '../Context/ErrorContext'
import { FormContext } from '../Context/FormContext'

export const FormPage = () => {
    const { formData, setFormData } = useContext(FormContext)
    const { iserror, msg } = useContext(ErrorContext)

    const [showError, setshowError] = iserror
    const [errorMessage, seterrorMessage] = msg

    console.log(showError, errorMessage)







    const tamplet = {
        question: "",
        questiontype: "Check Box",
        required: false,
        options: ["", ""]
    }

    const [allQuestions, setAllQuestions] = useState(
        [tamplet, tamplet]

    )


    const [idOfActiveQue, setidOfActiveQue] = useState(0)


    useEffect(() => {
        setFormData(formData => {
            return { ...formData, content: allQuestions }
        })
    }, [allQuestions])

    function changeColor(color) {
        const formref = { ...formData }
        formref.color = color
        setFormData(formref)
    }




    return (
        <div>

            <FormHeader id={formData.uniqueID} title={formData.title} changeColor={changeColor} formData={formData} />
            <div className="bg-gray-400 h-auto min-h-screen py-4">
                <SaveError msg={errorMessage} show={showError} />
                <EnterFormTitle />
                {allQuestions.map((data, i) => {
                    return <BoxQuestionSingle key={i} data={data} value={{ allQuestions, setAllQuestions }} id={i}
                        color={formData.color} isThisActive={{ idOfActiveQue, setidOfActiveQue }} />
                })}
            </div>

            <button onClick={() => { console.log(formData) }}>show</button>
        </div>
    )
}
