import React from "react";
import css from "../Resources/experience/ccs.jpg"
import ColoredLine from "../ColoredLine";

const Css = () => {

    return(
         <div className='flex my-16 flex-col xl:flex-row'>
                <img src={css} alt='pic' className='xl:h-52 h-30 w-auto xl:mr-16'/>
                <div>
                    <p className='font-Karla text-2xl md:text-5xl text-port-red my-2 text-right tracking-widest font-extrabold'>
                       Computer Students' Society
                    </p>
                     <div className='flex justify-end'>
                        <p className='font-Karla text-lg md:text-2xl text-port-orange font-bold'> Media and Promotions Asst. Lead </p>
                     </div>
                    <p className='font-Inconsolata text-sm md:text-xl text-port-white my-2 text-right leading-6 tracking-widest'> 
                      Selected as Asst. Lead for the Media and Promotions faction of the department organization and generated
1000+ engagements on the page.
                    </p>
                    <div className='col-span-6 mt-4 mb-2'>
                                <ColoredLine color='#FCBF49'/>
                    </div>
                    <div className='flex justify-end '>
                        <p className='font-Karla text-port-white text-base md:text-xl italic font-bold'>2020-2021</p>
                    </div>
                </div>
            </div>
    );
}
export default Css;