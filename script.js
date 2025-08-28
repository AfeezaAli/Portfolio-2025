// Mobile menu functionality
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.nav-menu-toggle');
    const hamburger = document.querySelector('.hamburger');
    const mobileMenu = document.querySelector('.mobile-menu');
    
    if (menuToggle && hamburger && mobileMenu) {
        menuToggle.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            mobileMenu.classList.toggle('active');
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!menuToggle.contains(e.target)) {
                hamburger.classList.remove('active');
                mobileMenu.classList.remove('active');
            }
        });
        
        // Close menu when clicking on a link
        const mobileMenuLinks = mobileMenu.querySelectorAll('a');
        mobileMenuLinks.forEach(link => {
            link.addEventListener('click', function() {
                hamburger.classList.remove('active');
                mobileMenu.classList.remove('active');
            });
        });
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
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

// Skills carousel functionality
document.addEventListener('DOMContentLoaded', function() {
    const skillsTrack = document.querySelector('.skills-track');
    const prevBtn = document.querySelector('.carousel-prev');
    const nextBtn = document.querySelector('.carousel-next');
    
    if (skillsTrack && prevBtn && nextBtn) {
        let currentIndex = 0;
        const cardWidth = 320; // card width + gap
        const maxIndex = Math.max(0, skillsTrack.children.length - 3); // show 3 cards at a time
        
        function updateCarousel() {
            const translateX = -currentIndex * cardWidth;
            skillsTrack.style.transform = `translateX(${translateX}px)`;
            
            // Keep both arrows looking the same initially
            prevBtn.style.opacity = '1';
            nextBtn.style.opacity = '1';
        }
        
        prevBtn.addEventListener('click', () => {
            if (currentIndex > 0) {
                currentIndex--;
                updateCarousel();
            }
        });
        
        nextBtn.addEventListener('click', () => {
            if (currentIndex < maxIndex) {
                currentIndex++;
                updateCarousel();
            }
        });
        
        // Initialize carousel
        updateCarousel();
    }
});

// Sticky Stack Scroll Effect for Projects
document.addEventListener('DOMContentLoaded', function() {
    const projectCards = document.querySelectorAll('.project-card');
    const projectsSection = document.querySelector('.projects');
    
    if (projectCards.length > 0) {
        // Handle scroll events for smooth transitions
        let ticking = false;
        
        function updateStickyStack() {
            const scrollTop = window.pageYOffset;
            const projectsOffset = projectsSection.offsetTop;
            const projectsHeight = projectsSection.offsetHeight;
            
            // Only apply sticky effect when projects section is in view
            if (scrollTop >= projectsOffset - window.innerHeight && 
                scrollTop <= projectsOffset + projectsHeight) {
                
                // Clear all stacking classes first
                projectCards.forEach(card => {
                    card.classList.remove('sticky', 'stack-1', 'stack-2', 'stack-3', 'stack-4');
                });
                
                // Find which card should be sticky and apply stacking
                let stickyIndex = -1;
                const stickyThreshold = 120;
                
                projectCards.forEach((card, index) => {
                    const cardRect = card.getBoundingClientRect();
                    const cardTop = cardRect.top;
                    const cardHeight = cardRect.height;
                    
                    // Check if this card should be sticky
                    if (cardTop <= stickyThreshold && cardTop + cardHeight > stickyThreshold) {
                        stickyIndex = index;
                    }
                });
                
                // Apply stacking classes based on which card is sticky
                if (stickyIndex >= 0) {
                    // The sticky card
                    projectCards[stickyIndex].classList.add('sticky');
                    
                    // Cards that should stack above the sticky card
                    for (let i = stickyIndex + 1; i < projectCards.length; i++) {
                        const stackLevel = i - stickyIndex;
                        if (stackLevel <= 4) { // Limit to 4 stacked cards
                            projectCards[i].classList.add(`stack-${stackLevel}`);
                        }
                    }
                } else {
                    // If no card is sticky, find the first card that should be
                    projectCards.forEach((card, index) => {
                        const cardRect = card.getBoundingClientRect();
                        if (cardRect.top < stickyThreshold && cardRect.bottom > stickyThreshold) {
                            card.classList.add('sticky');
                            
                            // Stack subsequent cards
                            for (let i = index + 1; i < projectCards.length; i++) {
                                const stackLevel = i - index;
                                if (stackLevel <= 4) {
                                    projectCards[i].classList.add(`stack-${stackLevel}`);
                                }
                            }
                        }
                    });
                }
            } else {
                // Remove all sticky classes when outside projects section
                projectCards.forEach(card => {
                    card.classList.remove('sticky', 'stack-1', 'stack-2', 'stack-3', 'stack-4');
                });
            }
            
            ticking = false;
        }
        
        // Throttle scroll events for performance
        window.addEventListener('scroll', () => {
            if (!ticking) {
                requestAnimationFrame(updateStickyStack);
                ticking = true;
            }
        });
        
        // Initial call
        updateStickyStack();
    }
});

// Navbar scroll effect removed to maintain consistent styling

