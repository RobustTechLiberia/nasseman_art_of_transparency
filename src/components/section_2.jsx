import React from "react";
import img from "../assets/images/WhatsApp Image 2025-10-13 at 8.14.08 PM.jpeg";
import $ from "jquery";
import { Button } from "flowbite-react";

class Sec extends React.Component {
  componentDidMount() {
    $(document).ready(function () {
      $("span#readmore").hide();

      $("#btn_readmore").click(function () {
        $("span#readmore").toggle();
      });
    });
  }

  render() {
    return (
      <div data-theme="light">
        <div className="flex flex-wrap md:justify-evenly justify-center items-center bg-white h-auto md:h-96 md:gap-24 md:gap-y-0 gap-y-16">
          <div className="flex-col justify-center max-w-xl h-96 bg-white">
            <div className="mt-8 md:mt-8 md:mx-5 mx-5">
              <p className="text-left font-sans font-normal normal-case text-lg">
                Nasseman Art For Transparency (NAFT) is a Non-Governmental Organization (NGO) founded by Mr. Rabbie Nassrallah, popularly known as NASSEMAN, a Global Music Anti- Corruption Ambassador for Transparency International and FairPlay Music.
                <span id="readmore">
                  Nasseman Art For Transparency is on a mission to empower young people to raise their voices against corruption and injustice through various artistic mediums such as education, music, art, drama, and films.
                </span>
                <Button
                  className="bg-white text-red-900 hover:bg-white hover:text-red-900 hover:underline text-lg focus:ring-0 border-none px-1 py-3 text-left font-sans normal-case mx-0 cursor-pointer"
                  id="btn_readmore"
                >
                  Read more
                </Button>
              </p>
            </div>
          </div>
          <div className="w-80 h-96 bg-black md:mt-5 mt-3 rounded-lg">
            <img
              src={img}
              alt="Nasseman"
              className="w-full bg-cover h-full rounded-lg hover:bg-blend-overlay hover:opacity-50 cursor-pointer"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Sec;