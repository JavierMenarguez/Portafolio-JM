import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'
const ResponsiveMenu = ({
    open,
    navbarLinks,
}) => {
    const animation = {
        initial: { opacity: 0, y: -100 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -100 },
        transition: { duration: 0.3 },
    }
    return (
        <AnimatePresence mode="await">
            {open && (
                <motion.div {...animation} className='absolute top-20 left-0
                w-full h-screen z-20'>
                    <div className='text-xl font-semibold uppercase bg-primary
                text-white py-6 m-6 rounded-3xl'>
                        <ul className='flex flex-col justify-center items-center gap-10'>
                            {
                                navbarLinks.map((item) => (
                                    <li key={item.id}>
                                        <a href={item.link}>{item.title}</a>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>

    )
}

export default ResponsiveMenu
