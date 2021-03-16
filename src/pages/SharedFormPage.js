import React, { useState } from 'react'

import { fireDb } from '../firebase'

import { SharedForm } from '../componants/SharedForm/SharedForm'

export const SharedFormPage = ({ match }) => {
    const id = match.params.id


    const thisID = match.params.id


    const [allFormData, setallFormData] = useState()
    React.useEffect(() => {


        const todoRef = fireDb.ref('currentUser').child("Forms");
        todoRef.on('value', (snapshot) => {
            const todos = snapshot.val();
            const todoList = [];
            for (let id in todos) {
                todoList.push({ id, ...todos[id] });
            }

            let newArr = todoList.filter((data) => {

                return (
                    data.uniqueID === thisID)

            })


            setallFormData(newArr);

        });
    }, [])

    const [responceList, setResponceList] = useState()

    if (allFormData) {

        return (
            <div>
                {allFormData.map((allData, i) => {
                    return <SharedForm data={allData} key={i} />
                })}
            </div>
        )
    }
    return (
        <div>
            Loading
        </div>
    )

}
