import React, { useState, useEffect } from 'react'
import { ResponsesBox } from './ResponsesBox';

export const Responses = ({ data, questions }) => {

    // function transposeArray(array, arrayLength) {
    //     const newArray = [];
    //     for (var i = 0; i < array.length; i++) {
    //         newArray.push([]);
    //     };

    //     for (var i = 0; i < array.length; i++) {
    //         for (var j = 0; j < arrayLength; j++) {
    //             newArray[j].push(array[i][j]);
    //         };
    //     };

    //     return newArray;
    // }



    const [responsesArr, setResponsesArr] = useState(() => {

        let todoList = []
        for (let id in data.responceList) {
            todoList.push([...data.responceList[id]]);
        }
        todoList = todoList[0].map((_, colIndex) => todoList.map(row => row[colIndex]));
        return (todoList);
    })

    const [totalAns, setTotalAns] = useState(() => {

        let todoList = []
        for (let id in data.responceList) {
            todoList.push([...data.responceList[id]]);
        }
        return (todoList.length);
    })

    console.log(data.responceList, "aaaa")

    React.useEffect(() => {
        let chartarr = []

        for (let i = 0; i < data.content.length; i++) {


            let thisquesAnsArr = Array(data.content[i].options.length)
            const countOccurrences = (arr, val) => arr.reduce((a, v) => (v === val ? a + 1 : a), 0);
            let thisarray = (responsesArr[i])

        }
    }, [])

    const countOccurrences = arr => arr.reduce((prev, curr) => (prev[curr] = ++prev[curr] || 1, prev), {});



    if (data.responceList) {



        return (
            <div className=" container mx-auto">

                <div className="">
                    {questions.map((question, i) => {
                        return <ResponsesBox key={i} data={question} color={data.color} allData={data} index={i} responsesArr={countOccurrences(responsesArr[i])} totalVote={totalAns} />
                    })}
                </div>

            </div>
        )
    }
    return (

        <div>
            No Data subbmited Yet
        </div>
    )
}
