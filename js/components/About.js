const About = {
    data() {
        return {
            stats: [
                { number: '2+', label: 'Años de experiencia' },
                { number: '5+', label: 'Proyectos completados' },
                { number: '3+', label: 'Clientes satisfechos' },
               
            ],
            timeline: [
                { year: '2025-Presente', title: 'Programador Analitico', company: 'Secretaria de Administración y Finanzas, del estado de Tabasco' },
                { year: '2023-2024', title: 'Practicante de Desarrollo', company: 'Henet Ingenieros S.A. de C.V.' },
       
            ],
            skills: [
                'Desarrollo Web Frontend',
                'Diseño UI/UX',
                'Desarrollo Backend',
                'Bases de Datos',
                'DevOps',
                'Metodologías Ágiles'
            ]
        }
    },
    template: `
        <section id="sobre-mi" class="py-5">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-6 mb-5 mb-lg-0 animate-on-scroll">
                        <div class="about-image position-relative">
                            <img src="assets/images/images.png" alt="Sobre mí" class="img-fluid rounded-3 profile-img">
                            <div class="experience-badge animate__animated animate__pulse animate__infinite animate__slower">
                                <span class="number">2+</span>
                                <span class="text">Años de Experiencia</span>
                            </div>
                        </div>
                    </div>
                    
                    <div class="col-lg-6 animate-on-scroll" style="animation-delay: 0.2s">
                        <h2 class="section-title">Conoce <span class="highlight">Sobre Mí</span></h2>
                        <p class="lead">Desarrollador Full Stack con pasión por crear soluciones digitales impactantes.</p>
                        
                        <p>Especializado en desarrollo frontend con Vue.js y React, con sólidos conocimientos en backend con Node.js. Comprometido con escribir código limpio, eficiente y bien documentado.</p>
                        
                        <div class="row mt-4">
                            <div class="col-6 mb-4" v-for="(stat, index) in stats" :key="index">
                                <div class="stat-card p-3 text-center rounded-3">
                                    <h3 class="stat-number mb-0">{{ stat.number }}</h3>
                                    <p class="stat-label mb-0">{{ stat.label }}</p>
                                </div>
                            </div>
                        </div>
                        
                        <div class="mt-4">
                            <a href="#" class="btn btn-primary me-3">Descargar CV</a>
                            <a href="#contacto" class="btn btn-outline-primary">Contáctame</a>
                        </div>
                    </div>
                </div>
                
                <div class="timeline-section mt-5 pt-5">
                    <div class="row">
                        <div class="col-lg-6 animate-on-scroll">
                            <h3 class="mb-4">Mi <span class="highlight">Experiencia</span></h3>
                            
                            <div class="timeline">
                                <div class="timeline-item" v-for="(item, index) in timeline" :key="index">
                                    <div class="timeline-content">
                                        <span class="timeline-year">{{ item.year }}</span>
                                        <h4 class="timeline-title">{{ item.title }}</h4>
                                        <p class="timeline-company">{{ item.company }}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="col-lg-6 animate-on-scroll" style="animation-delay: 0.2s">
                            <h3 class="mb-4">Mis <span class="highlight">Habilidades</span></h3>
                            
                            <ul class="skills-list">
                                <li v-for="(skill, index) in skills" :key="index">
                                    <i class="fas fa-check-circle me-2 text-primary"></i>
                                    {{ skill }}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `
};