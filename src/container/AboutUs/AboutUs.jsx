import React from 'react';

import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className="relative app__bg flex__center section__padding" id="about">
    <div className="w-full z-2 flex__center flex-col lg:flex-row font-KaiTi">
      <div className=" flex-one flex justify-end items-end flex-col text-right font-KaiTi">
        <h1 className="headtext__cormorant font-KaiTi">關於我們</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans mx-0 my-6 text-primary-gray font-KaiTi">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.</p>
        
      </div>

      <div className="my-1 mx-2 lg:my-8 lg:mx-16 lg:rotate-0 flex__center">
        <img src={images.soup} alt="about_soup" className='h-60wh lg:h-80vh 2xl:h-50vh brightness-85'/>
      </div> 

      <div className=" flex-one flex justify-start items-start flex-col text-left font-KaiTi">
        <h1 className="headtext__cormorant font-KaiTi">我們的歷史</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans mx-0 my-6 text-primary-gray font-KaiTi">Adipiscing tempus ullamcorper lobortis odio tellus arcu volutpat. Risus placerat morbi volutpat habitasse interdum mi aliquam In sed odio nec aliquet.</p>
        
      </div>
    </div>
  </div>
);

export default AboutUs;
