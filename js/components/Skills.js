const Skills = {
    data() {
        return {
            habilidades: [
                { nombre: "HTML", nivel: 90 },
                { nombre: "CSS", nivel: 85 },
                { nombre: "JavaScript", nivel: 80 },
                { nombre: "Vue.js", nivel: 75 },
                { nombre: "Node.js", nivel: 70 },
                { nombre: "Git", nivel: 80 },
                { nombre: "PHP", nivel: 70 },
                { nombre: "MySQL", nivel: 75 },
                { nombre: "Bootstrap", nivel: 80 },
                { nombre: "Tailwind CSS", nivel: 70 },
                { nombre: "Figma", nivel: 65 },
                { nombre: "Responsive Design", nivel: 80 },
                { nombre: "API REST", nivel: 75 },
                { nombre: "Agile Methodologies", nivel: 70 },
                { nombre: "Scrum", nivel: 65 },
                { nombre: "Docker", nivel: 55 },
                { nombre: "AWS", nivel: 50 },
                { nombre: "Firebase", nivel: 65 },
                { nombre: "Kotlin", nivel: 60 }
            ]
        }
    },
    template: `
        <section id="habilidades" class="py-5">
            <div class="container">
                <h2 class="section-title">Mis Habilidades</h2>
                <div class="row">
                    <div class="col-md-6" v-for="habilidad in habilidades" :key="habilidad.nombre">
                        <div class="skill-item mb-4">
                            <div class="d-flex justify-content-between">
                                <h5>{{ habilidad.nombre }}</h5>
                                <span>{{ habilidad.nivel }}%</span>
                            </div>
                            <div class="progress">
                                <div class="progress-bar" role="progressbar" 
                                    :style="{ width: habilidad.nivel + '%' }" 
                                    :aria-valuenow="habilidad.nivel" 
                                    aria-valuemin="0" 
                                    aria-valuemax="100">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `
};