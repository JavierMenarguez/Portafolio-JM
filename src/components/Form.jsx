import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const [isSending, setIsSending] = useState(false);
    const [statusMessage, setStatusMessage] = useState({ type: '', text: '' });

    const sendEmail = (e) => {
        e.preventDefault();
        setIsSending(true);

        // Reemplaza con tus IDs de EmailJS
        emailjs.sendForm(
            'service_o7kznsb',
            'template_f5lim26',
            form.current,
            '5K_zyYbFrGQfFzNX6'
        )
            .then(() => {
                setStatusMessage({ type: 'success', text: '¡Mensaje enviado con éxito!' });
                form.current.reset();
            })
            .catch((error) => {
                console.error('Error al enviar el formulario:', error);
                setStatusMessage({ type: 'error', text: 'Hubo un error, inténtalo de nuevo.' });
            })
            .finally(() => {
                setIsSending(false);
                setTimeout(() => setStatusMessage({ type: '', text: '' }), 5000);
            });
    };

    return (
        <section id="contacto" className="py-12 md:py-20 px-4">
            <div className="max-w-xl mx-auto relative">
                <div className="absolute -top-5 -left-5 size-32 md:size-40 bg-emerald-500/10 md:bg-emerald-500/20 blur-[80px] md:blur-[100px] rounded-full"></div>

                <div className="relative bg-[#0a122a]/60 backdrop-blur-xl border border-white/10 p-6 md:p-12 rounded-[1.5rem] md:rounded-[2.5rem] shadow-2xl">

                    <div className="mb-8 md:mb-10 text-center md:text-left">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Contacto</h2>
                        <p className="text-gray-400 text-sm md:text-base">Envíame un mensaje y conectemos.</p>
                    </div>

                    <form ref={form} className="space-y-4 md:space-y-6" onSubmit={sendEmail}>
                        <div className="grid grid-cols-1 gap-4 md:gap-6">
                            <input
                                name="name" // Asegúrate de que coincida con tu Template de EmailJS
                                type="text"
                                required
                                placeholder="Tu Nombre"
                                className="w-full bg-white/5 border border-white/10 rounded-xl py-3 md:py-4 px-5 text-white outline-none focus:border-emerald-500/50 transition-all placeholder:text-gray-500 text-sm md:text-base"
                            />

                            <input
                                name="email"
                                type="email"
                                required
                                placeholder="Tu Email"
                                className="w-full bg-white/5 border border-white/10 rounded-xl py-3 md:py-4 px-5 text-white outline-none focus:border-emerald-500/50 transition-all placeholder:text-gray-500 text-sm md:text-base"
                            />

                            <input
                                name="subject"
                                type="text"
                                required
                                placeholder="Asunto"
                                className="w-full bg-white/5 border border-white/10 rounded-xl py-3 md:py-4 px-5 text-white outline-none focus:border-emerald-500/50 transition-all placeholder:text-gray-500 text-sm md:text-base"
                            />

                            <textarea
                                name="message"
                                rows="4"
                                required
                                placeholder="Tu Mensaje"
                                className="w-full bg-white/5 border border-white/10 rounded-xl py-3 md:py-4 px-5 text-white outline-none focus:border-emerald-500/50 transition-all placeholder:text-gray-500 resize-none text-sm md:text-base"
                            ></textarea>
                        </div>

                        {/* Mensaje de estado dinámico */}
                        {statusMessage.text && (
                            <div className={`p-3 rounded-lg text-center text-sm ${statusMessage.type === 'success' ? 'bg-emerald-500/20 text-emerald-400' : 'bg-red-500/20 text-red-400'
                                }`}>
                                {statusMessage.text}
                            </div>
                        )}

                        <button
                            disabled={isSending}
                            className="w-full group relative flex items-center justify-center gap-3 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-bold py-3.5 md:py-4 px-8 rounded-full hover:scale-[1.02] active:scale-95 transition-all shadow-lg shadow-emerald-500/20 text-sm md:text-base disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            <svg
                                className={`size-5 rotate-45 transition-transform ${isSending ? 'animate-pulse' : 'group-hover:translate-x-1 group-hover:-translate-y-1'}`}
                                fill="none" stroke="currentColor" viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                            </svg>
                            {isSending ? 'Enviando...' : 'Enviar Mensaje'}
                        </button>
                    </form>

                    <div className="mt-8 md:mt-10 flex justify-center gap-4 md:gap-6">
                        <a href="https://www.linkedin.com/in/javier-men%C3%A1rguez-abell%C3%A1n-706a0925a/" target="_blank" rel="noopener noreferrer" className="flex border border-primary text-primary px-3 py-3 rounded-full hover:bg-green-100 transition">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" class="icon icon-tabler icons-tabler-filled icon-tabler-brand-linkedin"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M17 2a5 5 0 0 1 5 5v10a5 5 0 0 1 -5 5h-10a5 5 0 0 1 -5 -5v-10a5 5 0 0 1 5 -5zm-9 8a1 1 0 0 0 -1 1v5a1 1 0 0 0 2 0v-5a1 1 0 0 0 -1 -1m6 0a3 3 0 0 0 -1.168 .236l-.125 .057a1 1 0 0 0 -1.707 .707v5a1 1 0 0 0 2 0v-3a1 1 0 0 1 2 0v3a1 1 0 0 0 2 0v-3a3 3 0 0 0 -3 -3m-6 -3a1 1 0 0 0 -.993 .883l-.007 .127a1 1 0 0 0 1.993 .117l.007 -.127a1 1 0 0 0 -1 -1" /></svg>
                        </a>
                        <a href="https://github.com/JavierMenarguez" target="_blank" rel="noopener noreferrer" className="flex border border-primary text-primary px-3 py-3 rounded-full hover:bg-green-100 transition">
                            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;