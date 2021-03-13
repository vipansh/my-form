import React, { useState, useEffect, useContext } from 'react'
import { FormBody } from '../componants/Forms/FormBody'
import { FormHeader } from '../componants/Forms/FormHeader'
import { QuestionBox } from '../componants/Forms/QuestionBox'
import { SavePopUp } from '../componants/Forms/SavePopUp'
import { FormContext, FormProvider } from '../Context/FormContext'

export const FormPage = () => {
    const { formData, setFormData } = useContext(FormContext)

    const tamplet = {
        question: "",
        questiontype: "",
        required: "",
        options: [{ "option": null }]
    }
    const [allquestions, setAllquestions] = useState([{
        question: "",
        questiontype: "",
        required: "",
        options: [{ "option": null }]
    }])

    useEffect(() => {
        setFormData(formData => {
            let value = {
                title: formData.title ? formData.title : "",
                discription: formData.discription ? formData.discription : "",
                color: formData.color ? formData.color : "",
                content: [...allquestions]
            }
            return value
        })
    }, [allquestions])


    const [idOfActiveQue, setIdOfActiveQue] = useState("0")




    return (
        <div>
            <FormHeader />
            <div className="bg-gray-400 h-auto min-h-screen py-4">
                <FormBody />
                {allquestions.map((data, i) => {
                    return <QuestionBox key={i} data={data} value={{ allquestions, setAllquestions }} id={i}
                        isThisActive={{ idOfActiveQue, setIdOfActiveQue }} color={formData.color} />
                })}
            </div>
            <button onClick={() => (console.log(formData))}>click me</button>
        </div>
    )
}
