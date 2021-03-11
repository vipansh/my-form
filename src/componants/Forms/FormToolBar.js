import React from 'react'

export const FormToolBar = ({ value, id, isThisActive }) => {

    const { allquestions, setAllquestions } = value
    const { idOfActiveQue, setIdOfActiveQue } = isThisActive

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




    return (
        <div className="absolute flex flex-col bg-white rounded-lg" style={{ right: "-87px", top: "3px" }}>



            <div class="flex items-center cursor-pointer rounded-md m-2 " onClick={() => { addOne() }}><span className="rounded-full hover:bg-gray-400 p-2"><svg className="h-8 inline " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg></span></div>



            <div class="flex items-center cursor-pointer rounded-md m-2"><span className="rounded-full hover:bg-gray-400 p-2"><svg className="h-8 inline " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg></span></div>

            <div class="flex items-center cursor-pointer rounded-md m-2"><span className="rounded-full hover:bg-gray-400 p-2"><svg className="h-8 inline " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg></span></div>


            <div class="flex items-center cursor-pointer rounded-md m-2" onClick={() => { removeOne() }}>  <span class=" text-red-300 hover:text-red-800 p-2"  > <svg className="h-8 inline " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg></span></div>


        </div>
    )
}
