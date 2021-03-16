import React, { useState } from 'react'
import { SubmittedFormTitle } from './SubmittedFormTitle'
import { SubmittedFormHeader } from './SubmittedFormHeader'
import { SubmittedFormQuestionBox } from './SubmittedFormQuestionBox'

export const FormHome = ({ data }) => {


    //     color: ""
    // content: [{…}]
    // createdBy: "currentUser"
    // discription: ""
    // id: "-MVtxZfKRksQohvXmmgN"
    // title: ""
    // uniqueID: "0t80r7qmo

    const [questions, setquestions] = useState(data.content)

    return (
        <div className="bg-gray-300 min-h-screen font-bold ">
            <SubmittedFormHeader id={data.uniqueID } />

            < div className="form-container mx-auto p-4">
                <SubmittedFormTitle title={data.title} />

                {questions.map((question, i) => {
                    return <SubmittedFormQuestionBox data={question} color={data.color} />
                })}

                <div className="container mx-auto ">
                    <button>Submit</button>
                </div>
            </div>
            <center>This content is neither created nor endorsed by MeForm. Never subbmit your passwoed </center>
        </div>
    )
}


