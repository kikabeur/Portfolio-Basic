// Efecto de navegación al hacer scroll
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    const logo = document.querySelector('#logo');
    
    if (window.scrollY > 100) {
        nav.style.padding = '10px';
        nav.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
        logo.style.height = '35px';
    } else {
        nav.style.padding = '20px';
        nav.style.backgroundColor = '#111';
        logo.style.height = '40px';
    }
});

// Funcionalidad para cambiar la descripción al hacer clic en los iconos
const iconosLenguajes = document.querySelectorAll('.iconos-lenguajes i');
const textoLenguaje = document.getElementById('texto-lenguaje');

const descripciones = {
    html: `// HTML5
    - Estructura semántica y accesible
    - Formularios interactivos
    - Multimedia y contenido dinámico
    - Optimización SEO`,
    css: `// CSS3
    - Diseño responsivo
    - Animaciones y transiciones
    - Flexbox y Grid
    - Personalización avanzada`,
    js: `// JavaScript
    - Interactividad dinámica
    - Manipulación del DOM
    - APIs y AJAX
    - ES6+ y módulos`
};

iconosLenguajes.forEach(icono => {
    icono.addEventListener('click', () => {
        const lenguaje = icono.getAttribute('data-lenguaje');
        textoLenguaje.textContent = descripciones[lenguaje];
        
        // Añadir efecto de selección
        iconosLenguajes.forEach(i => i.classList.remove('seleccionado'));
        icono.classList.add('seleccionado');
    });
});

// Animación suave para los enlaces de navegación
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Menú hamburguesa para dispositivos móviles
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    menuToggle.classList.toggle('active');
});

// Formulario de contacto
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Animación del botón
    const button = this.querySelector('button');
    button.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';
    
    // Simular envío (aquí irá tu lógica de envío real)
    setTimeout(() => {
        button.innerHTML = '<i class="fas fa-check"></i> ¡Enviado!';
        this.reset();
        
        setTimeout(() => {
            button.innerHTML = '<i class="fas fa-paper-plane"></i> Enviar';
        }, 2000);
    }, 1500);
});
