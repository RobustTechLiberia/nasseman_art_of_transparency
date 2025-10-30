import React from "react";
import img from '../assets/images/WhatsApp Image 2025-10-13 at 8.14.08 PM.jpeg'
import $ from "jquery";

class Sec extends React.Component {

    componentDidMount(){

        $(document).ready(function() {

  $('span#readmore').hide();

  $("#btn_readmore").click(function() {
    $('span#readmore').toggle();
  });
});

    }
   
    render() {

        
        return (
            <>
                <div className="flex flex-wrap md:justify-evenly justify-center items-center bg-white h-auto md:h-96 md:gap-14">
                    <div className="flex-col justify-center max-w-xl h-96 bg-white">
                    <div className="mt-8 md:mt-8 md:mx-5 mx-5">
                       <p className="text-left font-sans font-normal normal-case text-lg">
                         Nasseman Art For Transparency (NAFT) is a Non-Governmental Organization (NGO) founded by Mr. Rabbie Nassrallah, popularly known as NASSEMAN, a Global Music Anti- Corruption Ambassador for Transparency International and FairPlay Music.
                         <span id="readmore">
                            Nasseman Art For Transparency is on a mission to empower young people to raise their voices against corruption and injustice through various artistic mediums such as education, music, art, drama, and films.
                         </span>
                         <button className="border-none bg-white text-left  py-3 text-red-900 font-sans normal-case mx-0 hover:underline cursor-pointer px-1" id="btn_readmore"> Read more</button>
                       </p>
</div>      
                     </div>
                    <div className="w-80 h-96 bg-black md:mt-5 mt-3 rounded-lg">
                        <img src={img} alt="Nasseman" className="w-full bg-cover h-full rounded-lg hover:bg-blend-overlay hover:opacity-50 cursor-pointer" />
                    </div>
                </div>
            </>
        );
    }
}

export default Sec;
