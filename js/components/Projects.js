const Projects = {
    data() {
        return {
            proyectos: [
                {
                    id: 1,
                    titulo: "Sistema de E-commerce",
                    descripcion: "Plataforma completa de comercio electrónico con carrito de compras y pasarela de pago.",
                    imagen: "assets/images/proyecto1.jpg",
                    tecnologias: ["Vue.js", "Node.js", "MongoDB", "Stripe"],
                    enlace: "#",
                    categoria: "web",
                    destacado: true
                },
                {
                    id: 2,
                    titulo: "Aplicación Móvil de Salud",
                    descripcion: "App para seguimiento de hábitos saludables con integración a wearables.",
                    imagen: "assets/images/proyecto2.jpg",
                    tecnologias: ["React Native", "Firebase", "Redux"],
                    enlace: "#",
                    categoria: "mobile",
                    destacado: false
                },
                {
                    id: 3,
                    titulo: "Dashboard Analítico",
                    descripcion: "Panel de control para visualización de datos empresariales en tiempo real.",
                    imagen: "assets/images/proyecto3.jpg",
                    tecnologias: ["React", "D3.js", "Express"],
                    enlace: "#",
                    categoria: "web",
                    destacado: true
                },
                {
                    id: 4,
                    titulo: "Sistema de Reservas",
                    descripcion: "Plataforma de gestión de reservas para hoteles con calendario interactivo.",
                    imagen: "assets/images/proyecto4.jpg",
                    tecnologias: ["Vue.js", "Laravel", "MySQL"],
                    enlace: "#",
                    categoria: "web",
                    destacado: false
                },
                {
                    id: 5,
                    titulo: "Red Social Educativa",
                    descripcion: "Plataforma para compartir recursos educativos con sistema de comentarios.",
                    imagen: "assets/images/proyecto5.jpg",
                    tecnologias: ["Angular", "NestJS", "PostgreSQL"],
                    enlace: "#",
                    categoria: "web",
                    destacado: true
                },
                {
                    id: 6,
                    titulo: "Juego Móvil",
                    descripcion: "Juego 2D para dispositivos móviles con física y multijugador.",
                    imagen: "assets/images/proyecto6.jpg",
                    tecnologias: ["Unity", "C#", "Photon"],
                    enlace: "#",
                    categoria: "mobile",
                    destacado: false
                }
            ],
            activeFilter: 'all',
            filters: [
                { id: 'all', label: 'Todos' },
                { id: 'web', label: 'Web' },
                { id: 'mobile', label: 'Mobile' },
                { id: 'design', label: 'Diseño' }
            ]
        }
    },
    computed: {
        filteredProjects() {
            if (this.activeFilter === 'all') return this.proyectos;
            return this.proyectos.filter(proj => proj.categoria === this.activeFilter);
        },
        featuredProjects() {
            return this.proyectos.filter(proj => proj.destacado);
        }
    },
    methods: {
        filterProjects(category) {
            this.activeFilter = category;
        }
    },
    template: `
        <section id="proyectos" class="py-5 bg-light">
            <div class="container">
                <h2 class="section-title text-center mb-5">Mis <span class="highlight">Proyectos</span></h2>
                
                <div class="text-center mb-5">
                    <button v-for="filter in filters" :key="filter.id" 
                            @click="filterProjects(filter.id)" 
                            :class="{ 'btn-primary': activeFilter === filter.id, 'btn-outline-primary': activeFilter !== filter.id }" 
                            class="btn mx-2">
                        {{ filter.label }}
                    </button>
                </div>
                
                <div class="row">
                    <div class="col-lg-4 col-md-6 mb-4 animate-on-scroll" 
                         v-for="proyecto in filteredProjects" 
                         :key="proyecto.id"
                         :style="'animation-delay: ' + (0.1 * (proyecto.id % 3)) + 's'">
                        <div class="project-card h-100">
                            <div class="project-img-container">
                                <img :src="proyecto.imagen" class="project-img" :alt="proyecto.titulo">
                            </div>
                            <div class="card-body">
                                <h5 class="card-title">{{ proyecto.titulo }}</h5>
                                <p class="card-text text-muted">{{ proyecto.descripcion }}</p>
                                <div class="d-flex flex-wrap mb-3">
                                    <span class="badge bg-light text-dark me-2 mb-2" v-for="(tech, index) in proyecto.tecnologias" :key="index">{{ tech }}</span>
                                </div>
                            </div>
                            <div class="card-footer bg-transparent border-0">
                                <a :href="proyecto.enlace" class="btn btn-sm btn-primary">Ver Detalles</a>
                                <a :href="proyecto.enlace" class="btn btn-sm btn-outline-primary ms-2">Demo</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `
};