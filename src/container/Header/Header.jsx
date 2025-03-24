import React, { useState, useEffect } from 'react';
import { SubHeading } from '@/components';
import { images } from '@/constants';
import './Header.css';

const Header = () => {
    const [text, setText] = useState('');
    const fullText = '食我鍋物\n    拾你初心'; // 在 '拾你初心' 前添加空格


    useEffect(() => {
        const startTime = performance.now();

        const animateText = () => {
            const currentIndex = Math.min(Math.floor((performance.now() - startTime) / 100), fullText.length);
            setText(fullText.slice(0, currentIndex));

            if (currentIndex < fullText.length) {
                requestAnimationFrame(animateText); // Continue animating
            }
        };

        requestAnimationFrame(animateText);
    }, []);

    return (
        <div
            className="bg-primary-black app__wrapper section__padding font-KaiTi text-primary-golden"
            id="home"
        >
            <div className="flex-1 w-full flex items-start justify-center flex-col animate-slideInFromLeft font-KaiTi">
                <SubHeading title="發現美味鍋物" />

                <h1 className="headtext__cormorant font-bold mb-4 text-with-linebreak font-KaiTi">
                    {text}
                </h1>
                <div className="p__opensans  mb-4 animate-fadeIn delay-500 font-KaiTi">
                    歡迎來到拾吾！這裡有新鮮的食材和獨特的湯底，讓您享受美味的火鍋體驗。<br/>期待與您共度美好時光，品味火鍋的無限魅力！
                </div>
                <a href="#menu">
                <button
                    type="button"
                    className="custom__button animate-fadeIn delay-700 font-KaiTi"
                >
                    探索菜單
                </button>
                </a>

                <div className="md:hidden  mt-4">
                    <a
                        href="https://shop.ichefpos.com/store/6koqeTEY/ordering"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <button type="button" className="custom__button font-KaiTi w-40 py-2 text-xl">
                            點餐連結
                        </button>
                    </a>
                </div>
            </div>

            <div className="app__wrapper_img animate-slideInFromRight delay-1000">
                <img src={images.home} alt="header_img" />
            </div>
        </div>
    );
};

export default Header;
