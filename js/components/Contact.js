const Contact = {
    data() {
        return {
            formData: {
                nombre: '',
                email: '',
                asunto: '',
                mensaje: ''
            },
            enviado: false,
            isLoading: false,
            errors: {}
        }
    },
    methods: {
        validateForm() {
            this.errors = {};
            
            if (!this.formData.nombre) {
                this.errors.nombre = 'Por favor ingresa tu nombre';
            }
            
            if (!this.formData.email) {
                this.errors.email = 'Por favor ingresa tu email';
            } else if (!/^\S+@\S+\.\S+$/.test(this.formData.email)) {
                this.errors.email = 'Por favor ingresa un email válido';
            }
            
            if (!this.formData.asunto) {
                this.errors.asunto = 'Por favor ingresa un asunto';
            }
            
            if (!this.formData.mensaje) {
                this.errors.mensaje = 'Por favor ingresa tu mensaje';
            }
            
            return Object.keys(this.errors).length === 0;
        },
        async submitForm() {
            if (!this.validateForm()) return;
            
            this.isLoading = true;
            
            try {
                // Simular envío a una API
                await new Promise(resolve => setTimeout(resolve, 1500));
                
                this.enviado = true;
                this.formData = { nombre: '', email: '', asunto: '', mensaje: '' };
                
                setTimeout(() => {
                    this.enviado = false;
                }, 5000);
            } catch (error) {
                console.error('Error al enviar el formulario:', error);
            } finally {
                this.isLoading = false;
            }
        }
    },
    template: `
        <section id="contacto" class="py-5">
            <div class="container">
                <h2 class="section-title text-center mb-5">Contáct<span class="highlight">ame</span></h2>
                
                <div class="row justify-content-center">
                    <div class="col-lg-8">
                        <div v-if="enviado" class="alert alert-success alert-dismissible fade show">
                            ¡Gracias por tu mensaje! Me pondré en contacto contigo pronto.
                            <button type="button" class="btn-close" @click="enviado = false"></button>
                        </div>
                        
                        <div class="contact-form animate-on-scroll">
                            <form @submit.prevent="submitForm" novalidate>
                                <div class="row">
                                    <div class="col-md-6 mb-4">
                                        <label for="nombre" class="form-label">Nombre completo</label>
                                        <input type="text" class="form-control" id="nombre" v-model="formData.nombre"
                                               :class="{ 'is-invalid': errors.nombre }">
                                        <div class="invalid-feedback" v-if="errors.nombre">{{ errors.nombre }}</div>
                                    </div>
                                    <div class="col-md-6 mb-4">
                                        <label for="email" class="form-label">Email</label>
                                        <input type="email" class="form-control" id="email" v-model="formData.email"
                                               :class="{ 'is-invalid': errors.email }">
                                        <div class="invalid-feedback" v-if="errors.email">{{ errors.email }}</div>
                                    </div>
                                </div>
                                
                                <div class="mb-4">
                                    <label for="asunto" class="form-label">Asunto</label>
                                    <input type="text" class="form-control" id="asunto" v-model="formData.asunto"
                                           :class="{ 'is-invalid': errors.asunto }">
                                    <div class="invalid-feedback" v-if="errors.asunto">{{ errors.asunto }}</div>
                                </div>
                                
                                <div class="mb-4">
                                    <label for="mensaje" class="form-label">Mensaje</label>
                                    <textarea class="form-control" id="mensaje" rows="5" v-model="formData.mensaje"
                                              :class="{ 'is-invalid': errors.mensaje }"></textarea>
                                    <div class="invalid-feedback" v-if="errors.mensaje">{{ errors.mensaje }}</div>
                                </div>
                                
                                <div class="text-center">
                                    <button type="submit" class="btn btn-primary btn-lg" :disabled="isLoading">
                                        <span v-if="!isLoading">Enviar mensaje</span>
                                        <span v-else>
                                            <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                            Enviando...
                                        </span>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                
                <div class="contact-info mt-5 pt-5">
                    <div class="row justify-content-center">
                        <div class="col-md-4 mb-4 mb-md-0 text-center animate-on-scroll">
                            <div class="info-card p-4 h-100">
                                <div class="info-icon mb-3">
                                    <i class="fas fa-map-marker-alt fa-2x"></i>
                                </div>
                                <h4>Ubicación</h4>
                                <p class="mb-0">Ciudad, País</p>
                            </div>
                        </div>
                        <div class="col-md-4 mb-4 mb-md-0 text-center animate-on-scroll" style="animation-delay: 0.2s">
                            <div class="info-card p-4 h-100">
                                <div class="info-icon mb-3">
                                    <i class="fas fa-envelope fa-2x"></i>
                                </div>
                                <h4>Email</h4>
                                <p class="mb-0">contacto@tudominio.com</p>
                            </div>
                        </div>
                        <div class="col-md-4 text-center animate-on-scroll" style="animation-delay: 0.4s">
                            <div class="info-card p-4 h-100">
                                <div class="info-icon mb-3">
                                    <i class="fas fa-phone-alt fa-2x"></i>
                                </div>
                                <h4>Teléfono</h4>
                                <p class="mb-0">+123 456 7890</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `
};