
import { useState } from "react";
import { NavLinks } from "./NavLinks";
import { Link } from 'react-router-dom';
import cart from '../../assets/icons/cart.png';

function Navbar() {
    const [open, setOpen] = useState(false);

    const imgURL = 'https://casper.com/on/demandware.static/Sites-casper_us-Site/-/default/dw0bfc8dd5/svg-icons/logo.svg';
    return (

        <header className="bg-white shadow-sm">
            <nav className="flex flex-wrap justify-between px-6 py-2 mx auto">
                <div className="flex justify-center md:justify-center">
                    <img src={imgURL} alt="cart" />
                </div>
                <div className="flex flex-wrap justify-center items-center gap-10">
                    {NavLinks.map((link) => (
                        <Link to={link.path} key={link.name}>
                            {link.name}
                        </Link>
                    ))}
                </div>
                <div>
                    <div className="flex items-center mt-2">
                        <img src={cart} alt="cart" height={24} width={26} />
                    </div>
                </div>
            </nav>
        </header >
    )
}

export default Navbar;