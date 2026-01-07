import React from 'react'
import { navbarLinks } from '../data/data'
import { MdMenu } from "react-icons/md";
import ResponsiveMenu from './ResponsiveMenu';
import { useState } from 'react';


const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <nav className="flex items-center justify-between px-20 py-5 bg-slate-50">

                <span className="text-xl font-semibold text-primary">
                    Javier
                </span>
                <div className="hidden md:block">
                    <ul className="flex gap-8 text-gray-700 font-medium">
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
                        className='text-4xl' />
                </div>
            </nav>
            <ResponsiveMenu open={open} navbarLinks={navbarLinks} />
        </>
    )
}

export default Navbar
