// Manejo del scroll en la navegación
const nav = document.querySelector('nav');
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

// Función para manejar el scroll
function handleScroll() {
    if (window.scrollY > 100) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
}

// Event listener para el scroll
window.addEventListener('scroll', handleScroll);

// Manejo del menú móvil
const body = document.body;

function toggleMenu() {
    menuToggle.classList.toggle('active');
    navLinks.classList.toggle('active');
    body.classList.toggle('menu-open');
    
    const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', !isExpanded);
}

menuToggle.addEventListener('click', toggleMenu);

// Cerrar menú al hacer click en un enlace
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', (e) => {
        if (window.innerWidth <= 768) {
            e.preventDefault();
            toggleMenu();
            setTimeout(() => {
                const targetId = link.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }, 300);
        }
    });
});

// Cerrar menú al hacer scroll
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > lastScroll && currentScroll > 100) {
        // Scrolling down
        if (navLinks.classList.contains('active')) {
            toggleMenu();
        }
    }
    lastScroll = currentScroll;
});

// Scroll suave para los enlaces de navegación
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerOffset = 100;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Funcionalidad para las tecnologías
const lenguajeItems = document.querySelectorAll('.lenguaje-item');
const descripcionContenido = document.querySelector('.descripcion-contenido');

const descripciones = {
    html: {
        titulo: 'HTML5',
        descripcion: 'Dominio de HTML5 semántico y accesible. Experiencia en estructuración de contenido web y mejores prácticas de SEO.'
    },
    css: {
        titulo: 'CSS3',
        descripcion: 'Experiencia en CSS moderno, Flexbox, Grid, animaciones y diseño responsivo. Capacidad para crear interfaces atractivas y funcionales.'
    },
    js: {
        titulo: 'JavaScript',
        descripcion: 'Sólidos conocimientos en JavaScript moderno (ES6+). Experiencia en manipulación del DOM, APIs y programación asíncrona.'
    },
    botpress: {
        titulo: 'Botpress',
        descripcion: 'Desarrollo de chatbots conversacionales avanzados. Experiencia en NLP, flujos de diálogo complejos y integración con APIs externas.'
    },
    openai: {
        titulo: 'OpenAI',
        descripcion: 'Implementación de soluciones de IA usando la API de OpenAI. Experiencia en GPT, embeddings y fine-tuning de modelos.'
    },
    git: {
        titulo: 'Git',
        descripcion: 'Control de versiones con Git. Experiencia en flujos de trabajo colaborativos, branching y resolución de conflictos.'
    }
};

lenguajeItems.forEach(item => {
    item.addEventListener('click', () => {
        // Remover clase activo de todos los items
        lenguajeItems.forEach(i => i.classList.remove('activo'));
        
        // Agregar clase activo al item seleccionado
        item.classList.add('activo');
        
        // Obtener el lenguaje seleccionado
        const lenguaje = item.getAttribute('data-lenguaje');
        const info = descripciones[lenguaje];
        
        // Actualizar contenido con animación
        descripcionContenido.style.opacity = '0';
        setTimeout(() => {
            descripcionContenido.innerHTML = `
                <h3>${info.titulo}</h3>
                <p>${info.descripcion}</p>
            `;
            descripcionContenido.style.opacity = '1';
        }, 300);
    });
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
