const Contact = {
    data() {
        return {
            formData: {
                nombre: '',
                email: '',
                mensaje: ''
            },
            enviado: false
        }
    },
    methods: {
        submitForm() {
            // Aquí iría la lógica para enviar el formulario
            console.log('Formulario enviado:', this.formData);
            this.enviado = true;
            this.formData = { nombre: '', email: '', mensaje: '' };
            
            // Resetear el estado después de 3 segundos
            setTimeout(() => {
                this.enviado = false;
            }, 3000);
        }
    },
    template: `
        <section id="contacto" class="py-5 bg-light">
            <div class="container">
                <h2 class="section-title">Contacto</h2>
                <div class="row justify-content-center">
                    <div class="col-md-8">
                        <div v-if="enviado" class="alert alert-success">
                            ¡Gracias por tu mensaje! Me pondré en contacto contigo pronto.
                        </div>
                        <form @submit.prevent="submitForm">
                            <div class="mb-3">
                                <label for="nombre" class="form-label">Nombre</label>
                                <input type="text" class="form-control" id="nombre" v-model="formData.nombre" required>
                            </div>
                            <div class="mb-3">
                                <label for="email" class="form-label">Email</label>
                                <input type="email" class="form-control" id="email" v-model="formData.email" required>
                            </div>
                            <div class="mb-3">
                                <label for="mensaje" class="form-label">Mensaje</label>
                                <textarea class="form-control" id="mensaje" rows="5" v-model="formData.mensaje" required></textarea>
                            </div>
                            <button type="submit" class="btn btn-primary">Enviar mensaje</button>
                        </form>
                    </div>
                </div>
                <div class="social-links text-center mt-5">
                    <a href="#" class="mx-3"><i class="fab fa-github fa-2x"></i></a>
                    <a href="#" class="mx-3"><i class="fab fa-linkedin fa-2x"></i></a>
                    <a href="#" class="mx-3"><i class="fab fa-twitter fa-2x"></i></a>
                </div>
            </div>
        </section>
    `
};