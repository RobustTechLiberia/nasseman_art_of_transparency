import React from 'react'
import img from '../assets/images/WhatsApp Image 2025-10-14 at 9.24.48 AM.jpeg'

class Support extends React.Component{

    render(){

        return(

            <>
            <div className="bg-white flex justify-center items-center md:justify-evenly flex-wrap gap-5 md:gap-0 md:h-96 mt-10 md:mt-10">
                <div className="w-80 bg-black h-96 rounded-md">

                    <img src= {img} alt="" className='h-full w-full rounded-md object-cover hover:bg-blend-overlay hover:cursor-pointer hover:opacity-50' />
                </div>
                <div className="flex-col justify-center max-w-xl h-96 bg-white mt-8 md:mt-8 md:mx-5 mx-5">
                    <h1 className="md:text-center text-center font-sans font-semibold text-4xl capitalize py-5">support us</h1>
                    <p className="text-center md:text-center font-sans font-normal normal-case text-lg">
                     We educate youth and raise awareness 
                    about the dangers of corruption, aspiring 
                    towards a corruption- free society. <br />Download our <span className="text-red-900 hover:underline">
                        <a href="#" download>
                            Brochure
                        </a>
                    </span>
                    </p>
                </div>
            </div>
            </>


        )

    }

}

export default Support;