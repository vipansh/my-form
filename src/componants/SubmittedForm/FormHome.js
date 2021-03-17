import React, { useState } from 'react'
import { SubmittedFormTitle } from './SubmittedFormTitle'
import { SubmittedFormHeader } from './SubmittedFormHeader'
import { SubmittedFormQuestionBox } from './SubmittedFormQuestionBox'
import { Responses } from './Responses'

export const FormHome = ({ data }) => {


    //     color: ""
    // content: [{…}]
    // createdBy: "currentUser"
    // discription: ""
    // id: "-MVtxZfKRksQohvXmmgN"
    // title: ""
    // uniqueID: "0t80r7qmo

    const [idOpen, setIdOpen] = useState(2)

    const [questions, setquestions] = useState(data.content)

    return (
        <div className="bg-gray-300 min-h-screen font-bold ">
            <SubmittedFormHeader id={data.uniqueID} value={{ idOpen, setIdOpen }} />


            {
                (idOpen == 1) ? < div className="form-container mx-auto p-4">
                    <SubmittedFormTitle title={data.title} />

                    {questions.map((question, i) => {
                        return <SubmittedFormQuestionBox data={question} color={data.color} />
                    })}

                    <div className="container mx-auto ">
                        <button>Submit</button>
                    </div>
                </div>
                    : <Responses data={data} questions={questions} />
            }
            <center>This content is neither created nor endorsed by MeForm. Never subbmit your passwoed </center>
        </div >
    )
}


