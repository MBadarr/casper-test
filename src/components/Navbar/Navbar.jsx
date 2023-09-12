
import { useState } from "react";
import { NavLinks } from "./NavLinks";
import { Link } from 'react-router-dom';
import cart from '../../assets/icons/cart.png';
import menu from '../../assets/icons/menu.png';
import cross from '../../assets/icons/cross.png';
import NavMenu from "./NavMenu";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const imgURL = 'https://casper.com/on/demandware.static/Sites-casper_us-Site/-/default/dw0bfc8dd5/svg-icons/logo.svg';

    return (
        // <nav className="bg-white shadow-sm sticky top-0 z-10">
        //     <div className="flex justify-center flex-col md:flex-row lg:flex-row md:justify-between lg:jusify-between px-6 py-2 mx-auto">
        //         <div className="z-50 p-5 md:w-auto w-full flex justify-between">
        //             <img src={imgURL} alt="logo" className="md:cursor-pointer h-9" />
        //             <div className="text-3xl md:hidden" onClick={toggleMenu}>
        //                 <ion-icon name={`${isOpen ? "close" : "menu"}`}></ion-icon>
        //             </div>
        //         </div>
        //         <ul className="md:flex hidden uppercase items-center gap-8 font-[Poppins]">
        //             <NavMenu />
        //         </ul>
        //         <div className="md:block hidden">
        //             {/* <Button /> */}
        //         </div>
        //         {/* Mobile nav */}
        //         <ul
        //             className={`md:hidden bg-white fixed w-full top-0 overflow-y-auto bottom-0 py-28 pl-8 duration-500 ${isOpen ? "left-0" : "left-[-100%]"}
        // `}
        //         >
        //             <NavMenu />
        //             <div className="py-5">
        //                 {/* <Button /> */}
        //             </div>
        //         </ul>
        //     </div>
        // </nav>

        <nav className="bg-white shadow-sm sticky top-0 z-10">
            <div className="flex justify-center flex-col md:flex-row lg:flex-row md:justify-between lg:jusify-between px-6 py-2 mx-auto">
                <div className="flex justify-center items-center">
                    <img src={imgURL} alt="logo" />
                </div>
                {isOpen ?
                    <div className="absolute cursor-pointer top-4 right-6 md:hidden lg:hidden" onClick={toggleMenu}>
                        <img src={cross} alt="cross" />
                    </div>
                    :
                    <div className="absolute cursor-pointer top-4 left-6 md:hidden lg:hidden" onClick={toggleMenu}>
                        <img src={menu} alt="menu" />
                    </div>
                }

                <ul className="flex flex-col mt-6 gap-4 md:flex-row md:items-center md:mt-0 md:gap-4 lg:flex-row lg:items-center lg:mt-0 lg:gap-6">
                    <NavMenu />
                </ul>

                <div>
                    <div className="hidden md:mt-2 lg:mt-2 md:block lg:block">
                        <img src={cart} alt="cart" height={24} width={26} />
                    </div>
                </div>
            </div>
        </nav >
    )
}

export default Navbar;