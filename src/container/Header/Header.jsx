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
        }, 100); // Adjust the speed of typing by changing the interval time (100ms here)

        return () => clearInterval(interval);
    }, []);

    return (
        <div
            className="bg-primary-black app__wrapper section__padding font-CormorantUpright text-primary-golden"
            id="home"
        >
            <div className="flex-1 w-full flex items-start justify-center flex-col">
                <SubHeading title="Chase the new flavour" />
                <h1 className="headtext__cormorant font-bold mb-4">{text}</h1>
                <p className="p__opensans mb-4">
                    Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat
                    morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet
                    tellus
                </p>
                <button type="button" className="custom__button">
                    Explore Menu
                </button>
            </div>

            <div className="app__wrapper_img">
                <img src={images.welcome} alt="header_img" />
            </div>
        </div>
    );
};

export default Header;