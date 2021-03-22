import React from 'react'
import { Link } from 'react-router-dom'
import QRCode from 'react-qr-code';

export const SubmittedFormHeader = ({ id, value, title, }) => {
    const { idOpen, setIdOpen } = value


    const [showSideBar, setShowSideBar] = React.useState(false)
    return (
        <div class="border-b shadow-lg " >
            {showSideBar ? <SideBar value={{ showSideBar, setShowSideBar }} id={id} /> : null}

            <header class=" md:flex md:items-center md:justify-between p-4 pb-0  md:pb-4">
                <div class=" md:flex md:items-center">
                    <Link to="/" className="mx-4 my-auto text-gray-800"><svg class="text-gray-800 h-4 w-4 inline" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                    </svg></Link>
                    {title.length > 0 ? title : "Untitled Form"}
                </div>
                <nav className="w-auto text-gray-700 flex justify-center flex-row items-center
                ">


                    <button className="mx-4 my-4 inline-flex  text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg " onClick={() => { setShowSideBar(true) }}>
                        {/* <Link to={`/form/b/fill/${id}`} class="" >Share</Link></button> */}

Share</button>


                    <span>
                        <img alt="Placeholder" class="inline mx-4 rounded-full" src="https://picsum.photos/32/32/?random" />

                    </span>




                </nav>



            </header >


            <div className="flex justify-center ">
                <div onClick={() => { setIdOpen(1) }} className={"mx-4 p-4 py-2  cursor-pointer" +
                    (idOpen === 1 ? " font-semibold border-blue-600 border-b-4 text-blue-600" : "")} >  Questions</div>

                <div onClick={() => { setIdOpen(2) }} className={"mx-4 p-4 py-2  cursor-pointer" +
                    (idOpen === 2 ? " font-semibold border-blue-600 border-b-4 text-blue-600" : "")}>  Responses</div>
            </div>
        </div >






    )
}