// Add animation on scroll for elements
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all cards and sections
document.querySelectorAll('.skill-card, .project-card, .testimonial-item, .stat-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Testimonials accordion functionality
document.addEventListener('DOMContentLoaded', function() {
    const testimonialItems = document.querySelectorAll('.testimonial-item');
    
    testimonialItems.forEach(item => {
        const header = item.querySelector('.testimonial-header');
        const toggle = item.querySelector('.testimonial-toggle i');
        
        header.addEventListener('click', function() {
            const isActive = item.classList.contains('active');
            
            // Close all other testimonials
            testimonialItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                    const otherToggle = otherItem.querySelector('.testimonial-toggle i');
                    otherToggle.className = 'fas fa-plus';
                }
            });
            
            // Toggle current testimonial
            if (isActive) {
                item.classList.remove('active');
                toggle.className = 'fas fa-plus';
            } else {
                item.classList.add('active');
                toggle.className = 'fas fa-minus';
            }
        });
    });
    

}); 

// Case Study Navigation Functionality
document.addEventListener('DOMContentLoaded', function() {
    const navItems = document.querySelectorAll('.case-study-nav .nav-item');
    const sections = document.querySelectorAll('.case-study-section');
    const caseStudyContent = document.querySelector('.case-study-content');
    
    // Check if this is a case study with show/hide sections (like Deets App)
    // Look for the specific structure used in Deets App
    const isDeetsAppStyle = sections.length > 0 && 
        document.querySelector('.case-study-section[data-section]');
    
    // Use the same scroll logic for all case study pages
    // Function to scroll to section
    function scrollToSection(targetId) {
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            // Check if this is the Deets App page
            const isDeetsApp = document.body.classList.contains('deets-app');
            
            if (isDeetsApp) {
                // For Deets App: scroll to the case study section first, then to the specific heading
                const caseStudySection = targetSection.closest('.project-content-wrapper');
                if (caseStudySection) {
                    // Calculate position relative to the case study section
                    const caseStudyTop = caseStudySection.offsetTop;
                    const targetRelativeTop = targetSection.offsetTop - caseStudyTop;
                    const finalPosition = caseStudyTop + targetRelativeTop - 140;
                    
                    window.scrollTo({
                        top: finalPosition,
                        behavior: 'smooth'
                    });
                }
            } else {
                // For Dashboard Design Studio: direct scroll to section
                const offset = 140; // Account for sticky header
                const targetPosition = targetSection.offsetTop - offset;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        }
    }
    
    // Function to update active nav item
    function updateActiveNavItem(targetId) {
        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('data-target') === targetId || item.getAttribute('data-section') === targetId) {
                item.classList.add('active');
            }
        });
    }
    
    // Add click event listeners to nav items
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            const targetId = this.getAttribute('data-target') || this.getAttribute('data-section');
            scrollToSection(targetId);
            updateActiveNavItem(targetId);
        });
    });
});

// Project card click functionality - simplified since cards are now anchor tags
document.addEventListener('DOMContentLoaded', function() {
    // The project cards are now anchor tags, so they work natively
    // No additional JavaScript needed for basic navigation
    
    // Add some visual feedback for better UX
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        // Add keyboard navigation support
        card.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            }
        });
        
        // Remove focus styles to prevent unwanted borders
        card.addEventListener('focus', function() {
            this.style.outline = 'none';
        });
        
        card.addEventListener('blur', function() {
            this.style.outline = 'none';
        });
    });
});

// Case Study Navigation Functionality
// Only target the case study navigation specifically
document.addEventListener('DOMContentLoaded', function() {
    const caseStudyNav = document.querySelector('.case-study-nav');
    const navItems = caseStudyNav ? caseStudyNav.querySelectorAll('.nav-item') : [];
    const caseStudyContent = document.querySelector('.case-study-content');
    const caseStudySections = caseStudyContent ? caseStudyContent.querySelectorAll('.case-study-section') : [];

    // Function to scroll to section by index
    function scrollToSectionByIndex(index) {
        if (caseStudySections[index]) {
            const offset = 160; // Account for sticky header and nav
            const targetPosition = caseStudySections[index].offsetTop - offset;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    }

    // Function to update active nav link by index
    function updateActiveNavLinkByIndex(index) {
        navItems.forEach((item, i) => {
            item.classList.remove('active');
            if (i === index) {
                item.classList.add('active');
            }
        });
    }

    // Add click event listeners to case study nav items only
    navItems.forEach((item, index) => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            scrollToSectionByIndex(index);
            updateActiveNavLinkByIndex(index);
        });
    });

    // Update active nav based on scroll position (only for case study sections)
    function updateActiveNavOnScroll() {
        const scrollPosition = window.scrollY + 200; // Offset for better detection
        caseStudySections.forEach((section, index) => {
            const sectionTop = section.offsetTop;
            const sectionBottom = sectionTop + section.offsetHeight;
            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                updateActiveNavLinkByIndex(index);
            }
        });
    }

    // Only add scroll listener if case study nav exists
    if (caseStudyNav) {
        window.addEventListener('scroll', updateActiveNavOnScroll);
    }
}); 