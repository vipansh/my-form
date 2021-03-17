import React, { useState, useEffect } from 'react'
import { ResponsesBox } from './ResponsesBox';

export const Responses = ({ data, questions }) => {

    function transposeArray(array, arrayLength) {
        var newArray = [];
        for (var i = 0; i < array.length; i++) {
            newArray.push([]);
        };

        for (var i = 0; i < array.length; i++) {
            for (var j = 0; j < arrayLength; j++) {
                newArray[j].push(array[i][j]);
            };
        };

        return newArray;
    }
    let optionsLength = data


    const [responsesArr, setResponsesArr] = useState(() => {

        let todoList = []
        for (let id in data.responceList) {
            todoList.push([...data.responceList[id]]);
        }

        todoList = transposeArray(todoList, data.content.length)


        return (todoList);
    })


    const count = names =>
        names.reduce((a, b) => ({
            ...a,
            [b]: (a[b] || 0) + 1
        }), {}
        ) // don't forget to initialize the accumulator

    React.useEffect(() => {





        let chartarr = []

        for (let i = 0; i < data.content.length; i++) {


            let thisquesAnsArr = Array(data.content[i].options.length)
            const countOccurrences = (arr, val) => arr.reduce((a, v) => (v === val ? a + 1 : a), 0);
            let thisarray = (responsesArr[i])










        }






        // const arr = []
        // for (let i = 0; i < optionsLength; i++) {
        //     const responceList = responsesArr[i][0]
        //     arr.push(responceList)
        // }
        // console.log(arr)
        // console.log(responsesArr)

    }, [])







    return (
        <div>
            {questions.map((question, i) => {
                return <ResponsesBox data={question} color={data.color} allData={data} index={i} responsesArr={count(responsesArr[i])} />
            })}
        </div>
    )
}
