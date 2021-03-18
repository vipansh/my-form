import React, { useState, useContext } from 'react'
import { FormContext } from '../../Context/FormContext'
import {
    Link,
    useHistory
} from "react-router-dom";
import { fireDb } from '../../firebase';

export const FormHeader = ({ id }) => {
    let history = useHistory();

    const [colorOpen, setColorOpen] = useState(false)

    const { formData, setFormData } = useContext(FormContext)

    const color = ['#6E3Cf4', '#F1C335', '#F09052', '#54BAAE', '#2D5Cf6', '#B835F6'];

    const changeColor = (value) => {


        setFormData(prevState => ({
            ...prevState,
            color: value

        }))

        setColorOpen(false)



    }


    const saveForm = () => {
        const formdataRef = fireDb.ref("currentUser").child('Forms');
        try {
            formdataRef.push(formData)

            history.push(`/form/a/${id}`)
        } catch (error) {
            console.log(error);
        }
    }



    return (
        <div class="border-b shadow-lg  " >

            <header class=" md:flex mb-2 md:mb-0 md:items-center justify-between p-4 pb-0  md:pb-4 ">
                <div class=" md:flex md:items-center">
                    <Link to="/" className="mx-4 my-auto text-gray-800"><svg class="text-gray-800 h-4 w-4 inline" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                    </svg></Link>
                    {formData.title ? formData.title : "Untitled Form"}
                </div>




                <nav className="w-auto text-gray-700 my-4 md:my-0 flex flex-row justify-between md:justify-end">
                    <span className="mx-2 p-2 rounded-full relative hover:bg-gray-300 " onClick={() => { setColorOpen(!colorOpen) }}><svg className=" h-6 inline " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ color: formData.color }}>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                    </svg>

                    </span >


                    {colorOpen ? <div id="usermenu" class="absolute    z-40  w-auto " style={{ right: "25px", top: '65px' }}>
                        {color.map(color => {
                            return <span onClick={() => { changeColor(color) }} className="w-auto mx-2 p-2 cursor-pointer  block my-1 " style={{ backgroundColor: color, right: "25px", top: '75px' }}>{color}</span>
                        })}
                    </div> : null}

                    <span className="mx-4">
                        <button onChange={saveForm} class=" inline-flex  text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg" style={{ backgroundColor: formData.color }} >Save</button></span>


                    <span>
                        <img alt="Placeholder" class="inline mx-4 rounded-full" src="https://picsum.photos/32/32/?random" />

                    </span>




                </nav>



            </header >


            <div className="flex justify-center ">
                <div className="mx-4 p-4 py-2 text-blue-500 font-semibold border-blue-600 border-b-4 cursor-pointer ">Questions</div>
                <div className="mx-4 p-4 py-2  cursor-pointer ">Responses</div>
            </div>




        </div >





    )
}
