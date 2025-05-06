const { createApp } = Vue;

const app = createApp({
    data() {
        return {
            nombre: 'Alex Dionisio García',
            titulo: 'Desarrollador Full Stack',
            email: 'dionisio6578@gmail.com',
            telefono: '+52 933 154 1858',
            redesSociales: [
                { icon: 'github', url: 'https://github.com/tuperfil' },
                { icon: 'linkedin', url: 'https://linkedin.com/in/tuperfil' },
                { icon: 'twitter', url: 'https://twitter.com/tuperfil' },
                { icon: 'dribbble', url: 'https://dribbble.com/tuperfil' }
            ],
            typedStrings: [
                "Desarrollador Web",
                "Especialista en Vue.js",
                "Diseñador UI/UX",
                "Apasionado por la tecnología"
            ],
            darkMode: false
        }
    },
    mounted() {
        // Inicializar particles.js
        particlesJS.load('particles-js', 'assets/particles.json', function() {
            console.log('particles.js loaded');
        });

        // Inicializar typed.js
        new Typed('#typed-text', {
            strings: this.typedStrings,
            typeSpeed: 50,
            backSpeed: 30,
            loop: true,
            showCursor: true,
            cursorChar: '|'
        });

        // Animaciones al hacer scroll
        this.initScrollAnimations();
        
        if (localStorage.getItem('darkMode') === 'true' || 
            (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            this.toggleDarkMode();
        }

        // Verificar modo oscuro
        this.checkDarkMode();
    },
    methods: {
        toggleDarkMode() {
            this.darkMode = !this.darkMode;
            document.body.classList.toggle('dark-mode', this.darkMode);
            localStorage.setItem('darkMode', this.darkMode);
        },
        checkDarkMode() {
            if (localStorage.getItem('darkMode') === 'true' || 
                (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                this.toggleDarkMode();
            }
        },
        initScrollAnimations() {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate__animated', 'animate__fadeInUp');
                    }
                });
            }, { threshold: 0.1 });

            document.querySelectorAll('.animate-on-scroll').forEach(el => {
                observer.observe(el);
            });
        }
    }
});

// Registrar componentes
app.component('app-header', Header);
app.component('about-section', About);
app.component('projects-section', Projects);
app.component('skills-section', Skills);
app.component('testimonials-section', Testimonials);
app.component('contact-section', Contact);

app.mount('#app');