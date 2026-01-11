import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'
const ResponsiveMenu = ({
    open,
    setOpen,
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
                <motion.div {...animation} className='fixed top-20 left-0 w-full h-screen z-20'>
                    <div className='text-xl font-semibold uppercase bg-primary text-white m-6 rounded-3xl overflow-hidden'>
                        <ul className='flex flex-col justify-center w-full'>
                            {
                                navbarLinks.map((item) => (
                                    <li key={item.id} className="w-full text-center border-b border-white/10 last:border-none">
                                        <a
                                            href={item.link}
                                            onClick={() => setOpen(false)}
                                            className="block w-full py-8 transition-colors active:bg-black/10"
                                        >
                                            {item.title}
                                        </a>
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
