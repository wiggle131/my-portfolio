import React from "react";
import Accenture from "../Experience/Accenture";

const Achievements = () => {

    return(
        <div className ='flex flex-col h-auto my-96'>
            <p className ='font-Karla font-semibold text-port-white flex-basis-full text-left'>
                &lt; achievements 
                &gt;
            </p>
            {/* IMAGE ON THE LEFT */}
            <div id="carouselAchievemnts" class="carousel slide relative" data-bs-ride="carousel">
                <div class="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
                    <button
                    type="button"
                    data-bs-target="#carouselAchievemnts"
                    data-bs-slide-to="0"
                    class="active"
                    aria-current="true"
                    aria-label="Slide 1"
                    ></button>
                    <button
                    type="button"
                    data-bs-target="#carouselAchievemnts"
                    data-bs-slide-to="1"
                    aria-label="Slide 2"
                    ></button>
                    <button
                    type="button"
                    data-bs-target="#carouselAchievemnts"
                    data-bs-slide-to="2"
                    aria-label="Slide 3"
                    ></button>
                </div>
                <div class="carousel-inner relative w-full overflow-hidden">
                    <div class="carousel-item active float-left w-full">
                        <Accenture />
                    </div>
                    <div class="carousel-item float-left w-full">
                        <Accenture />
                    </div>
                    <div class="carousel-item float-left w-full">
                        <Accenture />
                    </div>
                </div>
                <button
                    class="carousel-control-prev opacity-0  absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
                    type="button"
                    data-bs-target="#carouselAchievemnts"
                    data-bs-slide="prev"
                >
                    <span class="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button
                    class="carousel-control-next opacity-0  absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
                    type="button"
                    data-bs-target="#carouselAchievemnts"
                    data-bs-slide="next"
                >
                    <span class="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
                </div>
            <p className ='font-Karla font-semibold text-port-white flex-basis-full text-left'>
                &lt; achievements 
                /&gt;
            </p>
        </div>
    );
}

export default Achievements;