// Portfolio — Valentín Jurado
// JavaScript vanilla: efectos, datos y animaciones

document.addEventListener('DOMContentLoaded', () => {

    // ══════════════ DATOS ══════════════
    const tecnologias = [
        { nombre: 'Java',          icono: 'java',      tag: 'Lenguaje' },
        { nombre: 'JavaScript',    icono: 'js',        tag: 'Lenguaje' },
        { nombre: 'TypeScript',    icono: 'ts',        tag: 'Lenguaje' },
        { nombre: 'Angular',       icono: 'angular',   tag: 'Frontend' },
        { nombre: 'HTML',          icono: 'html',      tag: 'Frontend' },
        { nombre: 'CSS',           icono: 'css',       tag: 'Frontend' },
        { nombre: 'Bootstrap',     icono: 'bootstrap', tag: 'Frontend' },
        { nombre: 'Tailwind',      icono: 'tailwind',  tag: 'Frontend' },
        { nombre: 'Node.js',       icono: 'nodejs',    tag: 'Backend' },
        { nombre: 'PostgreSQL',    icono: 'postgres',  tag: 'Base de datos' },
        { nombre: 'Git',           icono: 'git',       tag: 'Herramientas' },
        { nombre: 'GitHub',        icono: 'github',    tag: 'Herramientas' },
    ];

    const proyectos = [
        {
            nombre: 'Agrovector',
            descripcion: 'Sitio web institucional para un servicio de aplicación agrícola con drones: catálogo de productos, materiales técnicos y presencia digital completa.',
            techs: ['HTML', 'CSS', 'JavaScript'],
            link: 'https://github.com/annaknell/agrovector-web-design',
            icono: 'bi-airplane-engines',
        },
        {
            nombre: 'ComercioPOS',
            descripcion: 'Aplicación de punto de venta (POS) con gestión de stock, tickets, reportes en PDF y CSV, modo oscuro y multidioma (español, inglés y portugués).',
            techs: ['JavaScript', 'Node.js', 'SQL'],
            link: 'https://github.com/valentinjurado/kiosco-app-releases',
            icono: 'bi-shop',
        },
        {
            nombre: 'Gestión de Turnos',
            descripcion: 'Sistema de gestión de turnos en Java con interfaz gráfica. Proyecto universitario de la tecnicatura.',
            techs: ['Java'],
            link: 'https://github.com/valentinjurado/GestionDeTurnos',
            icono: 'bi-calendar-check',
        },
        {
            nombre: 'Seminario Angular',
            descripcion: 'Aplicación web en Angular desarrollada como seminario universitario. Componentes, servicios y TypeScript.',
            techs: ['Angular', 'TypeScript'],
            link: 'https://github.com/valentinjurado/Angular-seminario',
            icono: 'bi-braces',
        },
        {
            nombre: 'Clima',
            descripcion: 'Aplicación del clima que consume una API pública para mostrar el estado del tiempo.',
            techs: ['JavaScript', 'API'],
            link: 'https://github.com/valentinjurado/Clima',
            icono: 'bi-cloud-sun',
        },
    ];

    // ══════════════ HERO: efecto de escritura ══════════════
    const roles = [
        'Desarrollador de software',
        'Estudiante de TUDAI (UNICEN)',
        'Amante del código y el deporte',
    ];
    const destinoRol = document.getElementById('tipoRol');
    if (destinoRol) {
        let indiceRol = 0;
        let indiceLetra = 0;
        let borrando = false;

        const escribir = () => {
            const rol = roles[indiceRol];
            if (!borrando) {
                destinoRol.textContent = rol.slice(0, ++indiceLetra);
                if (indiceLetra === rol.length) {
                    borrando = true;
                    setTimeout(escribir, 1800);
                    return;
                }
                setTimeout(escribir, 55);
            } else {
                destinoRol.textContent = rol.slice(0, --indiceLetra);
                if (indiceLetra === 0) {
                    borrando = false;
                    indiceRol = (indiceRol + 1) % roles.length;
                    setTimeout(escribir, 350);
                    return;
                }
                setTimeout(escribir, 28);
            }
        };
        setTimeout(escribir, 600);
    }

    // ══════════════ GRID DE TECNOLOGÍAS ══════════════
    const grillaTecno = document.getElementById('grillaTecnologias');
    if (grillaTecno) {
        grillaTecno.innerHTML = tecnologias.map((t, i) => `
            <div class="col-6 col-md-4 col-lg-3 reveal" data-retardo="${i % 4}">
                <div class="tarjeta-tecno">
                    <img src="https://skillicons.dev/icons?i=${t.icono}" alt="${t.nombre}" loading="lazy">
                    <h3>${t.nombre}</h3>
                    <span class="tecno-tag">${t.tag}</span>
                </div>
            </div>
        `).join('');
    }

    // ══════════════ GRID DE PROYECTOS ══════════════
    const grillaProyectos = document.getElementById('grillaProyectos');
    if (grillaProyectos) {
        grillaProyectos.innerHTML = proyectos.map((p, i) => `
            <div class="col-md-6 col-lg-4 reveal" data-retardo="${i % 3}">
                <div class="tarjeta-proyecto">
                    <div class="proyecto-icono"><i class="bi ${p.icono}"></i></div>
                    <h3>${p.nombre}</h3>
                    <p>${p.descripcion}</p>
                    <div class="proyecto-techs">
                        ${p.techs.map(t => `<span class="proyecto-tech">${t}</span>`).join('')}
                    </div>
                    <a href="${p.link}" target="_blank" rel="noopener noreferrer" class="proyecto-link">
                        Ver en GitHub <i class="bi bi-arrow-right"></i>
                    </a>
                </div>
            </div>
        `).join('');
    }

    // ══════════════ APARICIÓN AL SCROLL (reveal) ══════════════
    const revelar = document.querySelectorAll('.reveal');
    if (revelar.length && 'IntersectionObserver' in window) {
        const observador = new IntersectionObserver((entradas) => {
            entradas.forEach((entrada) => {
                if (entrada.isIntersecting) {
                    entrada.target.classList.add('visible');
                    observador.unobserve(entrada.target);
                }
            });
        }, { threshold: 0.12 });
        revelar.forEach((el) => observador.observe(el));
    } else {
        revelar.forEach((el) => el.classList.add('visible'));
    }

    // ══════════════ NAVBAR: compacta + link activo + menú móvil ══════════════
    const navbar = document.getElementById('navbar');
    const navToggle = document.getElementById('navToggle');
    const navLinks = document.getElementById('navLinks');
    const enlaces = document.querySelectorAll('.nav-link');

    const alDesplazar = () => {
        if (navbar) navbar.classList.toggle('compacta', window.scrollY > 40);

        // resaltar la sección visible
        const posicion = window.scrollY + 120;
        enlaces.forEach((enlace) => {
            const destino = document.querySelector(enlace.getAttribute('href'));
            if (destino && posicion >= destino.offsetTop) {
                enlaces.forEach((l) => l.classList.remove('active'));
                enlace.classList.add('active');
            }
        });
    };
    window.addEventListener('scroll', alDesplazar, { passive: true });
    alDesplazar();

    if (navToggle && navLinks) {
        navToggle.addEventListener('click', () => {
            const abierto = navLinks.classList.toggle('abierto');
            navToggle.classList.toggle('abierto', abierto);
            navToggle.setAttribute('aria-expanded', abierto);
        });
        enlaces.forEach((enlace) => {
            enlace.addEventListener('click', () => {
                navLinks.classList.remove('abierto');
                navToggle.classList.remove('abierto');
                navToggle.setAttribute('aria-expanded', 'false');
            });
        });
    }

    // ══════════════ AÑO EN EL FOOTER ══════════════
    const anio = document.getElementById('anioActual');
    if (anio) anio.textContent = new Date().getFullYear();
});
