import React from 'react';
import img1 from '../assets/images/WhatsApp Image 2025-05-05 at 12.41.17 PM.jpg'
import img2 from '../assets/images/2sSUAAAAASUVORK5CYII=.png';
import img3 from '../assets/images/WhatsApp Image 2025-10-14 at 12.20.32 PM.jpeg';

class Sponsorship extends React.Component{

    render(){

        return(

            <>
            <div className="bg-white h-96 md:mt-24 mt-5">
                <h1 className="text-center font-sans md:text-4xl text-3xl capitalize font-semibold">
                    our partners
                </h1>
                <div className="flex flex-wrap justify-center items-center md:gap-20 gap-24 mt-20">
                    <div className="bg-white w-32 h-28">
                        <img src={img1} alt="Orange Liberia" className='hover:cursor-pointer md:w-auto w-28'/>
                        <p className="text-center capitalize font-sans font-normal text-lg">orange liberia</p>
                    </div>
                    <div className="bg-white md:w-32 w-auto h-28">
                        <img src={img2} alt="Transparency International" className='md:w-auto w-20 md:h-auto h-20 hover:cursor-pointer md:mx-0 mx-14'/>
                    <p className="text-center capitalize font-sans font-normal text-lg md:w-auto">
                        transparency international
                    </p>
                    </div>
                    <div className="bg-white w-36 h-28">
                        <img src={img3} alt="Fair Play Music" className='h-20 w-36 hover:cursor-pointer' />
                        <p className="text-center capitalize font-sans font-normal text-lg">
                            fair play music
                        </p>
                    </div>
                </div>
            </div>
            </>
        )
    }
}

export default Sponsorship;