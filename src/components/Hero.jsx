import React from 'react'


const Hero = () => {
    return (
        <section className="w-full">
            <div className="max-w-7xl mx-auto py-20 grid md:grid-cols-2 gap-2 items-end">

                <div className="mb-10">
                    <h1 className="text-4xl md:text-5xl font-bold text-white">
                        Hola, soy <span className="text-primary">Javier Menárguez Abellán</span>
                    </h1>

                    <p className="mt-6 text-white text-lg">
                        Soy desarrollador de software multiplataforma en Murcia, España. Especializado en soluciones a medida
                        para proyectos digitales.
                    </p>

                    <div className="flex mt-8 mb-4 gap-4">

                        <a href='/SOFTWARE DEVELOPER JM.pdf' download={"CVJavierMenarguez.pdf"} className=" flex bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary transition">
                            Descargar
                            <svg className='ml-2' width="24" height="24" viewBox="0 0 24 24" fill="currentColor" class="icon icon-tabler icons-tabler-filled icon-tabler-file-cv"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 2l.117 .007a1 1 0 0 1 .876 .876l.007 .117v4l.005 .15a2 2 0 0 0 1.838 1.844l.157 .006h4l.117 .007a1 1 0 0 1 .876 .876l.007 .117v9a3 3 0 0 1 -2.824 2.995l-.176 .005h-10a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-14a3 3 0 0 1 2.824 -2.995l.176 -.005zm-2.5 8a2.5 2.5 0 0 0 -2.5 2.5v3a2.5 2.5 0 1 0 5 0a1 1 0 0 0 -2 0a.5 .5 0 1 1 -1 0v-3a.5 .5 0 1 1 1 0a1 1 0 0 0 2 0a2.5 2.5 0 0 0 -2.5 -2.5m6.743 .03a1 1 0 0 0 -1.213 .727l-.53 2.119l-.53 -2.119a1 1 0 1 0 -1.94 .486l1.5 6c.252 1.01 1.688 1.01 1.94 0l1.5 -6a1 1 0 0 0 -.727 -1.213m-1.244 -7.031l4.001 4.001h-4z" /></svg>
                        </a>

                        <a href="https://www.linkedin.com/in/javier-men%C3%A1rguez-abell%C3%A1n-706a0925a/" target="_blank" rel="noopener noreferrer" className="flex border border-primary text-primary px-6 py-3 rounded-lg hover:bg-green-100 transition">
                            Linkedin
                            <svg className='ml-2' width="24" height="24" viewBox="0 0 24 24" fill="currentColor" class="icon icon-tabler icons-tabler-filled icon-tabler-brand-linkedin"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M17 2a5 5 0 0 1 5 5v10a5 5 0 0 1 -5 5h-10a5 5 0 0 1 -5 -5v-10a5 5 0 0 1 5 -5zm-9 8a1 1 0 0 0 -1 1v5a1 1 0 0 0 2 0v-5a1 1 0 0 0 -1 -1m6 0a3 3 0 0 0 -1.168 .236l-.125 .057a1 1 0 0 0 -1.707 .707v5a1 1 0 0 0 2 0v-3a1 1 0 0 1 2 0v3a1 1 0 0 0 2 0v-3a3 3 0 0 0 -3 -3m-6 -3a1 1 0 0 0 -.993 .883l-.007 .127a1 1 0 0 0 1.993 .117l.007 -.127a1 1 0 0 0 -1 -1" /></svg>
                        </a>
                        <div className='hidden sm:block'>
                            <a href='mailto:javiermenarguez1@gmail.com' className="flex whitespace-nowrap border border-primary text-primary px-6 py-3 rounded-lg hover:bg-green-100 transition">
                                Correo electrónico
                                <svg className='ml-2' width="24" height="24" viewBox="0 0 24 24" fill="currentColor" class="icon icon-tabler icons-tabler-filled icon-tabler-mail"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M22 7.535v9.465a3 3 0 0 1 -2.824 2.995l-.176 .005h-14a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-9.465l9.445 6.297l.116 .066a1 1 0 0 0 .878 0l.116 -.066l9.445 -6.297z" /><path d="M19 4c1.08 0 2.027 .57 2.555 1.427l-9.555 6.37l-9.555 -6.37a2.999 2.999 0 0 1 2.354 -1.42l.201 -.007h14z" /></svg>
                            </a>
                        </div>
                    </div>
                    <button className="sm:hidden flex whitespace-nowrap border border-primary text-primary px-6 py-3 rounded-lg hover:bg-green-100 transition">
                        Correo electrónico
                        <svg className='ml-3' width="24" height="24" viewBox="0 0 24 24" fill="currentColor" class="icon icon-tabler icons-tabler-filled icon-tabler-mail"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M22 7.535v9.465a3 3 0 0 1 -2.824 2.995l-.176 .005h-14a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-9.465l9.445 6.297l.116 .066a1 1 0 0 0 .878 0l.116 -.066l9.445 -6.297z" /><path d="M19 4c1.08 0 2.027 .57 2.555 1.427l-9.555 6.37l-9.555 -6.37a2.999 2.999 0 0 1 2.354 -1.42l.201 -.007h14z" /></svg>
                    </button>
                </div>

                {/*<div className="flex justify-center md:justify-end">
                    <img
                        src={Javier}
                        alt="Foto Javier"
                        className="w-full max-w-md md:max-w-lg lg:max-w-xl h-auto object-cover rounded-xl"
                    />
                </div>*/}

            </div>
        </section>
    )
}

export default Hero
