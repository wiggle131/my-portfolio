import React from "react";

const Introduction = ({resume}) => {
    const email = "https://mail.google.com/mail/u/0/?fs=1&to=jhosiecharlesespantaleon@gmail.com&tf=cm"
    return(
        <div className ='flex h-screen'>
            <div className='my-auto '>
                <div className='grid justify-items-start'>
                    <p className='font-Inconsolata text-base text-port-orange my-2 tracking-wider'>  Hi I am,</p>
                    <p className='font-Karla font-bold text-4xl md:text-6xl text-port-red my-2 '>Jhosie Charles Espantaleon</p>
                    <p className='font-Inconsolata text-base text-port-white my-2 w-100 md:w-1/2 text-left tracking-widest'>
                        I am a Cebu based Developer with a little
                        bit of UI/UX designing. Right now I am focusing 
                        on improving myself everyday.
                    </p>
                    <div className="flex-row flex md:flex-none justify-center md:justify-start w-full  md:flex-none">
                        <a href = {email} target="_blank" rel="noreferrer">
                            <button className='w-28 md:w-40 font-Inconsolata text-xs md:text-base my-5 mx-8 md:mx-16 border-solid border-2 border-port-red p-4 rounded-lg text-port-orange font-bold'
                            onClick={() => window.location.href = 'jhosie'}>
                            Get in touch
                            </button>
                        </a>
                        <a href = {resume} download ="Jhosie Charles Espantaleon Ressume" target="_blank" rel="noreferrer">
                            <button className='w-28 md:w-40 font-Inconsolata text-xs md:text-base my-5 mx-8 md:mx-16 border-solid border-2 border-port-red p-4 rounded-lg text-port-orange font-bold'>
                                Resume
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Introduction;