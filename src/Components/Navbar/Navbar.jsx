import { RiCloseLine, RiMenu2Line } from "@remixicon/react";
import React, { useState, useEffect } from "react";
import "./Navbar.scss"
const Navbar = () => {
    const [menu, openMenu] = useState(false);
    const [showMenu, setShowManu] = useState(true);
    const [scrolled, setScrolled] = useState(false);
    const handleScroll = () => {
        const offset = window.scrollY;
        console.log("offset value: ", offset);
        if (offset > 200) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`flex flex-wrap justify-between md:items-center text-white px-10 pt-6 md:px-20 ${
                scrolled ? "sticky-header" : ""
            }`}
        >
            <span className="text-xl font-bold tracking-wide">Md Aytul Shad Ansari</span>
            <ul 
            className={`${menu ? "block" : "hidden"}  mx-24 py-2 mt-4 font-semibold md:mt-5 bg-black px-2 rounded-xl bg-opacity-30 md:border-none text-center md:bg-transparent md:static md:mx-0 md:flex gap-6`}>
                <a href="#About">
                <li className="text-md transition-all duration-300 p-1 md:p-0">
                    About
                    </li> 
                    </a>
                    <a href="#Experience">
                <li className="text-md transition-all duration-300 p-1 md:p-0">
                    Experience
                    </li>
                    </a>
                    <a href="#Projects">
                <li className="text-md transition-all duration-300 p-1 md:p-0">
                    Projects
                    </li>
                    </a>
                    <a href="#Footer">
                <li className="text-md transition-all duration-300 p-1 md:p-0">
                    Contact
                     </li>
                     </a>
            </ul>
            {showMenu ? (
                <RiMenu2Line 
                size = {30} 
                className="md:hidden absolute right-10 top-6 transition-all duration-300" 
                    onClick={() => {
                        openMenu(!menu); 
                        setShowManu(!showMenu);
                    }}
                />
            ) : (
                <RiCloseLine 
                size={30}
                className="md:hidden absolute right-10 top-6 transition-all duration-300" 
                />
            )}
            </nav>
    )
}
export default Navbar;