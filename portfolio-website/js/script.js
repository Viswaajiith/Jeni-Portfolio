/**
 * Full-Stack Developer Portfolio
 * Javascript functionality for dynamic content, animations, and interactions
 */

// DATA STRUCTURES
const portfolioData = {
    projects: [
        {
            title: "Nexus Microservices API",
            description: "A distributed system architecture using Go and gRPC to handle millions of transactions with 99.9% uptime. Includes real-time analytics dashboard built with React.",
            tech: ["Go", "gRPC", "React", "PostgreSQL", "Docker"],
            github: "https://github.com/vvisw",
            demo: "#"
        },
        {
            title: "Quantum E-Commerce",
            description: "NextJS 14 App Router based e-commerce storefront with Stripe integration, Prisma ORM, and TailwindCSS for a highly optimized, fully responsive user experience.",
            tech: ["Next.js", "TypeScript", "TailwindCSS", "Prisma", "Stripe"],
            github: "https://github.com/vvisw",
            demo: "#"
        },
        {
            title: "DataStream AI Platform",
            description: "Machine learning pipeline UI built with Vue.js interfacing with a Python/FastAPI backend. Automates data cleaning and model training processes.",
            tech: ["Vue.js", "Python", "FastAPI", "Redis", "AWS"],
            github: "https://github.com/vvisw",
            demo: "#"
        },
        {
            title: "Terminal.js",
            description: "A lightweight Javascript library to create interactive terminal-like web experiences with command parsing and simulated filesystem.",
            tech: ["JavaScript", "HTML5", "CSS3", "NPM"],
            github: "https://github.com/vvisw",
            demo: "#"
        }
    ],
    experience: [
        {
            date: "2024 - Present",
            title: "Senior Full-Stack Engineer",
            company: "TechNova Solutions",
            description: "Lead architect for cloud-native enterprise applications. Mentored a team of 5 developers and successfully migrated legacy monolithic systems to microservices."
        },
        {
            date: "2021 - 2024",
            title: "Software Engineer II",
            company: "Quantum Dynamics",
            description: "Developed high-traffic React web applications and RESTful Node.js APIs. Reduced database query load by 40% through Redis caching strategies."
        },
        {
            date: "2019 - 2021",
            title: "Frontend Developer",
            company: "Creative Logic Agency",
            description: "Built responsive, accessible web interfaces for diverse clients. Worked closely with UI/UX designers to translate Figma prototypes into pixel-perfect code."
        }
    ],
    blog: [
        {
            date: "OCTOBER 12, 2025",
            title: "Mastering React Server Components",
            summary: "A deep dive into how RSCs change the paradigm of fetching data and rendering UI on the server edge versus the client browser.",
            link: "#"
        },
        {
            date: "AUGUST 05, 2025",
            title: "PostgreSQL Indexing Strategies for Scale",
            summary: "When your database grows beyond 10 million rows, standard querying isn't enough. Here's how to optimize with partial and B-tree indexes.",
            link: "#"
        },
        {
            date: "APRIL 22, 2025",
            title: "Why I switched from VS Code to Neovim",
            summary: "My journey into keyboard-centric development. Configurations, plugins, and overcoming the steep learning curve for maximum productivity.",
            link: "#"
        }
    ]
};

// DOM Content Loaded Handler
document.addEventListener('DOMContentLoaded', () => {
    
    // Set current year
    document.getElementById('year').textContent = new Date().getFullYear();

    // Initialize UI Components
    renderProjects();
    renderExperience();
    renderBlog();
    initTypewriter();
    initCursorGlow();
    initScrollAnimations();
    initNavigation();
});

// ==========================================
// RENDER FUNCTIONS
// ==========================================

function renderProjects() {
    const container = document.getElementById('projects-container');
    if (!container) return;

    let html = '';
    portfolioData.projects.forEach((proj, index) => {
        const delay = index * 0.1;
        const techTags = proj.tech.map(t => `<span class="tag">${t}</span>`).join('');
        
        html += `
            <div class="project-card glass-card fade-in-up" style="transition-delay: ${delay}s">
                <div class="project-header">
                    <i class='bx bx-folder folder-icon'></i>
                    <div class="project-links">
                        <a href="${proj.github}" target="_blank" aria-label="GitHub Repository"><i class='bx bxl-github'></i></a>
                        <a href="${proj.demo}" target="_blank" aria-label="Live Demo"><i class='bx bx-link-external'></i></a>
                    </div>
                </div>
                <h3 class="project-title">${proj.title}</h3>
                <p class="project-desc">${proj.description}</p>
                <div class="tech-tags">
                    ${techTags}
                </div>
            </div>
        `;
    });
    
    container.innerHTML = html;
}

