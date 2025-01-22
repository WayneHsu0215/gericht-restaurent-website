import React, { useState, useEffect, useRef } from 'react';
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs';
import picture01 from '../../assets/01.png';  // 直接导入每张图片
import picture02 from '../../assets/02.png';
import picture03 from '../../assets/03.png';
import picture04 from '../../assets/04.png';
import picture05 from '../../assets/05.png';
import picture06 from '../../assets/06.png';
import picture07 from '../../assets/07.png';
import './Intro.css';

const Intro = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const intervalRef = useRef();

  const images = [picture01, picture02, picture03, picture04, picture05, picture06, picture07,];

  const changeImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length); // 循环切换图片
  };

  useEffect(() => {
    intervalRef.current = setInterval(changeImage, 2000); // 每3秒切换一次图片
    
    return () => clearInterval(intervalRef.current); // 清除定时器
  }, []);

  return (
    <div className="h-screen relative " style={{ backgroundColor: 'black' }}>
      <img
        src={images[currentImage]} // 使用 images 数组中的当前图片
        alt="Slideshow"
        style={{ width: '100%', height: '100%', objectFit: 'contain', }}
      />
      <div className="absolute inset-0 bg-[rgba(6, 6, 6, 0.65)] flex__center">
      </div>
    </div>
  );
};

export default Intro;
