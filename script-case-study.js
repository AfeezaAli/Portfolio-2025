// Case Study Navigation - Clean Implementation
document.addEventListener('DOMContentLoaded', function() {
    // Get the case study navigation and content
    const caseStudyNav = document.querySelector('.case-study-nav-card');
    const navLinks = caseStudyNav ? caseStudyNav.querySelectorAll('.nav-link') : [];
    const caseStudyContent = document.querySelector('.case-study-content-main');
    const caseStudySections = caseStudyContent ? caseStudyContent.querySelectorAll('.case-study-section') : [];

    // Function to scroll to a specific section
    function scrollToSection(sectionId) {
        const targetSection = document.getElementById(sectionId);
        if (targetSection) {
            const offset = 120; // Account for header
            const targetPosition = targetSection.offsetTop - offset;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    }

    // Function to update active nav link
    function updateActiveNavLink(activeLink) {
        navLinks.forEach(link => {
            link.classList.remove('active');
        });
        if (activeLink) {
            activeLink.classList.add('active');
        }
    }

    // Add click event listeners to navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const sectionId = this.getAttribute('href').substring(1);
            scrollToSection(sectionId);
            updateActiveNavLink(this);
        });
    });

    // Update active nav based on scroll position
    function updateActiveNavOnScroll() {
        const scrollPosition = window.scrollY + 150; // Offset for better detection
        
        caseStudySections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionBottom = sectionTop + section.offsetHeight;
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                const sectionId = section.getAttribute('id');
                const correspondingNavLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
                if (correspondingNavLink) {
                    updateActiveNavLink(correspondingNavLink);
                }
            }
        });
    }

    // Add scroll listener to update active nav
    window.addEventListener('scroll', updateActiveNavOnScroll);
});

// General page functionality
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const menuToggle = document.querySelector('.nav-menu-toggle');
    const hamburger = document.querySelector('.hamburger');
    
    if (menuToggle && hamburger) {
        menuToggle.addEventListener('click', function() {
            hamburger.classList.toggle('active');
        });
    }
}); 