import React from 'react'
import { FormHome } from '../componants/SubmittedForm/FormHome'

export const SubmittedFormPage = ({ match }) => {
    const id = match.params.id
    console.log(id)

    return (
        <div>
            <FormHome />
        </div>
    )
}
