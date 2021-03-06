import React, { useState } from 'react'

import { fireDb } from '../firebase'

import { SharedForm } from '../componants/SharedForm/SharedForm'
import { useAuth } from '../Context/AuthContext'

export const SharedFormPage = ({ match }) => {

    // This is shared form an will be shown when user share link with someOne
    const { currentUser } = useAuth()


    const uid = match.params.uid
    const thisID = match.params.id


    const [allFormData, setallFormData] = useState()
    React.useEffect(() => {

        const todoRef = fireDb.ref(uid).child("Forms");
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
