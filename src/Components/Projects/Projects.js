import React from "react";
import weather from "../Resources/projects/weather.png"
import logos from '../IntroWithPic/images';
const Projects = () => {

     const ColoredLine = ({ color }) => (
    <hr
        style={{
        color,
        backgroundColor: color,
        height: 1.5,
        border: 0,
        }}
    />
    );

    return(
        <div className ='flex flex-col h-screen '>
            <p className ='font-Karla font-semibold text-port-white flex-basis-full text-left'>
                &lt; projects 
                &gt;
            </p>
            {/* IMAGE ON THE LEFT */}
            <div className='flex my-16'>
                <img src={weather} alt='pic' className='h-56 w-auto mr-16'/>
                <div>
                    <p className='font-Karla text-5xl text-port-red my-2 text-right tracking-widest font-extrabold'>
                        Weather
                    </p>
                    <div  className='flex justify-end'>
                        <div className='flex items-center mx-2'>
                            <a href='https://github.com/wiggle131/is-the-rock-wet'  target="_blank" rel="noopener noreferrer">
                                <img src={logos.githuborange} alt='pic' className='h-[20px] w-auto '/>
                            </a>
                        </div>
                        <div className='flex items-center mx-2'>
                            <a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'  target="_blank" rel="noopener noreferrer">
                                <img src={logos.link} alt='pic' className='h-[20px] w-auto '/>
                            </a>
                        </div>
                    </div>
                    <p className='font-Inconsolata text-xl text-port-white my-2 text-right leading-6 tracking-widest'> 
                       Weather forecasting site that uses the OneWeather Api and Position 
                       Stack Api And shows the current weather as well as the weather in 
                       the next 48 hours
                    </p>
                    <div className='col-span-6 mt-4 mb-2'>
                                <ColoredLine color='#FCBF49'/>
                    </div>
                    <div className='flex justify-end font-Karla text-port-white text-xs'>
                        <div className='flex items-center mx-2'>
                            <img src={logos.positionstack} alt='pic' className='h-[20px] w-auto '/>
                            <p className='ml-1'>PositionStack API</p>
                        </div>
                        <div className='flex items-center mx-2'>
                            <img src={logos.openweather} alt='pic' className='h-[20px] w-auto '/>
                            <p className='ml-1'>OpenWeather API</p>
                        </div>
                        <div className='flex items-center mx-4'>
                            <img src={logos.tailwind} alt='pic' className='h-[20px] w-auto '/>
                            <p className='ml-1'>Tailwind</p>
                        </div>
                        <div className='flex items-center ml-4 mr-1'>
                            <img src={logos.react} alt='pic' className='h-[15px] w-auto '/>
                            <p className='ml-1'>React</p>
                        </div>
                    </div>
                </div>
            </div>
               <div className='flex my-16'>
                <div>
                    <p className='font-Karla text-5xl text-port-red my-2 text-left tracking-widest font-extrabold'>
                        Weather
                    </p>
                    <div  className='flex justify-start'>
                        <div className='flex items-center mx-2'>
                            <a href='https://github.com/wiggle131/is-the-rock-wet'  target="_blank" rel="noopener noreferrer">
                                <img src={logos.githuborange} alt='pic' className='h-[20px] w-auto '/>
                            </a>
                        </div>
                        <div className='flex items-center mx-2'>
                            <a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'  target="_blank" rel="noopener noreferrer">
                                <img src={logos.link} alt='pic' className='h-[20px] w-auto '/>
                            </a>
                        </div>
                    </div>
                    <p className='font-Inconsolata text-xl text-port-white my-2 text-left leading-6 tracking-widest'> 
                       Weather forecasting site that uses the OneWeather Api and Position 
                       Stack Api And shows the current weather as well as the weather in 
                       the next 48 hours
                    </p>
                    <div className='col-span-6 mt-4 mb-2'>
                                <ColoredLine color='#FCBF49'/>
                    </div>
                    <div className='flex justify-start font-Karla text-port-white text-xs'>
                        <div className='flex items-center mx-2'>
                            <img src={logos.positionstack} alt='pic' className='h-[20px] w-auto '/>
                            <p className='ml-1'>PositionStack API</p>
                        </div>
                        <div className='flex items-center mx-2'>
                            <img src={logos.openweather} alt='pic' className='h-[20px] w-auto '/>
                            <p className='ml-1'>OpenWeather API</p>
                        </div>
                        <div className='flex items-center mx-4'>
                            <img src={logos.tailwind} alt='pic' className='h-[20px] w-auto '/>
                            <p className='ml-1'>Tailwind</p>
                        </div>
                        <div className='flex items-center ml-4 mr-1'>
                            <img src={logos.react} alt='pic' className='h-[15px] w-auto '/>
                            <p className='ml-1'>React</p>
                        </div>
                    </div>
                </div>
                <img src={weather} alt='pic' className='h-56 w-auto ml-16'/>
            </div>
             <p className ='font-Karla font-semibold text-port-white flex-basis-full text-left'>
                &lt; projects 
                /&gt;
            </p>
        </div>
    )
};

export default Projects;