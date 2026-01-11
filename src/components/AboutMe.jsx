import React from 'react'
import Javier from "../assets/Javier.jpg";

const AboutMe = () => {
    return (
        <section id="sobremi" className="max-w-4xl mx-auto py-20 px-4 scroll-m-4">
            <h2 className="text-3xl font-bold text-white mb-12 flex items-center gap-x-4">
                <svg className="size-8" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" /><path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                </svg>
                Sobre mí
            </h2>

            <div className="grid md:grid-cols-2 gap-10 items-center">
                <div className="text-gray-300 space-y-4 text-lg leading-relaxed order-2 md:order-1">
                    <p>
                        Soy <span className="text-primary font-semibold">Javier Menárguez</span> y
                        desde pequeño, mi fascinación por la tecnología y los retos de lógica me han guiado de forma natural hacia el mundo del desarrollo. Con el tiempo se combirtio en una parte importante en mi vida.
                    </p>

                    <p>
                        Completé el Grado Superior en <strong className="text-primary">Desarrollo de Aplicaciones Multiplataforma (DAM)</strong>, donde consolidé bases sólidas en programación y realicé mis primeros proyectos.
                        Estube <strong className="text-primary">+1 año de experiencia</strong> en grandes proyectos en entornos digitales.
                    </p>

                    <p>
                        Actualmente, busco una oportunidad profesional donde pueda aportar mi <span className="text-primary font-medium">máximo compromiso</span> y seguir creciendo como desarrollador. Mi objetivo es integrarme en un equipo donde pueda volcar mi energía en proyectos significativos y escalables.
                    </p>
                </div>

                <div className="order-1 md:order-2 flex justify-center">
                    <div className="relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-primary rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>

                        <div className="relative size-64 bg-[#0a192f] rounded-2xl overflow-hidden border border-white/10">
                            <img
                                src={Javier}
                                alt="Javier Menárguez"
                                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutMe
