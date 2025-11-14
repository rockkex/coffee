// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Navbar background on scroll
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    nav.style.background = window.scrollY > 50 ? 'rgba(45, 31, 22, 0.95)' : '#2d1f16';
});

// Parallax effect on hero
window.addEventListener('scroll', () => {
    const hero = document.querySelector('.hero-content');
    const scrolled = window.scrollY;
    hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    hero.style.opacity = 1 - scrolled / 600;
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

document.querySelectorAll('.feature, .menu-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.6s ease-out';
    observer.observe(el);
});

// Menu item click effect
document.querySelectorAll('.menu-item').forEach(item => {
    item.addEventListener('click', function() {
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = '';
        }, 200);
        
        const modal = document.createElement('div');
        modal.className = 'modal';
        modal.innerHTML = `
            <div class="modal-content">
                <span class="close">&times;</span>
                <h2>${this.querySelector('h4').textContent}</h2>
                <p>${this.querySelector('p').textContent}</p>
                <p class="price">${this.querySelector('span').textContent}</p>
                <button class="order-btn">Add to Order</button>
            </div>
        `;
        document.body.appendChild(modal);
        
        setTimeout(() => modal.classList.add('show'), 10);
        
        modal.querySelector('.close').onclick = () => {
            modal.classList.remove('show');
            setTimeout(() => modal.remove(), 300);
        };
        
        modal.onclick = (e) => {
            if (e.target === modal) {
                modal.classList.remove('show');
                setTimeout(() => modal.remove(), 300);
            }
        };
        
        modal.querySelector('.order-btn').onclick = () => {
            alert('Added to order! 🎉');
            modal.classList.remove('show');
            setTimeout(() => modal.remove(), 300);
        };
    });
});

// CTA button scroll to menu
document.querySelector('.cta-btn').addEventListener('click', () => {
    document.querySelector('#menu').scrollIntoView({ behavior: 'smooth' });
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

// Random coffee bean particles
setInterval(() => {
    const bean = document.createElement('div');
    bean.className = 'coffee-particle';
    bean.style.left = Math.random() * 100 + '%';
    bean.style.animationDuration = (Math.random() * 3 + 2) + 's';
    document.querySelector('.hero').appendChild(bean);
    
    setTimeout(() => bean.remove(), 5000);
}, 2000);
