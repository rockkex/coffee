// Navbar background on scroll
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    nav.style.background = window.scrollY > 50 ? 'rgba(45, 31, 22, 0.95)' : '#2d1f16';
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

document.querySelectorAll('.about-section, .team-member').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.8s ease-out';
    observer.observe(el);
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

// Team member hover effect
document.querySelectorAll('.team-member').forEach(member => {
    member.addEventListener('mouseenter', function() {
        this.querySelector('.member-avatar').style.transform = 'scale(1.1) rotate(5deg)';
    });
    
    member.addEventListener('mouseleave', function() {
        this.querySelector('.member-avatar').style.transform = 'scale(1) rotate(0deg)';
    });
});
