import React from "react";

const Ending = ({resume}) => {
   
    return(
          <div className ='flex xl:h-screen my-52 xl:my-0'>
            <div className='my-auto '>
                <div className='grid justify-center justify-items-center'>
                    <p className='font-Karla font-bold text-5xl md:text-6xl text-port-red my-2 '>  Let's Connect</p>
                    <p className='font-Inconsolata text-sm md:text-base text-port-white my-4 w-full md:w-1/2  text-center tracking-widest'>
                        I am currently looking for job oppurtunities and I would 
                        greatly appreciate if you would contact me. 
                    </p>
                    <span className='text-port-red md:font-extrabold text-xl'>: ) </span>
                    <div className='flex-row flex md:flex-none justify-center w-full  md:flex-none'>
                         <a href="mailto:jhosiecharlesespantaleon@gmail.com">
                            <button className='w-28 md:w-40 font-Inconsolata text-xs md:text-base my-5 mx-8 md:mx-16 border-solid border-2 border-port-red p-4 rounded-lg text-port-orange font-bold'>
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

export default Ending;