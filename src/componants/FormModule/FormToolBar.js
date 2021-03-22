import React, { useContext, useState } from 'react'
import { FormContext } from '../../Context/FormContext'
import { fireDb } from '../../firebase'
import {
    useHistory,
} from "react-router-dom";
import { ErrorContext } from '../../Context/ErrorContext';



export const FormToolBar = ({ value, id, isThisActive }) => {
    let history = useHistory();


    const { iserror, msg } = useContext(ErrorContext)
    const [showError, setshowError] = iserror
    const [errorMessage, seterrorMessage] = msg


    const { allQuestions, setAllQuestions } = value
    const { idOfActiveQue, setidOfActiveQue } = isThisActive


    const { formData, setFormData } = useContext(FormContext)

    const [saveWarning, setSaveWarning] = useState(false)

    function addOne() {
        let value = {
            question: "",
            questiontype: "",
            required: "",
            options: ["", ""]

        }

        setAllQuestions(allQuestions => {
            return [...allQuestions, value]
        })
        setidOfActiveQue(allQuestions.length)

    }
    function removeOne() {
        let values = [...allQuestions]
        values.splice(id, 1)
        setAllQuestions(values)

    }



    const submitForm = () => {

        let allClear = false

        if (formData.title <= 0) {
            setshowError(true)
            seterrorMessage("Title can't be empty")
            setTimeout(() => {
                setshowError(false)

            }, 3000);
        }
        else {

            for (let i = 0; i < formData.content.length; i++) {
                const element = formData.content[i];
                if (element.question.length <= 0) {
                    setshowError(true)
                    seterrorMessage("Question can't be empty")
                    setTimeout(() => {
                        setshowError(false)

                    }, 3000);
                }
                else {
                    let emptyOption = false
                    for (let j = 0; j < element.options.length; j++) {
                        const opt = element.options[j];
                        if (opt.length <= 0) {
                            emptyOption = true

                        }

                    } if (emptyOption) {
                        setshowError(true)
                        seterrorMessage("Option can't be empty")
                        setTimeout(() => {
                            setshowError(false)

                        }, 3000)
                    }

                    else {
                        allClear = true

                    }
                }




            }
            if (allClear) {
                const formdataRef = fireDb.ref("currentUser").child('Forms');
                try {
                    formdataRef.push(formData)

                    history.push(`/form/a/${formData.uniqueID}`)
                } catch (error) {
                    setshowError(true)
                    seterrorMessage(error)
                    setTimeout(() => {
                        setshowError(false)

                    }, 3000)
                }
            }

            setSaveWarning(false)

        }
    }



    return (
        <>
            <div className="flex flex-row md:flex-col w-full md:w-auto  md:my-4  fixed bottom-0 left-0  md:ml-16 rounded-lg bg-gray-200 justify-around md:static z-40 ">


                <div class="flex  items-center cursor-pointer rounded-md m-2 " onClick={() => { addOne() }}><span className="rounded-full hover:bg-gray-400 p-2"><svg className="h-8 inline " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg></span></div>



                <div class="flex items-center cursor-pointer rounded-md m-2"><span className="rounded-full hover:bg-gray-400 p-2"><svg className="h-8 inline " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg></span></div>

                <div class="flex relative items-center cursor-pointer rounded-md m-2"><span className="rounded-full hover:bg-gray-400 p-2" onClick={() => { setSaveWarning(true) }}><svg className="h-8 inline " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" />
                </svg></span>
                    {saveWarning ? <div className="save-pop-up "  >
                        <SavePopUp show={{ saveWarning, setSaveWarning }} saveForm={submitForm} />
                    </div> : null}
                </div>


                <div class={`flex items-center  rounded-md m-2  + ${allQuestions ? " cursor-pointer " : " cursor-not-allowed "}`} onClick={() => { removeOne() }}>  <span class=" text-red-300 hover:text-red-800 p-2"  > <svg className="h-8 inline " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg></span></div>

            </div>






        </>
    )
}



const SavePopUp = ({ show, saveForm }) => {

    const { saveWarning, setSaveWarning } = show
    return (
        <div class=" flex flex-col rounded-lg bg-white border " >
            < div class="bg-white opacity-25 rounded-lg  absolute z-10 inset-0 " ></div >
            <div class="bg-white rounded-lg md:max-w-md md:mx-auto p-4 fixed inset-x-0 bottom-0 z-50 mb-4 mx-4 md:relative">
                <div class="flex md:flex-col items-center ">
                    <div class="rounded-full border border-gray-300 flex items-center justify-center w-16 h-16 flex-shrink-0 mx-auto">
                        <svg className="w-8 h-8 text-green-800 rounded-lg" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016zM12 9v2m0 4h.01" />
                        </svg>
                    </div>
                    <div class="mt-4 md:mt-0 md:ml-6 text-center md:text-left">
                        <p class="font-bold" >Save Form</p>
                        <p class="text-sm text-gray-700 mt-1">Once Saved you won't be abel to edit it.
                    </p>
                    </div>
                </div>
                <div class="text-center md:text-right mt-4 md:flex md:justify-end">
                    <button class="block w-full md:inline-block md:w-auto px-4 py-3 md:py-2 bg-red-200 text-green-700 rounded-lg font-semibold text-sm md:ml-2 md:order-2" onClick={saveForm}>Save </button>

                    <button class="block w-full md:inline-block md:w-auto px-4 py-3 md:py-2 bg-gray-500 rounded-lg font-semibold text-sm mt-4
                    md:mt-0 md:order-1" onClick={() => { setSaveWarning(false) }}>Cancel</button>
                </div>
            </div>


        </div >

    )


}



