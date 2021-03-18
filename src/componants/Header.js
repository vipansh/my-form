import React from 'react'

export const Header = () => {
    return (
        <header class="border-b md:flex md:items-center md:justify-between p-4 pb-0 shadow-lg md:pb-4">

            <div class="flex items-center justify-between mb-4 md:mb-0 font-semibold">
                <div><svg className=" w-8 text-purple-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg></div>
                <svg className=" w-8 text-purple-900 mx-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>

                <div class="leading-none text-2xl text-gray-800 cursor-pointer flex  flex-wrap  items-center justify-start md:ml-auto">
                    Forms
                </div>
            </div>

           

            <nav class="flex items-center justify-between leading-none p-2 md:px-4">
                <a class="flex items-center no-underline hover:underline text-black" href="/">
                    <img alt="Placeholder" class="block rounded-full" src="https://picsum.photos/32/32/?random" />
                    <p class="ml-2 text-sm font-semibold">
                        Your Name
                        </p>
                </a>
            </nav>
        </header >
    )
}
