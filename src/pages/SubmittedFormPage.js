import React, { useState } from 'react'
import { FormHome } from '../componants/SubmittedForm/FormHome'

import { fireDb } from '../firebase'


export const SubmittedFormPage = ({ match }) => {
    const thisID = match.params.id


    // this is the page where question and responces are shown

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
                    return <FormHome data={allData} key={i} />
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
