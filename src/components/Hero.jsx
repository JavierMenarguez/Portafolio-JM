import React from 'react'
import Javier from "../assets/Javier_Fondo.png";

const Hero = () => {
    return (
        <section className="w-full bg-slate-50 border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-6 pt-20 grid md:grid-cols-2 gap-10 items-end">

                <div className="mb-20">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
                        Hola, soy <span className="text-primary">Javier Menárguez Abellán</span>
                    </h1>

                    <p className="mt-6 text-gray-600 text-lg">
                        Soy desarrollador web especializado en crear soluciones intuitivas
                        y visuales para proyectos digitales.
                    </p>

                    <div className="mt-8 flex gap-4">
                        <button className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary transition">
                            Ver Proyectos
                        </button>
                        <button className="border border-primary text-primary px-6 py-3 rounded-lg hover:bg-green-100 transition">
                            Sobre mí
                        </button>
                    </div>
                </div>

                <div className="flex justify-center md:justify-end">
                    <img
                        src={Javier}
                        alt="Foto Javier"
                        className="w-full max-w-md md:max-w-lg lg:max-w-xl h-auto object-cover rounded-xl"
                    />
                </div>

            </div>
        </section>
    )
}

export default Hero
