import React from 'react'
import { SubmittedFormTitle } from './SubmittedFormTitle'
import { SubmittedFormHeader } from './SubmittedFormHeader'
import { SubmittedFormQuestionBox } from './SubmittedFormQuestionBox'

export const FormHome = () => {

    return (
        <div>
            <SubmittedFormHeader />

            <div>
                <SubmittedFormTitle />

                <SubmittedFormQuestionBox />

                <div className="container mx-auto ">
                    <button>Submit</button>
                </div>
            </div>
            <center>This content is neither created nor endorsed by MeForm. Never subbmit your passwoed </center>
        </div>
    )
}
