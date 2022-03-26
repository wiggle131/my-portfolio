import React from "react";
import dsc from "../Resources/experience/dsc.jpg"
import ColoredLine from "../ColoredLine";

const Developerstudent = () => {

    return(
         <div className='flex items-center my-16 flex-col xl:flex-row'>
                <img src={dsc} alt='pic' className=' xl:h-64 h-auto w-auto xl:mr-16'/>
                <div>
                    <p className='font-Karla text-2xl md:text-4xl text-port-red my-2 text-right tracking-widest font-extrabold'>
                        Google Developer Student Clubs - CIT
                    </p>
                     <div className='flex justify-end'>
                        <p className='font-Karla text-lg md:text-2xl text-port-orange font-bold'> Core Member -Media and Creatives </p>
                     </div>
                    <p className='font-Inconsolata text-sm md:text-xl text-port-white my-2 text-right leading-6 tracking-widest'> 
                      Spearheaded the media and promotions page for the DSC CIT-U branch which accumulated hundreds of userengagements
                    </p>
                    <div className='col-span-6 mt-4 mb-2'>
                                <ColoredLine color='#FCBF49'/>
                    </div>
                    <div className='flex justify-end '>
                        <p className='font-Karla text-port-white text-base md:text-xl italic font-bold'>2019-2020</p>
                    </div>
                </div>
            </div>
    );
}
export default Developerstudent;