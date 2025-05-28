document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS animation library
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true
    });

    // Typewriter Effect
    const text = "Computer Science (Cyber Security) Student";
    const typewriterElement = document.getElementById('typewriter');
    const speed = 100;
    const wait = 2000;
    let isDeleting = false;
    let i = 0;
    let timeout;

    function typeWriter() {
        const currentText = text.substring(0, i);
        typewriterElement.textContent = currentText;
        
        if (!isDeleting && i === text.length) {
            isDeleting = true;
            timeout = setTimeout(typeWriter, wait);
            return;
        }
        
        if (isDeleting && i === 0) {
            isDeleting = false;
            timeout = setTimeout(typeWriter, 500);
            return;
        }
        
        i += isDeleting ? -1 : 1;
        timeout = setTimeout(typeWriter, speed);
    }

    // Start typewriter effect
    typeWriter();

    // Set current year in footer
    document.getElementById('year').textContent = new Date().getFullYear();

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Sticky navigation
    const nav = document.querySelector('nav');
    const navHeight = nav.offsetHeight;
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            nav.style.backgroundColor = 'rgba(1, 1, 1, 0.95)';
            nav.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.2)';
        } else {
            nav.style.backgroundColor = 'rgba(1, 1, 1, 0.9)';
            nav.style.boxShadow = 'none';
        }
    });

    // Clean up typewriter effect on page unload
    window.addEventListener('beforeunload', function() {
        clearTimeout(timeout);
    });
});

// Tab functionality for skills section
function showContent(tabName) {
    // Hide all tab contents
    document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.remove('active');
    });
    
    // Remove active class from all tabs
    document.querySelectorAll('.tab').forEach(tab => {
        tab.classList.remove('active');
    });
    
    // Show selected tab content
    document.getElementById(tabName).classList.add('active');
    
    // Add active class to clicked tab
    event.target.classList.add('active');
}
