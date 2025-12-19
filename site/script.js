// ===== Smooth Scrolling & Active Navigation =====
document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const navItems = document.querySelectorAll('.nav-link');

    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', () => {
            mobileMenuToggle.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
    }

    // Close mobile menu when clicking on a link
    navItems.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                mobileMenuToggle.classList.remove('active');
                navLinks.classList.remove('active');
            }
        });
    });

    // Navbar scroll effect
    const navbar = document.getElementById('navbar');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        lastScroll = currentScroll;
    });

    // Active navigation on scroll
    const sections = document.querySelectorAll('section[id]');
    
    const observerOptions = {
        threshold: 0.2,
        rootMargin: '-100px 0px -60% 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Remove active class from all nav links
                navItems.forEach(link => link.classList.remove('active'));
                
                // Add active class to current section's nav link
                const activeLink = document.querySelector(`.nav-link[href="#${entry.target.id}"]`);
                if (activeLink) {
                    activeLink.classList.add('active');
                }
            }
        });
    }, observerOptions);

    sections.forEach(section => observer.observe(section));

    // Smooth scroll to section
    navItems.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const navHeight = navbar.offsetHeight;
                const targetPosition = targetSection.offsetTop - navHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ===== Week Accordion Functionality =====
    const weekCards = document.querySelectorAll('.week-card');
    
    weekCards.forEach(card => {
        const header = card.querySelector('.week-header');
        
        header.addEventListener('click', () => {
            // Toggle current card
            card.classList.toggle('active');
            
            // Optional: Close other cards when opening one
            // weekCards.forEach(otherCard => {
            //     if (otherCard !== card) {
            //         otherCard.classList.remove('active');
            //     }
            // });
        });
    });

    // ===== Evaluation Section Accordion =====
    const collapsibleSections = document.querySelectorAll('.collapsible-section');
    
    collapsibleSections.forEach(section => {
        const header = section.querySelector('.evaluation-header');
        
        header.addEventListener('click', () => {
            section.classList.toggle('active');
        });
    });

    // Animate grade bars on scroll
    const gradeItems = document.querySelectorAll('.grade-item');
    
    const gradeObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.querySelector('.grade-bar').style.opacity = '1';
                gradeObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    gradeItems.forEach(item => {
        item.querySelector('.grade-bar').style.opacity = '0';
        gradeObserver.observe(item);
    });

    // Card hover effects enhancement
    const cards = document.querySelectorAll('.week-card, .prereq-card, .instructor-card, .case-study-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Scroll reveal animation for elements
    const revealElements = document.querySelectorAll('.week-card, .prereq-card, .instructor-card, .resource-category, .policy-card');
    
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 100); // Stagger animation
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    revealElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        revealObserver.observe(element);
    });

    // Hero scroll indicator
    const scrollIndicator = document.querySelector('.scroll-indicator');
    if (scrollIndicator) {
        scrollIndicator.addEventListener('click', () => {
            const aboutSection = document.getElementById('about');
            if (aboutSection) {
                aboutSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }

    // External links - open in new tab
    document.querySelectorAll('a[href^="http"]').forEach(link => {
        if (!link.hasAttribute('target')) {
            link.setAttribute('target', '_blank');
            link.setAttribute('rel', 'noopener noreferrer');
        }
    });

    // Add loading state for images
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('load', function() {
            this.style.opacity = '1';
        });
        img.style.opacity = '0';
        img.style.transition = 'opacity 0.5s ease';
    });

    // Parallax effect for hero section
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const hero = document.getElementById('hero');
        if (hero && scrolled < hero.offsetHeight) {
            hero.style.transform = `translateY(${scrolled * 0.5}px)`;
            hero.style.opacity = 1 - (scrolled / hero.offsetHeight);
        }
    });

    // Add animation class when elements come into view
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.hero-content, .section-title, .about-text');
        
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150;
            
            if (elementTop < window.innerHeight - elementVisible) {
                element.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Initial check

    // Lazy loading for schedule image
    const scheduleImage = document.querySelector('.schedule-image img');
    if (scheduleImage) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.src; // Trigger load
                    observer.unobserve(img);
                }
            });
        });
        imageObserver.observe(scheduleImage);
    }

    // Add keyboard navigation for accessibility
    document.addEventListener('keydown', (e) => {
        // Navigate sections with arrow keys when focused on nav
        if (document.activeElement.classList.contains('nav-link')) {
            const currentIndex = Array.from(navItems).indexOf(document.activeElement);
            
            if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
                e.preventDefault();
                const nextIndex = (currentIndex + 1) % navItems.length;
                navItems[nextIndex].focus();
            } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
                e.preventDefault();
                const prevIndex = (currentIndex - 1 + navItems.length) % navItems.length;
                navItems[prevIndex].focus();
            }
        }
    });

    // Add copy to clipboard for code snippets (if any are added later)
    const addCopyButtons = () => {
        const codeBlocks = document.querySelectorAll('pre code');
        codeBlocks.forEach(block => {
            const button = document.createElement('button');
            button.className = 'copy-button';
            button.textContent = 'Copy';
            button.addEventListener('click', () => {
                navigator.clipboard.writeText(block.textContent);
                button.textContent = 'Copied!';
                setTimeout(() => {
                    button.textContent = 'Copy';
                }, 2000);
            });
            block.parentElement.style.position = 'relative';
            block.parentElement.appendChild(button);
        });
    };
    addCopyButtons();

    // Performance optimization: Throttle scroll events
    const throttle = (func, delay) => {
        let lastCall = 0;
        return (...args) => {
            const now = new Date().getTime();
            if (now - lastCall < delay) return;
            lastCall = now;
            return func(...args);
        };
    };

    // Apply throttling to scroll events
    window.addEventListener('scroll', throttle(() => {
        // Scroll-dependent operations
    }, 100));

    // Console message
    console.log('%c🎓 Welcome to Topics in Big Data!', 'color: #2563eb; font-size: 20px; font-weight: bold;');
    console.log('%cCS:4266/5266 - Vanderbilt University', 'color: #7c3aed; font-size: 14px;');
    console.log('%cVisit https://scopelab.ai/ for more information', 'color: #475569; font-size: 12px;');
});

// Add service worker for offline capability (optional, for GitHub Pages)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        // Uncomment to enable service worker
        // navigator.serviceWorker.register('/sw.js').then(registration => {
        //     console.log('ServiceWorker registered:', registration);
        // }).catch(error => {
        //     console.log('ServiceWorker registration failed:', error);
        // });
    });
}
