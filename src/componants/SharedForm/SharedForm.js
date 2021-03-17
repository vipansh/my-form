import React, { useState, useEffect } from 'react'
import { fireDb } from '../../firebase'
import { SubmittedFormQuestionBox } from '../SubmittedForm/SubmittedFormQuestionBox'
import { SubmittedFormTitle } from '../SubmittedForm/SubmittedFormTitle'
import { SharedFormQuestionBox } from './SharedFormQuestionBox'
import { SubmitedForm } from './SubmitedForm'

export const SharedForm = ({ data }) => {



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

    function updatestorage() {
        var retrievedObject = JSON.parse(localStorage.getItem('form'));

        if (retrievedObject) {

            localStorage.setItem('form', JSON.stringify([...retrievedObject, data.uniqueID]));
        }
        else {
            localStorage.setItem('form', JSON.stringify([data.uniqueID]));

        }

    }



    const onSubmit = () => {
        const formdataRef = fireDb.ref("currentUser").child('Forms');
        const thisformref = formdataRef.child(data.id).child('responceList')
        thisformref.push(responceList)
        console.log(responceList)
        setformSubbmited(true)
        updatestorage()
    }


    const [questions, setquestions] = useState(data.content)


    if (formSubbmited) {
        return <div><SubmitedForm title={data.title} setformSubbmited={setformSubbmited} /></div>
    }


    return (
        <div>
            <div className="mt-16">

                <SubmittedFormTitle title={data.title} />

                {/* <SubmittedFormQuestionBox />  */}
                {questions.map((question, i) => {
                    return <SharedFormQuestionBox id={i} data={question} color={data.color} value={{ responceList, setresponceList }} />
                })}
                <div className="container mx-auto ">
                    <button onClick={onSubmit}>Submit</button>
                </div>
            </div>
            <center>This content is neither created nor endorsed by MeForm. Never subbmit your passwoed </center>
        </div>
    )
}
