// ===== Mobile Navigation Toggle =====
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');

navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close menu when a nav link is clicked
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// ===== Navbar Scroll Effect =====
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// ===== Scroll Animations (Intersection Observer) =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Add fade-in class to elements and observe them
function initScrollAnimations() {
    const animatedElements = document.querySelectorAll(
        '.skill-category, .timeline-item, .project-card, .stat-card, ' +
        '.education-card, .certifications-card, .awards-card, .contact-card'
    );

    animatedElements.forEach((el, index) => {
        el.classList.add('fade-in');
        el.style.transitionDelay = `${index % 4 * 0.1}s`;
        observer.observe(el);
    });

    // Also animate section titles
    document.querySelectorAll('.section-title, .about-text, .contact-subtitle').forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });
}

// ===== Active Nav Link Highlight =====
const sections = document.querySelectorAll('section[id]');

function highlightNavLink() {
    const scrollY = window.scrollY + 100;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

window.addEventListener('scroll', highlightNavLink);

// ===== Typing Effect for Code Block =====
function initTypingEffect() {
    const codeBlock = document.querySelector('.code-block pre code');
    if (!codeBlock) return;

    const originalHTML = codeBlock.innerHTML;
    codeBlock.innerHTML = '';
    codeBlock.style.opacity = '1';

    let charIndex = 0;
    const plainText = codeBlock.textContent || '';

    // Restore original HTML after a brief delay for visual effect
    setTimeout(() => {
        codeBlock.innerHTML = originalHTML;
        codeBlock.style.opacity = '1';
    }, 300);
}

// ===== Smooth Scroll for Anchor Links =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===== Initialize =====
document.addEventListener('DOMContentLoaded', () => {
    initScrollAnimations();
    initTypingEffect();
    highlightNavLink();
});
