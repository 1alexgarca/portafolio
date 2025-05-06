const {createApp} = Vue;

const app = createApp({
    data() {
        return {
            name: 'Alex Dionisio García',
            title: 'Desarrollador Web',
        }
    }

});

//Registro de componentes
app.component('app-header', Header);
app.component('about-section', About);
app.component('projects-section', Projects);  
app.component('contact-section', Contact);
app.component('skills-section', Skills);  

app.mount('#app');


