import React from "react";

const Introduction = () => {

    return(
        <div className ='flex h-screen'>
            <div className='my-auto '>
                <div className='grid justify-items-start'>
                    <p className='font-Inconsolata text-base text-port-orange my-2 tracking-wider'>  Hi I am,</p>
                    <p className='font-Karla font-bold text-6xl text-port-red my-2 '>Jhosie Charles Espantaleon</p>
                    <p className='font-Inconsolata text-base text-port-white my-2 w-1/2 text-left tracking-widest'>
                        I am a Cebu based Developer with a little
                        bit of UI/UX designing. Right now I am focusing 
                        on improving myself everyday.
                    </p>
                    <div>
                        <button className='w-[10rem] font-Inconsolata text-base my-5 mx-16 border-solid border-2 border-port-red p-4 rounded-lg text-port-orange font-bold'>
                            Get in touch
                        </button>
                        <button className='w-[10rem] font-Inconsolata text-base my-5 mx-16 border-solid border-2 border-port-red p-4 rounded-lg text-port-orange font-bold'>
                            Resume
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Introduction;