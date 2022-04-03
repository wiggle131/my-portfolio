import React from "react";
import ppc from "../Resources/achievements/ppc.jpg";
import ColoredLine from "../ColoredLine";


const PPC = ({logos}) => {
    return (
       <div className='flex my-16 flex-col flex-col-reverse  sm:flex-row items-center'>
                <div>
                    <p className='font-Karla text-xl sm:text-3xl text-port-red my-2 text-left tracking-widest font-extrabold'>
                        Philippine Programming Challenge
                    </p>
                    <div className='flex justify-start'>
                        <p className='font-Karla text-lg md:text-2xl text-port-orange italic font-bold'> Finalist </p>
                    </div>
                    <p className='font-Inconsolata text-sm sm:text-xl text-port-white my-2 text-left leading-6 tracking-widest'> 
                      PPC is a programming competition that aims to identify the most talented entry-level 
                      programmers in the country, by utilizing an automated assessment tool localized for the 
                      specific needs of the Philippine software industry.
                    </p>
                    <div className='col-span-6 mt-4 mb-2'>
                                <ColoredLine color='#FCBF49'/>
                    </div>
                    <div className='flex justify-center md:justify-start '>
<<<<<<< HEAD
                       <div className='flex items-center  mx-2'>
=======
                       <div className='flex items-center z-50 mx-2'>
>>>>>>> parent of a046632 (Fixed warnings)
                            <a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'  target="_blank" rel="noopener noreferrer">
                                <img src={logos.link} alt='pic' className='h-[20px]  w-auto '/>
                            </a>
                        </div>
                    </div>
                </div>
                <img src={ppc} alt='pic' className='h-56 w-auto md:ml-16'/>
                
            </div>
    );
}

export default PPC;