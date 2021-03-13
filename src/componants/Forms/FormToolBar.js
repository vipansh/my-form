import React, { useContext } from 'react'
import { FormContext } from '../../Context/FormContext'
import { fireDb } from '../../firebase'
import { SavePopUp } from './SavePopUp'
import ReactDOM from "react-dom";
import {
    useHistory,
} from "react-router-dom";



export const FormToolBar = ({ value, id, isThisActive }) => {
    let history = useHistory();

    const { allquestions, setAllquestions } = value
    const { idOfActiveQue, setIdOfActiveQue } = isThisActive
    const { formData, setFormData } = useContext(FormContext)

    const [saveWorning, setSaveWorning] = React.useState(false)


    function addOne() {
        let value = {
            question: "",
            questiontype: "",
            required: "",
            options: [{ "option": null }]

        }
        setAllquestions(allquestions => {
            return [...allquestions, value]
        })
        setIdOfActiveQue(allquestions.length)
    }
    function removeOne() {
        let values = [...allquestions]
        values.splice(id, 1)
        setAllquestions(values)
    }
    const submitForm = () => {


        const formdataRef = fireDb.ref("currentUser").child('Forms');
        try {
            formdataRef.push(formData)

            history.push("/form/a/2255")
        } catch (error) {
            console.log(error);
        }



        setSaveWorning(false)

    }
    return (
        <div className="absolute flex flex-col bg-white rounded-lg" style={{ right: "-87px", top: "3px" }}>
            <SavePopUp show={{ saveWorning, setSaveWorning }} saveForm={submitForm} />

            <div class="flex items-center cursor-pointer rounded-md m-2 " onClick={() => { addOne() }}><span className="rounded-full hover:bg-gray-400 p-2"><svg className="h-8 inline " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg></span></div>



            <div class="flex items-center cursor-pointer rounded-md m-2"><span className="rounded-full hover:bg-gray-400 p-2"><svg className="h-8 inline " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg></span></div>

            <div class="flex items-center cursor-pointer rounded-md m-2"><span className="rounded-full hover:bg-gray-400 p-2" onClick={() => { setSaveWorning(true) }}><svg className="h-8 inline " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" />
            </svg></span></div>


            <div class="flex items-center cursor-pointer rounded-md m-2" onClick={() => { removeOne() }}>  <span class=" text-red-300 hover:text-red-800 p-2"  > <svg className="h-8 inline " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg></span></div>

        </div>
    )
}


