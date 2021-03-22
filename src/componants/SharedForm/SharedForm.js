import React, { useState, useEffect } from 'react'
import { useAuth } from '../../Context/AuthContext'
import { fireDb } from '../../firebase'
import { SaveError } from '../FormModule/SaveErrors'
import { SubmittedFormQuestionBox } from '../SubmittedForm/SubmittedFormQuestionBox'
import { SubmittedFormTitle } from '../SubmittedForm/SubmittedFormTitle'
import { SharedFormQuestionBox } from './SharedFormQuestionBox'
import { SubmitedForm } from './SubmitedForm'

export const SharedForm = ({ data }) => {

    const { currentUser } = useAuth()

    const [formSubbmited, setformSubbmited] = useState(() => {
        var retrievedObject = localStorage.getItem('form');

        if (retrievedObject) {

            return retrievedObject.includes(data.uniqueID);
        }

    })

    const [responceList, setresponceList] = useState(() => {
        let val = []
        for (let i = 0; i < data.content.length; i++) {
            val.push(0)
        }
        return val
    })


    const [iserror, setiserror] = useState(false)

    const onSubmit = () => {

        let checkRequired = false
        for (let i = 0; i < data.content.length; i++) {
            const element = data.content[i];


            if (element.required && (responceList[i] === 0)) {
                checkRequired = true

            }
            else {
                checkRequired = false
              
            }
        }

        if (checkRequired) {
            setiserror(true)
            setTimeout(() => {
                setiserror(false)

            }, 3000);
        }
        else {
            const formdataRef = fireDb.ref(data.createdBy).child('Forms');
            const thisformref = formdataRef.child(data.id).child('responceList')
            thisformref.push(responceList)
            setformSubbmited(true)

        }



    }


    const [questions, setquestions] = useState(data.content)


    if (formSubbmited) {
        return <div><SubmitedForm title={data.title} setformSubbmited={setformSubbmited} /></div>
    }


    return (
        <div>
            <div className="mt-16">
                <SaveError msg={"* marked fields are required"} show={iserror} />

                <SubmittedFormTitle title={data.title} />

                {/* <SubmittedFormQuestionBox />  */}
                {questions.map((question, i) => {
                    return <SharedFormQuestionBox id={i} data={question} color={data.color} value={{ responceList, setresponceList }} />
                })}
                <div className="container mx-auto ">
                    <button onClick={() => { onSubmit() }} className="focus:outline-none  py-4 font-semibold focus:shadow  text-xl w-full md:w-auto bg-green-400 text-white px-16 transition-all duration-300 shadow-lg hover:shadow-xl to-green-500 rounded-lg">Submit </button>
                </div>
            </div>
            <center>This content is neither created nor endorsed by MeForm. Never subbmit your passwoed </center>
        </div>
    )
}
