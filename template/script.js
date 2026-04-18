// Mobile Navigation Toggle
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('active');
  navToggle.setAttribute('aria-expanded', navToggle.getAttribute('aria-expanded') === 'true' ? 'false' : 'true');
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('active');
  });
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Navbar scroll effect
const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;
  
  if (currentScroll > 100) {
    navbar.style.background = 'rgba(10, 10, 10, 0.98)';
    navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.5)';
  } else {
    navbar.style.background = 'rgba(10, 10, 10, 0.95)';
    navbar.style.boxShadow = 'none';
  }
  
  lastScroll = currentScroll;
});

// Intersection Observer for reveal animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Observe all sections
document.querySelectorAll('.section').forEach(section => {
  section.style.opacity = '0';
  section.style.transform = 'translateY(20px)';
  section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(section);
});

// Typing effect for terminal (optional enhancement)
const typeCode = document.querySelector('.terminal-body code');
if (typeCode) {
  // Add cursor blink effect
  const style = document.createElement('style');
  style.textContent = `
    .terminal-body code {
      display: block;
    }
  `;
  document.head.appendChild(style);
}

// Active nav link highlighting
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

function highlightNav() {
  const scrollY = window.pageYOffset;
  
  sections.forEach(section => {
    const sectionHeight = section.offsetHeight;
    const sectionTop = section.offsetTop - 100;
    const sectionId = section.getAttribute('id');
    
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      navLinks.forEach(link => {
        link.style.color = 'var(--text-secondary)';
        if (link.getAttribute('href') === `#${sectionId}`) {
          link.style.color = 'var(--accent-primary)';
        }
      });
    }
  });
}

window.addEventListener('scroll', highlightNav);

// Initialize
highlightNav();

// Console message for developers
console.log('%c Hello Developer! ', 'background: #00ff88; color: #0a0a0a; font-weight: bold; padding: 4px 8px; border-radius: 4px;', 'Interested in how this was built? Check out the source!');
console.log('%c Alewi Samuel - Backend Engineer & Web Automation Specialist ', 'color: #00ff88; font-weight: bold;');
