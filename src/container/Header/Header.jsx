import React, { useState, useEffect } from 'react';
import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.css';

const Header = () => {
    const [text, setText] = useState('');
    const fullText = 'The Key To Fine Dining';


    useEffect(() => {
        let currentIndex = 0;
        const interval = setInterval(() => {
            if (currentIndex < fullText.length) {
                setText((prev) => prev + fullText[currentIndex]);
                currentIndex += 1;
            } else {
                clearInterval(interval);
            }
        }, 100);

        return () => clearInterval(interval);
    }, []);

    return (
        <div
            className="bg-primary-black app__wrapper section__padding font-CormorantUpright text-primary-golden"
            id="home"
        >
            <div className="flex-1 w-full flex items-start justify-center flex-col animate-slideInFromLeft">
                <SubHeading title="Chase the new flavour" />
                <h1
                    className={`headtext__cormorant font-bold mb-4 whitespace-nowrap overflow-hidden border-r-4 border-primary-golden`}
                    style={{ width: `${text.length}ch` }}
                >
                    {text}
                </h1>
                <p className="p__opensans mb-4 animate-fadeIn delay-500">
                    Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat
                    morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet
                    tellus.
                </p>
                <button
                    type="button"
                    className="custom__button animate-fadeIn delay-700"
                >
                    Explore Menu
                </button>
            </div>

            <div className="app__wrapper_img animate-slideInFromRight delay-1000">
                <img src={images.welcome} alt="header_img" />
            </div>
        </div>
    );
};

export default Header;
