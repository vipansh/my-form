import React from 'react'

export const ResponsesBox = ({ data, color }) => {
    //     options: (2) [{…}, {…}]
    // question: "11"
    // questiontype: "Multiple Choice"
    // required: true
    
    return (
        <div className="container mx-auto my-4 ">
            <div className=" relative container mx-auto border-l-8 rounded-lg   my-8  p-4 shadow-sm bg-white border-blue-400 border " style={{ borderColor: ` ${color ? color : "#F1F1F0"}` }} >
                <div class=" p-4   text-gray-700 leading-tight " >{data.question}
                    {data.required ? <span className="mx-8  text-red-500">* required</span> : null}</div>


                {data.options.map((option, i) => {
                    return <Box checkOption={option} key={i} />
                })}

            </div >
        </div>
    )
}



const Box = (checkOption) => {
    const [checkBox, setCheckBox] = React.useState(false)

    return (
        <label class="custom-label p-2 flex w-full">
            <div class="inline  outline-none border border-gray-400 rounded py-1 px-2 w-2/3 bg-white text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:shadow-outline"  >  {checkOption.checkOption.option}  </div>
        </label>

    )
}
