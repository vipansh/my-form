import React, { useState } from 'react'

export const NotActiveQuestion = ({ data, id, isThisActive, height }) => {

    const { idOfActiveQue, setidOfActiveQue } = isThisActive

    const [questionArray, setquestionArray] = useState(data.options)


    function setThisActive() {
        setidOfActiveQue(id)
        console.log(id)
    }

    const [options, setOptions] = useState(data.options)

    return (
        <div onClick={() => { setThisActive() }}>
            <div className=" relative container mx-auto rounded-lg   my-8  p-4 shadow-sm bg-white">
                <div className="flex">
                    <div class="p-4 inline appearance-none  rounded w-1/2 text-gray-800   overflow-hidden font-semibold"


                        style={{ height: height, resize: "none" }}


                    >{data.question ? data.question : "Question"}</div>
                    <span className="inline-flex align-center justify-center mx-4 p-2 rounded-full hover:bg-gray-300  "><svg className="w-8 text-gray-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg></span>



                    <span className="w-1/3 aline-center m-auto">
                        <div class="z-0 bg-gray-900 relative text-sm block w-full  rounded hover:bg-gray-800 py-1 px-4 text-gray-100" name="questionType" >
                            {data.questiontype}


                        </div>

                    </span>
                </div>

                <div>

                    <div className="mt-6">




                        {questionArray.map((items, index) => <Boxes key={index} index={index} values={items} questionType={data.questiontype} />)}



                    </div >

                </div>



            </div >




        </div >
    )
}



const Boxes = ({ values, questionType }) => {
    const [checkboxValue, setCheckboxValue] = useState(false)



    return (
        <div class=" my-auto p-2  outline-none mx-4  rounded py-1 px-2 w-2/3 bg-white text-sm text-gray-800  focus:outline-none focus:shadow-outline align-center flex flex-row justify-start align-center" > <span className="w-6 h-6 border inline-block align-center mx-4 my-auto rounded-lg ">  </span ><span class="inline-flex justify-start align-center">{values ? values : "Option"}</span></div >


    )

}