import React, {useState} from 'react';
import {GiHamburgerMenu} from 'react-icons/gi';
import {MdOutlineRestaurantMenu} from 'react-icons/md';

import images from '../../constants/images';
import './Navbar.css';

const Navbar = () => {
    const [toggleMenu,
        setToggleMenu] = useState(false);
    const [isFixed,
        setIsFixed] = useState(false);

        
    const handleScroll = () => {
        if (window.scrollY > 100) {
            setIsFixed(true);
        } else {
            setIsFixed(false);
        }
    }

    return (
        <nav
            className='z-nav fixed w-full flex justify-between items-center text-primary-white bg-transparent backdrop-blur-2xl sm:px-8 sm:py-4 p-4 font-KaiTi'>
            <div className='flex justify-start items-center'>
                <img
                    src={images.logoAAA}
                    alt="app logo"
                    className="h-auto w-24 sm:w-20 2xl:w-52"/>
            </div>
            <ul className='lg:flex hidden justify-center items-center flex-1 duration-300 mr-24 gap-2 font-KaiTi'>
                <li
                    className='text-primary-white font-KaiTi text-xl  my-0 mx-1 duration-150 cursor-pointer hover:text-primary-gray '>
                    <a href='#home'>首頁</a>
                </li>
                <li
                    className='text-primary-white font-KaiTi text-xl  my-0 mx-1 duration-150 cursor-pointer hover:text-primary-gray '>
                    <a href='#about'>關於我們</a>
                </li>
                <li
                    className='text-primary-white font-KaiTi text-xl  my-0 mx-1 duration-150 cursor-pointer hover:text-primary-gray '>
                    <a href='#menu'>菜單</a>
                </li>
                <li
                    className='text-primary-white font-KaiTi text-xl my-0 mx-1 duration-150 cursor-pointer hover:text-primary-gray '>
                    <a href='#contact'>聯絡我們</a>
                </li>
            </ul>

            {/*=========== Login Button ============*/}

            <div className="sm:flex hidden justify-end items-center">

                <a href="https://shop.ichefpos.com/store/6koqeTEY/ordering" target="_blank" rel="noopener noreferrer">
                    <button type="button" className="custom__button font-KaiTi">點餐連結</button>
                </a>
            </div>

            {/*================ Mobile Navigation ================*/}

            <div className="flex lg:hidden">
            <a href="https://shop.ichefpos.com/store/6koqeTEY/ordering" target="_blank" rel="noopener noreferrer" className="mx-auto mt-4">
                <button type="button" className="custom__button font-KaiTi w-40 py-2 text-xl">點餐連結</button>
            </a>
                <GiHamburgerMenu color='#fff' fontSize={27} onClick={() => {setToggleMenu(true)}}/>
                {/*=========== Mobile Overlay ===========*/}
                {toggleMenu && (
                    <div
                        className='slide-bottom fixed top-0 left-0 w-full h-[400px] bg-primary-black duration-500 flex flex-col z-10'>
                        <MdOutlineRestaurantMenu
                            className="text-2xl text-primary-golden absolute top-5 right-5 cursor-pointer"
                            color='#fff'
                            fontSize={27}
                            onClick={() => {setToggleMenu(false)}}/> 
                        {/*=========== Nav ===========*/}
                        <ul className='list-none mt-4 p-6'>
                            <li
                                className='font-KaiTi m-4 cursor-pointer text-primary-golden text-4xl text-center hover:text-primary-white' onClick={() => {setToggleMenu(false)}}>
                                <a href='#home'>Home</a>
                                    <img
                                    src={images.spoon}
                                    alt="spoon underline"
                                    className="h-[10px] w-24 mx-auto"/>
                            </li>
                            <li
                                className='font-KaiTi m-4 cursor-pointer text-primary-golden text-4xl text-center hover:text-primary-white' onClick={() => {setToggleMenu(false)}}>
                                <a href='#about'>About</a>
                                <img
                                    src={images.spoon}
                                    alt="spoon underline"
                                    className="h-[10px] w-24 mx-auto"/>

                            </li>
                            <li
                                className='font-KaiTi m-4 cursor-pointer text-primary-golden text-4xl text-center hover:text-primary-white' onClick={() => {setToggleMenu(false)}}>
                                <a href='#menu'>Menu</a>
                                <img
                                    src={images.spoon}
                                    alt="spoon underline"
                                    className="h-[10px] w-24 mx-auto"/>

                            </li>
                            <li
                                className='font-KaiTi m-4 cursor-pointer text-primary-golden text-4xl text-center hover:text-primary-white' onClick={() => {setToggleMenu(false)}}>
                                <a href='#awards'>Awards</a>
                                <img
                                    src={images.spoon}
                                    alt="spoon underline"
                                    className="h-[10px] w-24 mx-auto"/>

                            </li>
                            <li
                                className='font-KaiTi m-4 cursor-pointer text-primary-golden text-4xl text-center hover:text-primary-white' onClick={() => {setToggleMenu(false)}}>
                                <a href='#contact'>Contant</a>
                                <img
                                    src={images.spoon}
                                    alt="spoon underline"
                                    className="h-[10px] w-24 mx-auto"/>

                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
