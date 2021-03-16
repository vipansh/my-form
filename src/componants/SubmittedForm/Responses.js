import React, { useState, useEffect } from 'react'
import { ResponsesBox } from './ResponsesBox';

export const Responses = ({ data, questions }) => {



    const [responsesArr, setResponsesArr] = useState(() => {

        const todoList = []
        for (let id in data) {
            todoList.push({ ...data[id] });
        }
        return (todoList);
    })



    useEffect(() => {
        console.log(responsesArr)


    }, [])



    return (
        <div>
            {questions.map((question, i) => {
                return <ResponsesBox data={question} color={data.color} />
            })}
        </div>
    )
}
