import React from "react";
import picture from "../Resources/picture.jpg";
import logos from './images';
const IntroWithPic = () => {

    const ColoredLine = ({ color }) => (
    <hr
        style={{
        color,
        backgroundColor: color,
        height: 5
        }}
    />
    );

    return(
        <div className ='flex h-screen'>
            <div className='my-auto grid grid-cols-3 gap-0'>
                <img src={picture} alt='pic' className='h-[250px] rounded-full'/>
                <div className='col-span-2'>
                    <p className='font-Inconsolata text-sm text-port-white my-2 tracking-widest text-left leading-6 tracking-widest'> 
                        Hello! I am Jhosie (pronouced as juicy) a 4th year Computer Science Student at
                        Cebu Institute of Technology.I really like looking at amazingly designed sites.
                        My interest started when we were asked to develop a site and while researching
                        I saw these amazing websites and designs that inspired me to become a developer.
                    </p>
                    <div>
                        <p className='font-Inconsolata text-xl text-port-red my-2  text-left tracking-widest my-5 font-bold'>Technology I have worked with:</p>
                        <div className='grid grid-rows-3 grid-cols-6  font-Karla text-base text-port-white my-2 tracking-widest text-left leading-6 tracking-widest font-bold'>
                            <div className='flex items-center mx-2'>
                                <img src={logos.csharp} alt='pic' className='h-[40px] w-auto '/>
                                <p>C#</p>
                            </div>
                            <div className='flex items-center mx-2'>
                                <img src={logos.python} alt='pic' className='h-[20px] w-auto '/>
                                <p className='ml-2'>Python</p>
                            </div>
                            <div className='flex items-center mx-4'>
                                <img src={logos.html} alt='pic' className='h-[20px] w-auto '/>
                                <p className='ml-1'>HTML</p>
                            </div>
                            <div className='flex items-center mx-2'>
                                <img src={logos.react} alt='pic' className='h-[20px] w-auto '/>
                                <p className='ml-1'>React</p>
                            </div>
                            <div className='flex items-center mx-2'>
                                <img src={logos.tailwind} alt='pic' className='h-[25px] w-auto '/>
                                <p className='ml-1'>Tailwind</p>
                            </div>
                            <div className='flex items-center mx-4'>
                                <img src={logos.flutter} alt='pic' className='h-[30px] w-auto '/>
                                <p>Flutter</p>
                            </div>
                            <div className='flex items-center mx-2'>
                                <img src={logos.c} alt='pic' className='ml-2 h-[23px] w-auto '/>
                                <p className='ml-3'>C</p>
                            </div>
                            <div className='flex items-center mx-2'>
                                <img src={logos.java} alt='pic' className='h-[30px] w-auto '/>
                                <p className='ml-3'>Java</p>
                            </div>
                            <div className='flex items-center mx-4'>
                                <img src={logos.css} alt='pic' className='h-[20px] w-auto '/>
                                <p className='ml-1's>CSS</p>
                            </div>
                             <div className='flex items-center mx-2'>
                                <img src={logos.php} alt='pic' className='h-[20px] w-auto '/>
                                <p className='ml-1'>PHP</p>
                            </div>
                            <div className='flex items-center mx-1'>
                                <img src={logos.javascript} alt='pic' className='h-[20px] w-auto '/>
                                <p>Javascript</p>
                            </div>
                            <div className='col-span-6 m-4'>
                                <ColoredLine color='port-white' />
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
}

export default IntroWithPic;