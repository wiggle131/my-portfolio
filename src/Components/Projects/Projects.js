import React from "react";
import weather from "../Resources/projects/weather.png"
import portfolio from "../Resources/projects/portfolio.PNG"
import logos from "../Resources/images";
import dive from "../Resources/projects/dive.PNG"
import ColoredLine from "../ColoredLine";

const Projects = () => {

    return(
        <div className ='flex flex-col h-auto xl:my-40'>
            <div className=''>
                <p className ='font-Karla font-semibold text-port-white flex-basis-full text-left'>
                    &lt; projects 
                    &gt;
                </p>
                {/* IMAGE ON THE LEFT */}
                <div className='flex my-16 flex-col xl:flex-row'>
                    <img src={weather} alt='pic' className='xl:h-56 h-auto w-auto xl:mr-16'/>
                    <div>
                        <p className='font-Karla text-3xl md:text-5xl text-port-red my-2 text-right tracking-widest font-extrabold'>
                            Weather
                        </p>
                        <div  className='flex justify-end'>
                            <div className='flex items-center mx-2'>
                                <a href='https://www.figma.com/file/0ZWKvj6KEz435rfLMxhKX5/Weather-Forecasting'  target="_blank" rel="noopener noreferrer" aria-label='figma'>
                                    <img src={logos.figma} alt='pic' className='h-[20px] w-auto '/>
                                </a>
                            </div>
                            <div className='flex items-center mx-2'>
                                <a href='https://github.com/wiggle131/weather-forecasting'  target="_blank" rel="noopener noreferrer" aria-label='github'>
                                    <img src={logos.githuborange} alt='pic' className='h-[20px] w-auto '/>
                                </a>
                            </div>
                            <div className='flex items-center mx-2'>
                                <a href='https://wiggle131.github.io/weather-forecasting/'  target="_blank" rel="noopener noreferrer" aria-label='link'>
                                    <img src={logos.link} alt='pic' className='h-[20px] w-auto '/>
                                </a>
                            </div>
                        </div>
                        <p className='font-Inconsolata text-sm md:text-xl text-port-white my-2 text-right leading-6 tracking-widest'> 
                        Weather forecasting site that uses the LocationIQ Api and Position 
                        Stack Api And shows the current weather as well as the weather in 
                        the next 48 hours
                        </p>
                        <div className='col-span-6 mt-4 mb-2'>
                                    <ColoredLine color='#FCBF49'/>
                        </div>
                        <div className='flex justify-end font-Karla text-port-white text-xs'>
                            <div className='flex items-center mx-2'>
                                <img src={logos.locationIQ} alt='pic' className='h-[20px] w-auto '/>
                                <p className='ml-1'>LocationIQ API</p>
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
                              <div className='flex items-center ml-4 mr-1'>
                                <img src={logos.framer} alt='pic' className='h-[15px] w-auto '/>
                                <p className='ml-1'>Framer Motion</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex my-16 flex-col-reverse xl:flex-row'>
                    <div>
                        <p className='font-Karla text-3xl md:text-5xl text-port-red my-2 text-left tracking-widest font-extrabold'>
                            Portfolio
                        </p>
                        <div  className='flex justify-start'>
                            <div className='flex items-center mx-2'>
                                <a href='https://www.figma.com/file/xJLhskr7k8TsdxpJ6NfUaT/My_Portfolio'  target="_blank" rel="noopener noreferrer" aria-label='figma'>
                                    <img src={logos.figma} alt='pic' className='h-[20px] w-auto '/>
                                </a>
                            </div>
                            <div className='flex items-center mx-2'>
                                <a href='https://github.com/wiggle131/my-portfolio'  target="_blank" rel="noopener noreferrer">
                                    <img src={logos.githuborange} alt='pic' className='h-[20px] w-auto '/>
                                </a>
                            </div>
                            <div className='flex items-center mx-2'>
                                <a href='https://wiggle131.github.io/my-portfolio/'  target="_blank" rel="noopener noreferrer">
                                    <img src={logos.link} alt='pic' className='h-[20px] w-auto '/>
                                </a>
                            </div>
                        </div>
                        <p className='font-Inconsolata text-sm md:text-xl text-port-white my-2 text-left leading-6 tracking-widest'> 
                        Personal portfolio for moi. Uses the Tailwind Library. It shows my projects
                        ,my achievements and my experiences.
                        </p>
                        <div className='col-span-6 mt-4 mb-2'>
                                    <ColoredLine color='#FCBF49'/>
                        </div>
                        <div className='flex justify-start font-Karla text-port-white text-xs'>
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
                    <img src={portfolio} alt='pic' className='xl:h-56 h-auto w-auto xl:ml-16 border-gray-700 border-2'/>
                </div>
                <div className='flex my-16 flex-col xl:flex-row'>
                    <img src={dive} alt='pic' className='xl:h-56 h-auto w-auto xl:mr-16'/>
                    <div>
                        <p className='font-Karla text-3xl md:text-5xl text-port-red my-2 text-right tracking-widest font-extrabold'>
                            Dive CRUD
                        </p>
                        <div  className='flex justify-end'>
                            <div className='flex items-center mx-2'>
                                <a href='https://www.figma.com/file/0ZWKvj6KEz435rfLMxhKX5/Weather-Forecasting'  target="_blank" rel="noopener noreferrer" aria-label='figma'>
                                    <img src={logos.figma} alt='pic' className='h-[20px] w-auto '/>
                                </a>
                            </div>
                            <div className='flex items-center mx-2'>
                                <a href='https://github.com/wiggle131/weather-forecasting'  target="_blank" rel="noopener noreferrer" aria-label='github'>
                                    <img src={logos.githuborange} alt='pic' className='h-[20px] w-auto '/>
                                </a>
                            </div>
                            <div className='flex items-center mx-2'>
                                <a href='https://wiggle131.github.io/weather-forecasting/'  target="_blank" rel="noopener noreferrer" aria-label='link'>
                                    <img src={logos.link} alt='pic' className='h-[20px] w-auto '/>
                                </a>
                            </div>
                        </div>
                        <p className='font-Inconsolata text-sm md:text-xl text-port-white my-2 text-right leading-6 tracking-widest'> 
                        A basic site that uses Create Read Update and Delete. It allows users to
                        enter their name and the depth they reached during their dive, 
                        </p>
                        <div className='col-span-6 mt-4 mb-2'>
                                    <ColoredLine color='#FCBF49'/>
                        </div>
                        <div className='flex justify-end font-Karla text-port-white text-xs'>
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
                
                <p className ='font-Karla font-semibold text-port-white flex-basis-full text-left'>
                    &lt; projects 
                    /&gt;
                </p>
            </div>
        </div>
    )
};

export default Projects;