export const navbarLinks = [
    {
        id: 1,
        title: "Inicio",
        link: "#Inicio"
    },
    {
        id: 2,
        title: "Experiencia",
        link: "#experiencia"
    },
    {
        id: 3,
        title: "Sobre mí",
        link: "#sobremi"
    },
    /*{
        id: 4,
        title: "Proyectos",
        link: "#"
    },*/
    {
        id: 5,
        title: "Contacto",
        link: "#contacto"
    }
]

export const dataExperience = [
    {
        id: 1,
        title: "Técnico informatico",
        companyName: "Electromain Electronica Industrial",
        description: "Trabajé durante los meses de verano de 2025 donde desarrollé un ecommerce realizando mejoras en la interfaz asi como cambios en la logica de negocio y registro en base de datos.",
        time: "JULIO 2025",
        technologies: ["wordpress", "woocommerce", "vscode"]
    },
    {
        id: 2,
        title: "Programador ERP",
        companyName: "Caritas Diocesis de Cartagena",
        description: "Trabajo donde estube durante el 2024 donde mas pude mejorar y aprender. Estube desarrollando un ERP a medida donde realicé tareas tanto de mejora de caracteristicas ya desarrolladas como el la creacion de nuevas.",
        time: "2024",
        technologies: ["java", "sql", "eclipse", "primefaces", "github"]
    },
    {
        id: 3,
        title: "Programador Web",
        companyName: "Slango task automation",
        description: "Realicé 3 meses como becario donde tuve el primer contacto con el mundo de la programación. Aprendí a trabajar con las metodologías ágiles, con el backend y con el concepto de microservicios.",
        time: "JUNIO 2023",
        technologies: ["javascript", "github", "vuejs", "vscode"]
    },

]
const TECH_CONFIG = {
    java: { icon: <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8h1a4 4 0 0 1 0 8h-1" /><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" /><line x1="6" y1="1" x2="6" y2="4" /><line x1="10" y1="1" x2="10" y2="4" /><line x1="14" y1="1" x2="14" y2="4" /></svg>, label: "Java" },
    sql: { icon: <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>, label: "SQL" },
    javascript: { icon: <svg className="size-4" viewBox="0 0 24 24" fill="currentColor"><path d="M3 3h18v18H3V3zm16.469 15.55c.001-.765-.433-1.248-1.326-1.637-.621-.267-1.025-.436-1.213-.509-.283-.109-.441-.219-.441-.454 0-.256.241-.433.59-.433.364 0 .591.139.813.418l.84-.526c-.341-.535-.794-.793-1.564-.793-.979 0-1.642.535-1.642 1.354 0 .741.442 1.222 1.393 1.616.577.241.977.422 1.199.534.288.134.425.275.425.522 0 .317-.289.544-.755.544-.544 0-.877-.244-1.096-.694l-.88.54c.33.684.977 1.055 1.933 1.055 1.166 0 1.733-.564 1.734-1.533zm-5.783-2.028H12.63v3.315c0 .541-.122.842-.486.842-.239 0-.468-.139-.588-.344l-.794.512c.264.498.718.736 1.342.736 1.144 0 1.488-.707 1.488-1.742v-3.319z" /></svg>, label: "JavaScript" },
    vuejs: { icon: <svg className="size-4" viewBox="0 0 24 24" fill="currentColor"><path d="M24,1.45H19.72L12,14.78L4.28,1.45H0L12,22.55,24,1.45Z" /></svg>, label: "Vue.js" },
    github: { icon: <svg className="size-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" /></svg>, label: "GitHub" },
    wordpress: { icon: <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="M9 12l2 2 4-4" /></svg>, label: "WordPress" },
    woocommerce: { icon: <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" /><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" /></svg>, label: "WooCommerce" },
    vscode: { icon: <svg className="size-4" viewBox="0 0 24 24" fill="currentColor"><path d="M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-5.53-4.62a.992.992 0 0 0-1.299.014L.22 5.31a.987.987 0 0 0-.012 1.419l4.37 4.31-4.37 4.305a.987.987 0 0 0 .012 1.419l1.25 1.25a.99.99 0 0 0 1.299.014l5.54-4.63 9.46 8.63a1.49 1.49 0 0 0 1.705.29l4.94-2.377A1.5 1.5 0 0 0 24 20.06V3.939a1.5 1.5 0 0 0-.85-1.352zm-5.146 14.86L10.826 12l7.178-5.448v10.896z" /></svg>, label: "VS Code" },
    eclipse: { icon: <svg className="size-4" viewBox="0 0 24 24" fill="currentColor"> <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10c2.5 0 4.785-.917 6.54-2.433l-2.146-2.146A6.96 6.96 0 0 1 12 19a7 7 0 1 1 5.394-11.454l2.146-2.146A9.96 9.96 0 0 0 12 2z" /><circle cx="12" cy="12" r="3" /><path d="M19 11h3v2h-3v-2zM17.657 5.222l2.121 2.121-1.414 1.414-2.121-2.121 1.414-1.414zM17.657 18.778l-1.414-1.414 2.121-2.121 1.414 1.414-2.121 2.121z" /></svg>, label: "Eclipse" },
    primefaces: { icon: <svg className="size-4" viewBox="0 0 24 24" fill="currentColor"><path d="M10 2h4v3h-4V2z" /><path d="M3 11c0-4.97 4.03-9 9-9s9 4.03 9 9v7H3v-7z" /><path fill="black" d="M7 11h10v2h-4v4h-2v-4H7v-2z" style={{ mixBlendMode: 'multiply' }} /></svg>, label: "PrimeFaces" },
};