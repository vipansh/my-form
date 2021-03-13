import React, { useState, useEffect } from 'react'
import { SubmittedFormQuestionBox } from '../SubmittedForm/SubmittedFormQuestionBox'
import { SubmittedFormTitle } from '../SubmittedForm/SubmittedFormTitle'

export const SharedForm = ({ id }) => {


    const [todoList, setTodoList] = useState();

    

    const [formSubmittedData, setFormSubmittedData] = React.useState([{
        question: "",
        answer: ""
    }])


    const onSubmit = () => {
        console.log(formSubmittedData)
    }



    return (
        <div>
            <div className="mt-16">

                <SubmittedFormTitle />

                <SubmittedFormQuestionBox />

                <div className="container mx-auto ">
                    <button onClick={onSubmit}>Submit</button>
                </div>
            </div>
            <center>This content is neither created nor endorsed by MeForm. Never subbmit your passwoed </center>
        </div>
    )
}