function renderExperience() {
    const container = document.getElementById('timeline-container');
    if (!container) return;

    let html = '';
    portfolioData.experience.forEach((exp, index) => {
        const delay = index * 0.15;
        html += `
            <div class="timeline-item fade-in-up" style="transition-delay: ${delay}s">
                <div class="timeline-dot"></div>
                <div class="timeline-date">${exp.date}</div>
                <div class="glass-card">
                    <h3 class="timeline-title">${exp.title}</h3>
                    <p class="timeline-company"><i class='bx bx-building'></i> ${exp.company}</p>
                    <div class="timeline-desc">
                        <p>${exp.description}</p>
                    </div>
                </div>
            </div>
        `;
    });
    
    container.innerHTML = html;
}

function renderBlog() {
    const container = document.getElementById('blog-container');
    if (!container) return;

    let html = '';
    portfolioData.blog.forEach((post, index) => {
        const delay = index * 0.15;
        html += `
            <div class="blog-card glass-card fade-in-up" style="transition-delay: ${delay}s">
                <div class="blog-date">${post.date}</div>
                <h3 class="blog-title">${post.title}</h3>
                <p class="text-muted" style="font-size: 0.95rem;">${post.summary}</p>
                <a href="${post.link}" class="blog-read-more">Read Article <i class='bx bx-right-arrow-alt'></i></a>
            </div>
        `;
    });
    
    container.innerHTML = html;
}

// ==========================================
// INTERACTIVE EFFECTS
// ==========================================

function initTypewriter() {
    const textElement = document.getElementById('typewriter');
    if (!textElement) return;

    const words = ["Software Engineer.", "System Architect.", "UI/UX Developer.", "Problem Solver."];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typeSpeed = 100;

    function type() {
        const currentWord = words[wordIndex];
        
        if (isDeleting) {
            textElement.textContent = currentWord.substring(0, charIndex - 1);
            charIndex--;
            typeSpeed = 50;
        } else {
            textElement.textContent = currentWord.substring(0, charIndex + 1);
            charIndex++;
            typeSpeed = 100;
        }

        if (!isDeleting && charIndex === currentWord.length) {
            isDeleting = true;
            typeSpeed = 2000; // Pause at end of word
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            typeSpeed = 500; // Pause before new word
        }

        setTimeout(type, typeSpeed);
    }

    // Start the effect
    setTimeout(type, 1000);
}

function initCursorGlow() {
    const cursorGlow = document.getElementById('cursor-glow');
    if (!cursorGlow) return;

    document.addEventListener('mousemove', (e) => {
        // Smoothly follow the cursor
        cursorGlow.style.left = e.clientX + 'px';
        cursorGlow.style.top = e.clientY + 'px';
    });
}

// ==========================================
// SCROLL OBSERVATIONS
// ==========================================

function initScrollAnimations() {
    // Header scroll styling
    const header = document.getElementById('header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        updateActiveNavLink();
    });

    // Intersection Observer for fade-in elements
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Optional: stop observing once animated
                // observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.fade-in, .fade-in-up').forEach(el => {
        observer.observe(el);
    });
}

// ==========================================
// NAVIGATION CONTROLS
// ==========================================

function initNavigation() {
    const mobileToggle = document.getElementById('mobile-toggle');
    const navbar = document.getElementById('navbar');
    
    // Toggle mobile menu
    if (mobileToggle) {
        mobileToggle.addEventListener('click', () => {
            navbar.classList.toggle('active');
            const icon = mobileToggle.querySelector('i');
            if (navbar.classList.contains('active')) {
                icon.classList.replace('bx-menu', 'bx-x');
            } else {
                icon.classList.replace('bx-x', 'bx-menu');
            }
        });
    }

    // Close menu when link is clicked
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navbar.classList.remove('active');
            if(mobileToggle) {
                const icon = mobileToggle.querySelector('i');
                if (icon.classList.contains('bx-x')) {
                    icon.classList.replace('bx-x', 'bx-menu');
                }
            }
        });
    });
}

function updateActiveNavLink() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}
