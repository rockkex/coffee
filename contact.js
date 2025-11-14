// Navbar background on scroll
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    nav.style.background = window.scrollY > 50 ? 'rgba(45, 31, 22, 0.95)' : '#2d1f16';
});

// Form submission
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;
    
    // Simulate form submission
    const submitBtn = this.querySelector('.submit-btn');
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;
    
    setTimeout(() => {
        alert(`Thank you, ${name}! We'll get back to you soon.`);
        this.reset();
        submitBtn.textContent = 'Send Message';
        submitBtn.disabled = false;
    }, 1500);
});

// Intersection Observer for fade-in animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.contact-form-container, .contact-info, .info-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.6s ease-out';
    observer.observe(el);
});

// Input focus effects
document.querySelectorAll('input, textarea').forEach(input => {
    input.addEventListener('focus', function() {
        this.style.borderColor = '#d4a574';
        this.style.transform = 'scale(1.02)';
    });
    
    input.addEventListener('blur', function() {
        this.style.borderColor = 'rgba(212, 165, 116, 0.3)';
        this.style.transform = 'scale(1)';
    });
});

// Cursor trail effect
const trail = [];
const trailLength = 10;

document.addEventListener('mousemove', (e) => {
    trail.push({ x: e.clientX, y: e.clientY });
    if (trail.length > trailLength) trail.shift();
    
    document.querySelectorAll('.cursor-dot').forEach(dot => dot.remove());
    
    trail.forEach((pos, index) => {
        const dot = document.createElement('div');
        dot.className = 'cursor-dot';
        dot.style.left = pos.x + 'px';
        dot.style.top = pos.y + 'px';
        dot.style.opacity = (index / trailLength) * 0.5;
        dot.style.transform = `scale(${index / trailLength})`;
        document.body.appendChild(dot);
        
        setTimeout(() => dot.remove(), 500);
    });
});
