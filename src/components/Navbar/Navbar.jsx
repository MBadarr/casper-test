
import { useState } from "react";
import { NavLinks } from "./NavLinks";
import { Link } from 'react-router-dom';
import cart from '../../assets/icons/cart.png';
import menu from '../../assets/icons/menu.png';

function Navbar() {
    const [open, setOpen] = useState(false);

    const imgURL = 'https://casper.com/on/demandware.static/Sites-casper_us-Site/-/default/dw0bfc8dd5/svg-icons/logo.svg';
    return (

        <header className="bg-white shadow-sm sticky top-0 z-10">
            <nav className="flex justify-start flex-col md:flex-row lg:flex-row md:justify-between lg:jusify-between px-6 py-2 mx auto">
                <div className="h-0 md:h-1/4 lg:h-1/4">
                    <img src={imgURL} alt="logo" />
                </div>
                <div className="flex justify-start mt-14 md:mt-0 lg:mt-0 flex-col md:flex-row lg:flex-row md:justify-between md:items-center lg:items-center lg:jusify-between gap-6 md:gap-8 lg-gap-8">
                    {NavLinks.map((link) => (
                        <Link to={link.path} key={link.name}>
                            {link.name}
                        </Link>
                    ))}
                </div>
                <div>
                    <div className="hidden md:mt-2 lg:mt-2 md:block lg:block">
                        <img src={cart} alt="cart" height={24} width={26} />
                    </div>
                </div>
            </nav>
        </header >
    )
}

export default Navbar;