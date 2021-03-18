import React from 'react'

export const LineBar = ({ n }) => {



    
    return (
        <div class="h-2 w-full bg-gray-300 rounded-full "><div class="h-2 rounded-full mt-3 bg-indigo-400" style={{ width: `${n}%` }}>
        </div>
        </div>
    )
}
