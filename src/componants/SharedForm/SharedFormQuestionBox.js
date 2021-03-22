import React, { useState } from 'react'

export const SharedFormQuestionBox = ({ data, color, id, value }) => {
    //     options: (2) [{…}, {…}]
    // question: "11"
    // questiontype: "Multiple Choice"
    // required: true

    const { responceList, setresponceList } = value

    const updateResponce = (a, b) => {
        let newArr = [...responceList]
        newArr[b] = ++a
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
                <div className=" p-4   text-gray-700 leading-tight " >{data.question}
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
        // <label className={`"flex items-center mt-3 py-5 hover:shadow-2xl px-6 border-2  rounded-md shadow-xl  transition-all duration-500 bg-white w-full  " ${checkBox ? " border-green-500" : "  border-gray-200"}`}>
        //     <input type="checkbox" className="form-checkbox h-5 w-5 text-green-600" onClick={() => handelChange(index)} checked={checkBox} /><span className="ml-2 text-gray-700">{checkOption}</span>
        // </label >



        <label className={`flex items-center mt-3  w-full border p-2 transition-all duration-500 rounded-md   ${checkBox ? "border-green-500" : "border-gray-200"}`}>
            <input type="checkbox" className="form-checkbox h-5 w-5 text-green-600" onClick={() => handelChange(index)} checked={checkBox} /><span className="ml-2 text-gray-700">{checkOption}</span>
        </label>
    )
}



