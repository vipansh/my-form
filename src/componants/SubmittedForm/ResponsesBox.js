import React from 'react'

export const ResponsesBox = ({ data, color, allData, index, responsesArr, totalVote }) => {
    //     options: (2) [{…}, {…}]
    // question: "11"
    // questiontype: "Multiple Choice"
    // required: true




    return (

        <div className="container mx-auto my-4  ">
            <div className="  container mx-auto border-l-8 rounded-lg   my-8   p-4 shadow-sm bg-white border-blue-400 border flex justify-between" style={{ borderColor: ` ${color ? color : "#F1F1F0"}` }} >


                <div className=" md:w-2/3 ">
                    <div class=" p-4  w-full  text-gray-800 leading-tight text-4xl font-extrabold " >{data.question}
                        {data.required ? <span className="mx-8  text-red-500 font-bold text-xl ">* required</span> : null}</div>


                    {data.options.map((option, i) => {
                        return <Box checkOption={option} key={i} volume={responsesArr[++i]} key={i} />
                    })}
                </div>
                <div>
                    {responsesArr[0] ? <div> Skipped By: {responsesArr[0]}</div> : null}
                 Total submission: {totalVote}
                </div>
            </div >
        </div>
    )
}



const Box = ({ checkOption, volume }) => {
    console.log(volume ? volume : "Nan")
    const [checkBox, setCheckBox] = React.useState(false)

    return (
        <div class=" p-2 flex w-full">
            <div class="inline  outline-none border rounded py-1 px-2 w-2/3 bg-white text-sm text-gray-700  "  > {checkOption}</div>   {(volume ? <span className="mx-4">{volume}</span> : <span className="mx-4">0</span>)}
        </div>

    )
}
