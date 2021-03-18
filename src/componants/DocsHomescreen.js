import React from 'react'
import { FreeTamplate } from './FreeTamplate'
import { RecentForms } from './RecentForms'

export const DocsHomescreen = () => {
    return (
        <div>

            <div class=" shadow-lg rounded-lg  bg-gray-100">
                <div className="container mx-auto p-2">
                    <FreeTamplate />
                </div>
            </div>
            <div class="  rounded-lg md:h-auto bg-white ">

                <div className="container mx-auto p-2">
                    <RecentForms />
                </div>
            </div>
        </div>
    )
}
