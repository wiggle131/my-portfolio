import React from "react";
import trendmicro from "../Resources/achievements/trendmicro.jpg";
import ColoredLine from "../ColoredLine";


const Trendmicro = ({logos}) => {
    return (
       <div className='flex my-16 flex-col flex-col-reverse  sm:flex-row items-center'>
                <div>
                    <p className='font-Karla text-xl sm:text-3xl text-port-red my-2 text-left tracking-widest font-extrabold'>
                        Trend Micro University CTF 2019
                    </p>
                     <div className='flex justify-start'>
                        <p className='font-Karla text-lg md:text-2xl text-port-orange italic font-bold'> Winners Visayas Online Qualifier </p>
                    </div>
                    <p className='font-Inconsolata text-sm sm:text-xl text-port-white mt-2 mb-[4.5rem] text-left leading-6 tracking-widest'> 
                      A countrywide Capture the Flag competition participated by both
                       students and professionals alike.
                    </p>
                    <div className='col-span-6 mt-4 mb-2'>
                                <ColoredLine color='#FCBF49'/>
                    </div>
                    <div className='flex justify-center md:justify-start '>
                       <div className='flex items-center mx-2 z-50'>
                            <a href='https://www.facebook.com/1376692799081950/posts/2576003139150904/'  target="_blank" rel="noreferrer">
                                <img src={logos.link} alt='pic' className='h-[20px] w-auto '/>
                            </a>
                        </div>
                    </div>
                </div>
                
                <img src={trendmicro} alt='pic' className='h-56 w-auto md:ml-16'/>
                
            </div>
    );
}

export default Trendmicro;