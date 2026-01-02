// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Simple animation when cards enter the viewport
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'all 0.6s ease-out';
    observer.observe(card);
});

// Ensure buttons respond quickly on mobile touch
document.querySelectorAll('.btn, .link-card').forEach(button => {
    button.addEventListener('touchstart', function() {
        this.style.opacity = '0.7';
    });
    
    button.addEventListener('touchend', function() {
        this.style.opacity = '1';
    });
});

/* Comments: This script improves the tactile feel 
   of the landing page on mobile devices. */


