import React from 'react'
import { SharedForm } from '../componants/SharedForm/SharedForm'

export const SharedFormPage = ({ match }) => {
    const id = match.params.id



    
    return (
        <div>
            <SharedForm />
        </div>
    )
}
