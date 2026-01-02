// Function to add a smooth fade-in effect when the page loads
document.addEventListener('DOMContentLoaded', () => {
    const socialCards = document.querySelectorAll('.social-card');
    
    // Set initial opacity
    socialCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        
        // Delay each card's animation for a staggered effect
        setTimeout(() => {
            card.style.transition = 'all 0.5s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 200 * index);
    });
});

// Log for developer tracking
console.log("Al-Qusoor Al-Mokhmalia Landing Page Loaded Successfully.");
