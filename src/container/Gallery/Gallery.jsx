import React from 'react';
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';

import { SubHeading } from '@/components';
import { images } from '@/constants';
import './Gallery.css';

const Gallery = () => {
  const scrollRef = React.useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === 'left') {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };

  const instagramLinks = [
    "https://www.instagram.com/p/Cm0669nSo7O/?img_index=2&igsh=Zmk0dXlzZ3BnMHcz", 
    "https://www.instagram.com/p/CggZZ6lP05n/?img_index=1&igsh=MThtY2o4M2ZmZnNyaA==",
    "https://www.instagram.com/p/Cf8NEyTFXo6/?igsh=cW9yY3FhaHluNXU1",
    "https://www.instagram.com/p/CaTknSCFkvg/?igsh=MXY4Z3VhN2syMHNweQ==",
  ];

  return (
    <div className="app__gallery flex__center flex-col bg-primary-black py-16 px-8 xl:px-24 xl:flex-row font-KaiTi">
      <div className="app__gallery-content flex-one flex justify-center items-center flex-col min-w-[100%] xl:pr-8 sm:min-w-[500px] font-KaiTi">
        <SubHeading title="Instagram" />
        <h1 className="headtext__cormorant font-KaiTi">美食特集</h1>
        <p className="p__opensans mt-8 text-center font-KaiTi" style={{ color: '#AAAAAA'}}>這裡有更多美食等著你們來探索</p>
        <a href="https://www.instagram.com/ft151515/" target="_blank" rel="noopener noreferrer" className="custom__button my-10 xl:mt-8 font-KaiTi inline-block text-center">了解更多</a>
      </div>
      <div className="app__gallery-images flex-one flex flex-row max-w-[90%] relative xl:max-w-[50%]">
        <div className="app__gallery-images_container flex flex-row w-max overflow-x-scroll" ref={scrollRef}>

          {[images.food01, images.food02, images.food03, images.food04].map((image, index) => (
            <div className="app__gallery-images_card relative min-w-[240px] h-[320px] mr-8 flex__center sm:min-w-[301px] sm:h-[447px]" key={`gallery_image-${index + 1}`}>
              <img src={image} alt="gallery_image" className="w-full h-full object-cover opacity-100 duration-500 ease-in-out" />
              <a href={instagramLinks[index]} target="_blank" rel="noopener noreferrer">
                <BsInstagram className="gallery__image-icon absolute text-primary-white text-size-3xl opacity-0 duration-500 ease-in-out cursor-pointer hover:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
              </a>
            </div>
          ))}

        </div>
        <div className="app__gallery-images_arrows w-full flex justify-between items-center py-0 px-4 absolute bottom-[5%]">
          <BsArrowLeftShort className="gallery__arrow-icon text-primary-golden text-size-4xl cursor-pointer bg-primary-black rounded-md hover:text-primary-white" onClick={() => scroll('left')} />
          <BsArrowRightShort className="gallery__arrow-icon text-primary-golden text-size-4xl cursor-pointer bg-primary-black rounded-md hover:text-primary-white" onClick={() => scroll('right')} />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
