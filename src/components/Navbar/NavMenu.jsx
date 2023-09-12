/* eslint-disable react/jsx-key */
import { useState } from "react";
import { Link } from "react-router-dom";
import { NavLinks } from "./NavLinks";

const NavMenu = () => {
    const [heading, setHeading] = useState("");
    const [subHeading, setSubHeading] = useState("");
    return (
        <>
            {NavLinks.map((link) => (
                <Link to={link.path} key={link.name}>
                    {link.name}
                </Link>
            ))}
        </>
    );
};

export default NavMenu;