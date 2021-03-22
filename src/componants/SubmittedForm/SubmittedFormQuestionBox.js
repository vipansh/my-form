import React from 'react'

export const SubmittedFormQuestionBox = ({ data, color }) => {
    //     options: (2) [{…}, {…}]
    // question: "11"
    // questiontype: "Multiple Choice"
    // required: true

    console.log(data)

    if (data) {
        return (
            <div className="container mx-auto my-4 ">
                <div className="  container mx-auto border-l-8 rounded-lg   my-8  p-4 shadow-sm bg-white border-blue-400 border " style={{ borderColor: ` ${color ? color : "#F1F1F0"}` }} >
                    <div class=" p-4   text-gray-700 leading-tight " >{data.question}
                        {data.required ? <span className="mx-8  text-red-500">* required</span> : null}</div>


                    {data.options.map((option, i) => {
                        return <Box checkOption={option} key={i} />
                    })}

                </div >
            </div>
        )
    }
    else {
        return <div>Loading</div>
    }
}



const Box = ({ checkOption }) => {

    const [checkBox, setCheckBox] = React.useState(false)

    return (
        <label class="custom-label p-2 flex w-full">
            <input type="checkbox" class="hidden" checked={checkBox}
            />


            <div className="w-6 h-6 border inline-block align-center mx-4 my-auto rounded-lg ">{!checkBox ? "" : <svg className="bg-blue-700 text-white rounded-lg" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>}

            </div>
            <div class="inline  outline-none  border-gray-400 rounded py-1 px-2 w-2/3 bg-white text-lg text-gray-700 placeholder-gray-400 focus:outline-none focus:shadow-outline"  >  {checkOption}  </div>
        </label>

    )
}
