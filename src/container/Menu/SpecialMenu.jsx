import React from 'react';
import { useNavigate } from 'react-router-dom'; 

import { SubHeading, MenuItem } from '@/components';
import { data, images } from '@/constants';
import './SpecialMenu.css';

const SpecialMenu = () => {
  const navigate = useNavigate(); // 用於頁面跳轉
  return(
  <div className="flex-col bg-primary-black flex__center section__padding font-KaiTi" id="menu" >
    <div className="mb-8 m-auto flex flex-col justify-center items-center font-KaiTi">
      <SubHeading title="老闆推薦"/>
      <h1 className="headtext__cormorant font-KaiTi">美味鍋物</h1>
    </div>

    <div className="app__specialMenu-menu w-full mt-8 mx-0 flex justify-center items-center flex-col lg:items-start lg:flex-row font-KaiTi">
      <div className="app__specialMenu-menu_soup  flex__center flex-one w-full flex-col font-KaiTi">
        <p className="app__specialMenu-menu_heading font-semibold text-4xl leading-9 tracking-wider text-primary-white md:text-5xl font-KaiTi">湯底</p>
        <div className="app__specialMenu_menu_items flex flex-col mx-0 my-8 w-full">
          {data.soup.map((soup, index) => (
            <MenuItem key={soup.title + index} title={soup.title} price={soup.price} tags={soup.tags} />
          ))}
        </div>
      </div>

      <div className="app__specialMenu-menu_img w-full mt-4 mb-12 mx-0 lg:w-[410px] lg:mx-8 lg:my-0 2xl:w-[650px]">
        <img src={images.menuAAA} alt="menu__img" className='m-auto w-auto h-auto 2xl:h-[920px]'/>
      </div>

      <div className="app__specialMenu-menu_hotpot  flex__center flex-one w-full flex-col font-KaiTi">
        <p className="app__specialMenu-menu_heading font-semibold text-4xl leading-9 tracking-wider text-primary-white md:text-5xl font-KaiTi">主鍋</p>
        <div className="app__specialMenu_menu_items flex flex-col mx-0 my-8 w-full">
          {data.hotpot.map((hotpot, index) => (
            <MenuItem key={hotpot.title + index} title={hotpot.title} price={hotpot.price} tags={hotpot.tags} />
          ))}
        </div>
      </div>
    </div>
    <div className="font-KaiTi mt-[-100px]">
        <button
          type="button"
          className="custom__button font-KaiTi"
          onClick={() => navigate('/menu')} // 跳轉到 /menu
        >
          查看更多
        </button>
      </div>
  </div>
)};

export default SpecialMenu;
