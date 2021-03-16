import React, { useState } from 'react'

export const SharedFormQuestionBox = ({ data, color, id, value }) => {
    //     options: (2) [{…}, {…}]
    // question: "11"
    // questiontype: "Multiple Choice"
    // required: true

    const { responceList, setresponceList } = value

    const updateResponce = (a, b) => {
        let newArr = [...responceList]
        console.log(newArr)
        newArr[b] = a++
        setresponceList(newArr)
    }

    const [idSelected, setidSelected] = useState()

    const handelChange = (a) => {
        setidSelected(a)
        updateResponce(a, id)

    }




    return (
        <div className="container mx-auto my-4 ">
            <div className=" relative container mx-auto border-l-8 rounded-lg   my-8  p-4 shadow-sm bg-white border-blue-400 border " style={{ borderColor: ` ${color ? color : "#F1F1F0"}` }} >
                <div class=" p-4   text-gray-700 leading-tight " >{data.question}
                    {data.required ? <span className="mx-8  text-red-500">* required</span> : null}</div>


                {data.options.map((option, i) => {
                    return <Box checkOption={option} key={i} index={i} updateResponce={updateResponce} handelChange={handelChange} isSelected={idSelected} />
                })}

            </div >
        </div>
    )
}



const Box = ({ checkOption, updateResponce, handelChange, index, isSelected }) => {
    const [checkBox, setCheckBox] = useState(false)

    React.useEffect(() => {
        if (isSelected === index) {
            setCheckBox(true)
        }
        else {
            setCheckBox(false)
        }
    }, [handelChange])

    return (
        <label class="custom-label p-2 flex w-full">
            <input type="checkbox" class="hidden" checked={checkBox}
                onClick={() => handelChange(index)} />


            <div className="w-6 h-6 border inline-block align-center mx-4 my-auto rounded-lg ">{!checkBox ? "" : <svg className="bg-blue-700 text-white rounded-lg" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>}

            </div>
            <div class="inline  outline-none border border-gray-400 rounded py-1 px-2 w-2/3 bg-white text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:shadow-outline"  >  {checkOption.option}  </div>
        </label>

    )
}



