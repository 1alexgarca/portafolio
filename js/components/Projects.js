const Projects = {
    Data() {
        return {
            proyectos: [
                {
                    id: 1,
                    titulo: 'Proyecto 1',
                    descripcion: 'Descripción del proyecto 1',
                    tecnologias: ['HTML', 'CSS', 'JavaScript'],
                    enlace: '#',
                    imagen: 'https://via.placeholder.com/300x200'
                },
                {
                    id: 2,
                    titulo: 'Proyecto 2',
                    descripcion: 'Descripción del proyecto 2',
                    tecnologias: ['HTML', 'CSS', 'JavaScript'],
                    enlace: '#',
                    imagen: 'https://via.placeholder.com/300x200'
                },
                {
                    id: 3,
                    titulo: 'Proyecto 3',
                    descripcion: 'Descripción del proyecto 3',
                    tecnologias: ['HTML', 'CSS', 'JavaScript'],
                    enlace: '#',
                    imagen: 'https://via.placeholder.com/300x200'
                }
            ]
        }
    },
    template: `
        <section id="proyectos" class="py-5 bg-light">
            <div class="container">
                <h2 class="section-title">Mis Proyectos</h2>
                <div class="row">
                    <div class="col-md-4 mb-4" v-for="proyecto in proyectos" :key="proyecto.id">
                        <div class="card h-100">
                            <img :src="proyecto.imagen" class="card-img-top" :alt="proyecto.titulo">
                            <div class="card-body">
                                <h5 class="card-title">{{ proyecto.titulo }}</h5>
                                <p class="card-text">{{ proyecto.descripcion }}</p>
                                <div class="mb-2">
                                    <span class="badge bg-secondary me-1" v-for="(tech, index) in proyecto.tecnologias" :key="index">{{ tech }}</span>
                                </div>
                            </div>
                            <div class="card-footer bg-transparent">
                                <a :href="proyecto.enlace" class="btn btn-sm btn-outline-primary">Ver más</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `
};