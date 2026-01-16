import React from 'react'

const Footer = () => {
    return (
        <footer className="w-full py-8 border-t border-white/5 bg-[#020617]/30 backdrop-blur-sm">

            <div className="max-w-4xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 items-center gap-6 text-sm font-medium text-gray-500">

                <p className="text-balance text-center md:text-left">
                    Desarrollado por <span className="text-gray-300">Javier Menárguez Abellán</span>
                </p>

                <p className="text-center whitespace-nowrap">
                    Creado con <span className="text-emerald-500/80">React</span> + <span className="text-emerald-500/80">Vite</span> + <span className="text-emerald-500/80">Tailwind</span>
                </p>

                <div className="flex justify-center md:justify-end">
                    <a href="#Inicio" className="group flex items-center gap-2 hover:text-white transition-all">
                        Volver arriba
                        <svg className="size-4 group-hover:-translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
                        </svg>
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer