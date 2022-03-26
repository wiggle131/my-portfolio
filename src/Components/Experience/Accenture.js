import React from "react";
import image from "../Resources/projects/internship.png"
import ColoredLine from "../ColoredLine";

const Accenture = () => {

    return(
         <div className='flex my-16 flex-col xl:flex-row'>
                <img src={image} alt='pic' className='xl:h-80 h-auto w-auto xl:mr-16'/>
                <div>
                    <p className='font-Karla text-2xl md:text-5xl text-port-red my-2 text-right tracking-widest font-extrabold'>
                        Accenture
                    </p>
                     <div className='flex justify-end'>
                        <p className='font-Karla text-lg md:text-2xl text-port-orange font-bold'> Intern </p>
                     </div>
                    <p className='font-Inconsolata text-sm md:text-xl text-port-white my-2 text-right leading-6 tracking-widest'> 
                      Used the Java Framework Selenium to conduct automation testing on the 
                      given taxonomy of my catalog.
                    </p>
                    <div className='col-span-6 mt-4 mb-2'>
                                <ColoredLine color='#FCBF49'/>
                    </div>
                    <div className='flex justify-end '>
                        <p className='font-Karla text-port-white text-base md:text-xl italic font-bold'>June 8 - July 19, 2021</p>
                    </div>
                </div>
            </div>
    );
}
export default Accenture;