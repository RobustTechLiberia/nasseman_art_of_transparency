import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import DemoCarousel from './carousel';


class HeroImage extends React.Component {
    render() {
        return ( 
            <div className="flex flex-wrap gap-0 md:gap-0 justify-center bg-white mx-auto mt-24 sm:mt-52 md:mt-52 border-none">

                <div className="w-xl bg-black h-96 mt-5 md:mt-0">
                    <DemoCarousel />
                </div>
                <div className="w-xl bg-red-900 md:h-96 h-auto">
                    <h1 className="text-white mx-12 md:mx-20 text-5xl font-semibold md:text-4xl font-sans capitalize md:pt-5 pt-10">
                        empowering youth against coruption &amp; injustice
                    </h1>
                    <p className="font-sans font-thin text-lg text-white md:mx-20 py-5 mx-12">
                        Nasseman Art For Transparency (NAFT) is a Non-Governmental Organization (NGO) founded by Mr. Rabbie Nassrallah, popularly known as NASSEMAN, a Global Music Anti-Corruption Ambassador for Transparency International and FairPlay Music.
                    </p>
                    <div className="flex justify-start mb-10 mx-12 md:mx-20">
                        <button className="border border-white px-8 py-2 rounded xl text-white font-sans capitalize hover:underline cursor-pointer">
                            join us
                        </button>
                    </div>
                </div>
            </div>

        );
    }
}

export default HeroImage;