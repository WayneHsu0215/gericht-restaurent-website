import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

import { FooterOverlay, Newsletter } from '@/components';
import { images } from '@/constants';
import './Footer.css';

const Footer = () => (
  <div className="app__footer section__padding w-full relative z-1 flex justify-start items-center flex-col bg-primary-black pt-0 sm:px-0 sm:pb-8" id="login">
    <FooterOverlay />
    <Newsletter />

    <div className="app__footer-links w-full flex items-start flex-col justify-between lg:flex-row mt-20 py-0 px-8 font-KaiTi">
      <div className="app__footer-links_contact flex-one my-8 mx-0 xl:m-4 text-left lg:text-center font-KaiTi">
        <h1 className="app__footer-headtext font-KaiTi text-primary-white font-normal leading-10 tracking-wider capitalize text-size-3xl mb-4 font-black big:text-[51px]">聯絡我們</h1>
        <p className="text-white font-KaiTi">地址：638雲林縣麥寮鄉仁德西路一段25號</p>
        <p className="text-white font-KaiTi">電話號碼：0965 515 150</p>
        <a href="https://shop.ichefpos.com/store/6koqeTEY/ordering" target="_blank" rel="noopener noreferrer">
          <button type="button" className="custom__button mt-4 font-KaiTi">點餐連結</button>
        </a>
      </div>

      <div className="app__footer-links_logo flex-one my-8 mx-0 xl:m-4 text-left lg:text-center">
        <img src={images.logoAAA} alt="footer_logo" className='w-4/5 mobile:w-[210px] mb-3 lg:mx-auto'/>
        <p className="text-white font-KaiTi lg:text-center text-left">&quot;食我鍋物，拾你初心&quot;</p>

        <img src={images.spoon} className="spoon__img lg:mx-auto" style={{marginTop: 15}}/>
        <div className="app__footer-links_icons mt-2 flex flex-row lg:justify-center">
          <a href="https://www.facebook.com/p/%E6%8B%BE%E5%90%BE%E9%8D%8B%E7%89%A9-100063914505991/" target="_blank"
             rel="noopener noreferrer">
            <FiFacebook className="text-primary-white m-2 text-2xl cursor-pointer hover:text-primary-golden"/>
          </a>
          <a href="https://www.instagram.com/ft151515/" target="_blank" rel="noopener noreferrer">
            <FiInstagram className="text-primary-white m-2 text-2xl cursor-pointer hover:text-primary-golden"/>
          </a>
        </div>
      </div>

      <div className="app__footer-links_work flex-one my-8 mx-0 xl:m-4 text-left lg:text-center">

        <h1 className="app__footer-headtext font-KaiTi text-primary-white font-normal leading-10 tracking-wider capitalize text-size-3xl mb-4 big:text-[51px] font-black">開店時間</h1>
        <p className="text-white font-KaiTi">星期二-星期日</p>
        <p className="p__opensans">11:00 am - 14:00 pm</p>
        <p className="p__opensans">16:00 pm - 21:00 pm</p>
      </div>
    </div>

    <div className="footer__copyright mt-12 font-KaiTi">
      <p className="p__opensans">2024 Wayne Hsu. All Rights reserved.</p>
    </div>

  </div>
);

export default Footer;
