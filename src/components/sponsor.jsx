import React from 'react';
import img1 from '../assets/images/WhatsApp Image 2025-05-05 at 12.41.17 PM.jpg'
import img2 from '../assets/images/2sSUAAAAASUVORK5CYII=.png';
import img3 from '../assets/images/WhatsApp Image 2025-10-14 at 12.20.32 PM.jpeg';

class Sponsorship extends React.Component{

    render(){

        return(

            <>
            <div className="bg-white h-96 mt-24">
                <h1 className="text-center font-sans md:text-4xl text-3xl capitalize font-semibold">
                    our partners
                </h1>
                <div className="flex flex-wrap justify-evenly md:gap-2 gap-10 mt-20">
                    <div className="bg-white w-32 h-28">
                        <img src={img1} alt="Orange Liberia" className='hover:cursor-pointer'/>
                        <p className="text-center capitalize font-sans font-normal text-lg">orange liberia</p>
                    </div>
                    <div className="bg-white w-32 h-28">
                        <img src={img2} alt="Transparency International" className='h-28 hover:cursor-pointer'/>
                    <p className="text-center capitalize font-sans font-normal text-lg">
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