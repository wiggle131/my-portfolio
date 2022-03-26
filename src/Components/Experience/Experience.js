import React from "react";
import Accenture from "./Accenture";
import Developerstudent from "./Developerstudent";
import Css from "./Css";
const Experience = () => {
    return(
        <div className ='flex flex-col h-auto my-20  '>
        {/* lg:mt-[40rem] xl:mt-80 */}
            <div className='my-auto lg:mt-96 xl:mt-0'> 
                <p className ='font-Karla font-semibold text-port-white flex-basis-full text-left'>
                    &lt; experience 
                    &gt;
                </p>
                {/* IMAGE ON THE LEFT */}
                <div id="carouselExampleIndicators" className="carousel slide relative" data-bs-ride="carousel">
                    <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
                        <button
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide-to="0"
                        className="active"
                        aria-current="true"
                        aria-label="Slide 1"
                        ></button>
                        <button
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide-to="1"
                        aria-label="Slide 2"
                        ></button>
                        <button
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide-to="2"
                        aria-label="Slide 3"
                        ></button>
                    </div>
                    <div className="carousel-inner relative w-full overflow-hidden">
                        <div className="carousel-item active float-left w-full">
                            <Accenture />
                        </div>
                        <div className="carousel-item float-left w-full">
                            <Developerstudent />
                        </div>
                        <div className="carousel-item float-left w-full">
                            <Css />
                        </div>
                    </div>
                    <button
                        className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide="prev"
                    >
                        <span className="opacity-0 carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button
                        className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide="next"
                    >
                        <span className="opacity-0 hover carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                    </div>
                <p className ='font-Karla font-semibold text-port-white flex-basis-full text-left'>
                    &lt; experience 
                    /&gt;
                </p>
            </div>  
        </div>
    )
};

export default Experience;