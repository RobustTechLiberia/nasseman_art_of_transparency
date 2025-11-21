import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../assets/images/WhatsApp Image 2025-05-05 at 12.41.17 PM.jpg';
import img2 from '../assets/images/2sSUAAAAASUVORK5CYII=.png';
import img3 from '../assets/images/WhatsApp Image 2025-10-14 at 12.20.32 PM.jpeg';

const partners = [
  { img: img1, alt: 'Orange Liberia', label: 'orange liberia' },
  { img: img2, alt: 'Transparency International', label: 'transparency international' },
  { img: img3, alt: 'Fair Play Music', label: 'fair play music' },
];

const Sponsorship = () => {
  return (
    <div className="bg-white py-10 mt-96 md:mt-24">
      <h1 className="text-center font-sans md:text-4xl text-3xl capitalize font-semibold mb-20">
        our partners
      </h1>
      <div className="px-4 md:px-20">
        <Carousel
          showArrows={false}
          showThumbs={false}
          showStatus={false}
          infiniteLoop
          autoPlay
          interval={3000}
          centerMode
          centerSlidePercentage={33}
          swipeable
          emulateTouch
        >
          {partners.map((partner, index) => (
            <div key={index} className="flex flex-col items-center justify-center">
              <img
                src={partner.img}
                alt={partner.alt}
                className="w-28 h-20 object-contain mb-2 hover:cursor-pointer"
              />
              <p className="text-center capitalize font-sans font-normal text-lg">
                {partner.label}
              </p>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Sponsorship;