const Testimonials = {
    data() {
        return {
            testimonios: [
                {
                    id: 1,
                    nombre: "María González",
                    puesto: "CEO, TechSolutions",
                    contenido: "Excelente trabajo. Entregaron el proyecto antes de lo esperado con una calidad sobresaliente. Definitivamente volveré a contratarlos.",
                    foto: "assets/images/testimonial1.jpg",
                    rating: 5
                },
                {
                    id: 2,
                    nombre: "Carlos Mendoza",
                    puesto: "Director de Marketing, DigitalPlus",
                    contenido: "Increíble atención al detalle y profesionalismo. Transformaron completamente nuestra presencia digital.",
                    foto: "assets/images/testimonial2.jpg",
                    rating: 5
                },
                {
                    id: 3,
                    nombre: "Ana López",
                    puesto: "Gerente de Producto, Innovatech",
                    contenido: "Trabajar con ellos fue una experiencia excepcional. Entienden perfectamente las necesidades del negocio.",
                    foto: "assets/images/testimonial3.jpg",
                    rating: 4
                }
            ],
            clientes: [
                { logo: "assets/images/google.png", nombre: "Google" },
                { logo: "assets/images/Microsoft.png", nombre: "Microsoft" },
                { logo: "assets/images/amazon.png", nombre: "Amazon" },
                { logo: "assets/images/netflix.png", nombre: "Netflix" }
            ],
            activeTestimonial: 0
        }
    },
    methods: {
        nextTestimonial() {
            this.activeTestimonial = (this.activeTestimonial + 1) % this.testimonios.length;
        },
        prevTestimonial() {
            this.activeTestimonial = (this.activeTestimonial - 1 + this.testimonios.length) % this.testimonios.length;
        },
        goToTestimonial(index) {
            this.activeTestimonial = index;
        }
    },
    template: `
        <section id="testimonios" class="py-5 bg-light">
            <div class="container">
                <h2 class="section-title text-center mb-5">Lo que dicen <span class="highlight">mis clientes</span></h2>
                
                <!-- Testimonios -->
                <div class="testimonials-carousel mb-5">
                    <div class="row justify-content-center">
                        <div class="col-lg-8">
                            <div class="testimonial-card p-5 text-center animate-on-scroll">
                                <div class="testimonial-author mb-4">
                                    <img :src="testimonios[activeTestimonial].foto" :alt="testimonios[activeTestimonial].nombre" 
                                         class="rounded-circle mb-3" width="80">
                                    <h4 class="mb-1">{{ testimonios[activeTestimonial].nombre }}</h4>
                                    <p class="text-muted mb-4">{{ testimonios[activeTestimonial].puesto }}</p>
                                </div>
                                <div class="rating mb-4">
                                    <i class="fas fa-star" v-for="i in testimonios[activeTestimonial].rating" :key="i"></i>
                                    <i class="far fa-star" v-for="i in (5 - testimonios[activeTestimonial].rating)" :key="'empty-' + i"></i>
                                </div>
                                <p class="testimonial-content lead">"{{ testimonios[activeTestimonial].contenido }}"</p>
                            </div>
                            
                            <div class="testimonial-nav mt-4 d-flex justify-content-center">
                                <button @click="prevTestimonial" class="btn btn-sm btn-outline-primary mx-1">
                                    <i class="fas fa-chevron-left"></i>
                                </button>
                                <button v-for="(testimonio, index) in testimonios" 
                                        @click="goToTestimonial(index)" 
                                        :class="{ 'btn-primary': activeTestimonial === index, 'btn-outline-primary': activeTestimonial !== index }" 
                                        class="btn btn-sm mx-1">
                                    {{ index + 1 }}
                                </button>
                                <button @click="nextTestimonial" class="btn btn-sm btn-outline-primary mx-1">
                                    <i class="fas fa-chevron-right"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- Clientes -->
                <div class="a mt-5 pt-5">
                    <h3 class="text-center mb-5">Algunos de <span class="highlight">mis clientes</span></h3>
                    
                    <div class="row justify-content-center align-items-center">
                        <div class="col-6 col-md-4 col-lg-2 mb-4" v-for="(cliente, index) in clientes" :key="index">
                            <div class="client-logo-container p-3 animate-on-scroll" :style="'animation-delay: ' + (index * 0.1) + 's'">
                                <img :src="cliente.logo" :alt="cliente.nombre" class="img-fluid client-logo">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `
};