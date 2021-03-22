import React from 'react'
import { useAuth } from '../Context/AuthContext'
import { fireDb } from '../firebase'
import { OldFormslist } from './OldFormslist'

export const RecentForms = () => {
    const { currentUser } = useAuth()


    const [allFormData, setallFormData] = React.useState()
    React.useEffect(() => {


        const todoRef = fireDb.ref(currentUser.uid).child("Forms");
        todoRef.on('value', (snapshot) => {
            const todos = snapshot.val();
            const todoList = [];
            for (let id in todos) {
                todoList.push({ id, ...todos[id] });
            }




            setallFormData(todoList);

        });
    }, [])



    if (allFormData) {

        return (
            <div class="p-4 flex items-center justify-center ">
                <div class="w-full max-w-screen-md mx-auto">
                    <fieldset class="space-y-6">
                        <div class="flex items-center justify-between py-4 border-b border-gray-300">
                            <div class="sm:font-semibold font-extrabold text-2xl">Recent forms </div>

                            <div className="flex items-center justify-center"><span className=" hidden sm:inline hover:bg-gray-300 px-2 rounded-md cursor-pointer" > Owned by anyone <svg className="w-4 mx-2 inline" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                            </svg></span>

                                <span className="rounded-full cursor-pointer hover:bg-gray-400  p-2 "><svg className=" hidden sm:inline w-8 mx-2     text-gray-800" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                </svg></span>
                            </div>
                        </div>
                        <div class="grid grid-col-2 gap-4">
                            {allFormData.map(data => {
                                return <OldFormslist data={data} key={data.id} />
                            })}

                        </div>
                    </fieldset>
                </div>
            </div>
        )
    }

    return (
        <div>Loading</div>
    )
}

