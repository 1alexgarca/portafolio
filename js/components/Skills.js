const Skills = {
    data() {
        return {
            habilidades: [
                { nombre: "HTML/CSS", nivel: 95, años: 5 },
                { nombre: "JavaScript", nivel: 90, años: 4 },
                { nombre: "Vue.js", nivel: 85, años: 3 },
                { nombre: "React", nivel: 80, años: 3 },
                { nombre: "Node.js", nivel: 75, años: 3 },
                { nombre: "Python", nivel: 70, años: 2 },
                { nombre: "Django", nivel: 65, años: 2 },
                { nombre: "SQL", nivel: 80, años: 4 },
                { nombre: "Git", nivel: 85, años: 4 },
                { nombre: "Docker", nivel: 70, años: 2 },
                { nombre: "AWS", nivel: 60, años: 1 },
                { nombre: "UI/UX Design", nivel: 75, años: 3 }
            ],
            categories: [
                { id: 'frontend', label: 'Frontend' },
                { id: 'backend', label: 'Backend' },
                { id: 'tools', label: 'Herramientas' },
                { id: 'design', label: 'Diseño' }
            ],
            activeCategory: 'all'
        }
    },
    computed: {
        filteredSkills() {
            if (this.activeCategory === 'all') return this.habilidades;
            
            const categoryMap = {
                'frontend': ['HTML/CSS', 'JavaScript', 'Vue.js', 'React'],
                'backend': ['Node.js', 'Python', 'Django', 'SQL'],
                'tools': ['Git', 'Docker', 'AWS'],
                'design': ['UI/UX Design']
            };
            
            return this.habilidades.filter(skill => 
                categoryMap[this.activeCategory].includes(skill.nombre)
            );
        }
    },
    methods: {
        filterSkills(category) {
            this.activeCategory = category;
        },
        getCategorySkills(category) {
            const categoryMap = {
                'frontend': ['HTML/CSS', 'JavaScript', 'Vue.js', 'React'],
                'backend': ['Node.js', 'Python', 'Django', 'SQL'],
                'tools': ['Git', 'Docker', 'AWS'],
                'design': ['UI/UX Design']
            };
            
            return this.habilidades.filter(skill => 
                categoryMap[category].includes(skill.nombre)
            );
        }
    },
    template: `
        <section id="habilidades" class="py-5">
            <div class="container">
                <h2 class="section-title text-center mb-5">Mis <span class="highlight">Habilidades</span></h2>
                
                <div class="text-center mb-5">
                    <button @click="filterSkills('all')" 
                            :class="{ 'btn-primary': activeCategory === 'all' }" 
                            class="btn btn-outline-primary mx-2 mb-2">
                        Todas
                    </button>
                    <button v-for="category in categories" 
                            :key="category.id" 
                            @click="filterSkills(category.id)" 
                            :class="{ 'btn-primary': activeCategory === category.id }" 
                            class="btn btn-outline-primary mx-2 mb-2">
                        {{ category.label }}
                    </button>
                </div>
                
                <div class="row">
                    <div class="col-md-6 mb-4 animate-on-scroll" 
                         v-for="(habilidad, index) in filteredSkills" 
                         :key="index"
                         :style="'animation-delay: ' + (index * 0.1) + 's'">
                        <div class="skill-item p-4 rounded-3 h-100">
                            <div class="skill-name d-flex justify-content-between mb-3">
                                <h5 class="mb-0">{{ habilidad.nombre }}</h5>
                                <span class="text-muted">{{ habilidad.años }} años</span>
                            </div>
                            <div class="skill-bar">
                                <div class="skill-progress" :style="{ width: habilidad.nivel + '%' }"></div>
                            </div>
                            <div class="d-flex justify-content-between mt-2">
                                <small class="text-muted">Básico</small>
                                <small class="text-muted">Avanzado</small>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="skills-categories mt-5 pt-5">
                    <div class="row">
                        <div class="col-lg-3 col-md-6 mb-4" v-for="category in categories" :key="'cat-' + category.id">
                            <div class="category-card p-4 rounded-3 h-100">
                                <h4 class="text-center mb-4">{{ category.label }}</h4>
                                <ul class="skills-list">
                                    <li v-for="skill in getCategorySkills(category.id)" :key="skill.nombre">
                                        <i class="fas fa-check-circle me-2 text-primary"></i>
                                        {{ skill.nombre }} <span class="text-muted">({{ skill.nivel }}%)</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `
};