const SideBar = ({ value, id }) => {

    const domain = window.location.hostname

    const { showSideBar, setShowSideBar } = value
    const tourl = `https%3A%2F%2F${domain}%2Fform%2Fb%2Ffill%2F${id}`
    const text = `Fill%20this%20survey%20https%3A%2F%2F${domain}%2Fform%2Fb%2Ffill%2F${id}`
    return (
        <transition name="slide z-50 slide-enter-active transition-slow ease-in transition-transform slide-enter ">
            <div v-if="showmenu">
                <button onClick={() => { setShowSideBar(false) }} class="fixed top-0 right-0 bottom-0 left-0 h-full w-full bg-black opacity-50">X</button>
                <div class=" md:w-1/2  w-10/12 min-h-screen p-8 bg-gray-200 fixed right-0 top-0 shadow-2xl ease-in-out  transition-transform transition-medium">


                    <p class="md:mt-32 text-center  text-gray-600 flex flex-col justify-center items-center  text-xl" >

                        <a href={`/form/b/fill/${id}`} target="_blank" rel="noreferrer noopener">link to form</a>


                        <a href={`https://api.whatsapp.com/send?text=${text}`} target="_blank" rel="noreferrer noopener" aria-label="Share on WhatsApp" title="Share on WhatsApp" className="block py-3 px-2 my-2 bg-green-300 text-gray-800 rounded-lg font-bold  border border-green-600 w-64"> <svg className="w-4 h-4 inline mx-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20.1 3.9C17.9 1.7 15 .5 12 .5 5.8.5.7 5.6.7 11.9c0 2 .5 3.9 1.5 5.6L.6 23.4l6-1.6c1.6.9 3.5 1.3 5.4 1.3 6.3 0 11.4-5.1 11.4-11.4-.1-2.8-1.2-5.7-3.3-7.8zM12 21.4c-1.7 0-3.3-.5-4.8-1.3l-.4-.2-3.5 1 1-3.4L4 17c-1-1.5-1.4-3.2-1.4-5.1 0-5.2 4.2-9.4 9.4-9.4 2.5 0 4.9 1 6.7 2.8 1.8 1.8 2.8 4.2 2.8 6.7-.1 5.2-4.3 9.4-9.5 9.4zm5.1-7.1c-.3-.1-1.7-.9-1.9-1-.3-.1-.5-.1-.7.1-.2.3-.8 1-.9 1.1-.2.2-.3.2-.6.1s-1.2-.5-2.3-1.4c-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6s.3-.3.4-.5c.2-.1.3-.3.4-.5.1-.2 0-.4 0-.5C10 9 9.3 7.6 9 7c-.1-.4-.4-.3-.5-.3h-.6s-.4.1-.7.3c-.3.3-1 1-1 2.4s1 2.8 1.1 3c.1.2 2 3.1 4.9 4.3.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.6-.1 1.7-.7 1.9-1.3.2-.7.2-1.2.2-1.3-.1-.3-.3-.4-.6-.5z"></path></svg>Whatsapp</a>

                        <a href={`https://twitter.com/intent/tweet/?text=${text}`} target="_blank" rel="noreferrer noopener" aria-label="Share on Twitter" title="Share on Twitter" className="block py-3 px-2 my-2 bg-green-300 text-gray-800 rounded-lg font-bold  border border-green-600 w-64"> <svg className="w-4 h-4 inline mx-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M23.44 4.83c-.8.37-1.5.38-2.22.02.93-.56.98-.96 1.32-2.02-.88.52-1.86.9-2.9 1.1-.82-.88-2-1.43-3.3-1.43-2.5 0-4.55 2.04-4.55 4.54 0 .36.03.7.1 1.04-3.77-.2-7.12-2-9.36-4.75-.4.67-.6 1.45-.6 2.3 0 1.56.8 2.95 2 3.77-.74-.03-1.44-.23-2.05-.57v.06c0 2.2 1.56 4.03 3.64 4.44-.67.2-1.37.2-2.06.08.58 1.8 2.26 3.12 4.25 3.16C5.78 18.1 3.37 18.74 1 18.46c2 1.3 4.4 2.04 6.97 2.04 8.35 0 12.92-6.92 12.92-12.93 0-.2 0-.4-.02-.6.9-.63 1.96-1.22 2.56-2.14z"></path></svg>Twitter</a>

                        <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${tourl}`} target="_blank" rel="noreferrer noopener" aria-label="Share on LinkdIn" title="Share on LinkdIn" className="block py-3 px-2 my-2 bg-green-300 text-gray-800 rounded-lg font-bold  border border-green-600 w-64"><svg className="w-4 h-4 inline mx-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M6.5 21.5h-5v-13h5v13zM4 6.5C2.5 6.5 1.5 5.3 1.5 4s1-2.4 2.5-2.4c1.6 0 2.5 1 2.6 2.5 0 1.4-1 2.5-2.6 2.5zm11.5 6c-1 0-2 1-2 2v7h-5v-13h5V10s1.6-1.5 4-1.5c3 0 5 2.2 5 6.3v6.7h-5v-7c0-1-1-2-2-2z"></path></svg>LinkdIn</a>

                        <a href={`https://telegram.me/share/url?text=&url=${tourl}`} target="_blank" rel="noreferrer noopener" aria-label="Share on Telegram" title="Share on Telegram" className="block py-3 px-2 my-2 bg-green-300 text-gray-800 rounded-lg font-bold  border border-green-600 w-64"><svg className="w-4 h-4 inline mx-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M.707 8.475C.275 8.64 0 9.508 0 9.508s.284.867.718 1.03l5.09 1.897 1.986 6.38a1.102 1.102 0 0 0 1.75.527l2.96-2.41a.405.405 0 0 1 .494-.013l5.34 3.87a1.1 1.1 0 0 0 1.046.135 1.1 1.1 0 0 0 .682-.803l3.91-18.795A1.102 1.102 0 0 0 22.5.075L.706 8.475z"></path></svg> Telegram</a>

                        <div className=" my-8"> <QRCode value={`https://${domain}/form/b/fill/${id}`} />,</div>




                    </p>
                </div >
            </div >
        </transition >
    )
}
