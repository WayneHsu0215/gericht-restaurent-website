import React, { useState, useEffect} from 'react';

import { images } from '@/constants';
import './AboutUs.css';

const AboutUs = () => {
  const [showButton, setShowButton] = useState(false);
        let timeoutId = null; // 用來存儲 setTimeout
      
        useEffect(() => {
          const handleScroll = () => {
            setShowButton(true); // 滾動時顯示按鈕
      
            // 清除之前的定時器，防止多次執行
            if (timeoutId) {
              clearTimeout(timeoutId);
            }
      
            // 設置 0.5 秒後隱藏按鈕
            timeoutId = setTimeout(() => {
              setShowButton(false);
            }, 700);
          };
      
          window.addEventListener("scroll", handleScroll);
      
          return () => {
            window.removeEventListener("scroll", handleScroll);
            clearTimeout(timeoutId); // 清除定時器，避免內存洩漏
          };
        }, []);
  return(
  <div className="relative app__bg flex__center section__padding" id="about">
    <div className="w-full z-2 flex__center flex-col lg:flex-row font-KaiTi">
      <div className=" flex-one flex justify-end items-end flex-col text-right font-KaiTi">
        <h1 className="headtext__cormorant font-KaiTi">關於我們</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans mx-0 my-6 text-primary-gray font-KaiTi">   在雲林這片純樸土地上，拾伍鍋物秉持著「用心熬湯、認真待客」的初心誕生。我們相信，一鍋好湯，不僅是味覺的饗宴，更是人與人之間的溫度傳遞。從湯底的每一個細節、食材的新鮮挑選，到環境的舒適氛圍，我們堅持只給顧客最真誠的體驗。

          拾伍，象徵「食我」，也代表我們對「十五道關卡」精選食材的用心。我們不是追求華麗的擺盤，而是希望每一位來到這裡的顧客，都能「好好吃一頓飯，好好過一天」。

        </p>
        
      </div>

      <div className="my-1 mx-2 lg:my-8 lg:mx-16 lg:rotate-0 flex__center">
        <img src={images.soup} alt="about_soup" className='h-60wh lg:h-80vh 2xl:h-50vh brightness-85'/>
      </div> 

      <div className=" flex-one flex justify-start items-start flex-col text-left font-KaiTi">
        <h1 className="headtext__cormorant font-KaiTi">我們的歷史</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans mx-0 my-6 text-primary-gray font-KaiTi">創立於2022年冬天，拾伍鍋物從一間簡單的小店開始，初衷只是想煮一鍋自己喜歡的湯。那年特別冷，老闆親手熬了一鍋牛骨高湯招待朋友，意外地獲得大好評，於是開店的想法慢慢萌芽。

          我們走過原物料上漲的挑戰，也曾在夏天淡季苦撐營運，但靠著社區居民的支持與口耳相傳，拾伍鍋物慢慢在麥寮鄉三盛村站穩了腳步。

          至今，我們依然每日清晨熬湯、不用湯粉，延續創立初衷，也期待將這份「鍋中的溫暖」帶給更多人。</p>
        
      </div>
      {/* 回到頂部按鈕 */}
      {showButton && (
        <button
          type = 'button'
          className="custom__button font-KaiTi w-30 py-2 text-xl fixed bottom-5 right-5 z-50"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          回到頂部
        </button>
      )}
      </div>
  </div>
);
};

export default AboutUs;
