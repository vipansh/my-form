import React, {  useContext } from 'react'
import { FormContext } from '../../Context/FormContext'


export const EnterFormTitle = () => {




    const { formData, setFormData } = useContext(FormContext)




    function handelchange(e) {
        setFormData(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value

        }))

    }




    return (
        <div className="container mx-auto border-t-8 rounded-lg    p-4 shadow-sm bg-white" style={{ borderColor: formData.color }}>
            <div className="p-4">
                <input type="text" name="title" onChange={(e) => { handelchange(e) }} className="relative outline-none rounded py-4 px-3 w-full bg-white hover:shadow md:text-5xl 
                text-3xl        text-gray-700 placeholder-gray-800 focus:outline-none focus:shadow-outline border" placeholder="Untitled Form" value={formData.title} />
            </div>
            <div className="p-4">
                <input type="text" name="discription" onChange={(e) => { handelchange(e) }} className="relative outline-none rounded py-4 px-3 w-full bg-white hover:shadow text-base text-gray-700 placeholder-gray-800 focus:outline-none focus:shadow-outline border" placeholder="Form Discription" value={formData.discription} />
            </div>
        </div>
    )
}
