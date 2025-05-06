const Header = {
    props: ['darkMode'],
    data() {
        return {
            isScrolled: false,
            isMenuOpen: false,
    
        }
    },
    methods: {
        handleScroll() {
            this.isScrolled = window.scrollY > 50;
        },
        toggleMenu() {
            this.isMenuOpen = !this.isMenuOpen;
        },
        closeMenu() {
            this.isMenuOpen = false;
        }
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll);
    },
    template: `
        <header :class="{ 'scrolled': isScrolled }">
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container">
                    <a class="navbar-brand" href="#inicio">
                        <span class="logo-icon">TD</span>
                        <span class="logo-text">TuDev</span>
                    </a>
                    
                    <button class="navbar-toggler" @click="toggleMenu" type="button" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    
                    <div class="collapse navbar-collapse" :class="{ 'show': isMenuOpen }">
                        <ul class="navbar-nav ms-auto">
                            <li class="nav-item">
                                <a class="nav-link" @click="closeMenu" href="#inicio">Inicio</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" @click="closeMenu" href="#sobre-mi">Sobre mí</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" @click="closeMenu" href="#proyectos">Proyectos</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" @click="closeMenu" href="#habilidades">Habilidades</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" @click="closeMenu" href="#testimonios">Testimonios</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" @click="closeMenu" href="#contacto">Contacto</a>
                            </li>
                            <li class="nav-item ms-lg-3 mt-3 mt-lg-0">
                                <button @click="toggleDarkMode" class="btn btn-sm btn-outline-dark">
                                    <i :class="darkMode ? 'fas fa-sun' : 'fas fa-moon'"></i>
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    `
};