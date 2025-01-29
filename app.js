// Navigation Burger Menu
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    burger.classList.toggle('toggle');
});

// Services Data
const services = [
    { title: "Residential Construction", description: "Quality home construction services across Kenya" },
    { title: "Commercial Buildings", description: "Office complexes and retail spaces" },
    { title: "Renovations", description: "Modernization and upgrades for existing structures" },
    { title: "Project Management", description: "Professional construction management services" },
];

// Load Services
function loadServices() {
    const servicesGrid = document.querySelector('.services-grid');
    servicesGrid.innerHTML = services.map(service => `
        <div class="service-card" onclick="openServiceCard()" >
            <h3>${service.title}</h3>
            <p>${service.description}</p>
        </div>
    `).join('');
}

function openServiceCard(){
    console.log("Service card opened");
    
}

// Form Handling
const form = document.getElementById('inquiryForm');
const notification = document.querySelector('.notification');

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    form.style.transform = 'scale(0.98)';
    form.style.opacity = '0.8';
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    notification.classList.add('show');
    setTimeout(() => {
        notification.classList.remove('show');
    }, 3000);
    
    form.reset();
    form.style.transform = '';
    form.style.opacity = '';
});

// Scroll Animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// Particle Effect
function createParticles() {
    const hero = document.querySelector('.hero');
    for(let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 5 + 's';
        hero.appendChild(particle);
    }
}

// Scroll to Form
function scrollToForm() {
    document.getElementById('contact').scrollIntoView({
        behavior: 'smooth'
    });
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    loadServices();
    createParticles();
});