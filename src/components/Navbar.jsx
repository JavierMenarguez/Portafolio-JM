import React from 'react'
import { navbarLinks } from '../data/data'
import { MdMenu } from "react-icons/md";
import ResponsiveMenu from './ResponsiveMenu';
import { useState } from 'react';
import Javier from "../assets/Javier.jpg";

const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <nav className="sticky top-0 z-50 flex items-center justify-between py-4 backdrop-blur-md px-4 md:px-20 max-w-[1400px] mx-auto">

                <span className="text-xl font-semibold text-primary">
                    <img
                        src={Javier}
                        alt="Javier"
                        className="size-16 rounded-full object-cover border-2 border-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.4)]"
                    />
                </span>
                <div className="hidden md:block">
                    <ul className="flex gap-8 text-white font-medium">
                        {
                            navbarLinks.map((item) => (
                                <li className="hover:text-primary" key={item.id}>
                                    <a href={item.link}>{item.title}</a>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                {/* Modo movil */}
                <div className='md:hidden'>
                    <MdMenu
                        onClick={() => setOpen(!open)}
                        className='text-4xl text-white' />
                </div>
            </nav>
            <ResponsiveMenu open={open} setOpen={setOpen} navbarLinks={navbarLinks} />
        </>
    )
}

export default Navbar
