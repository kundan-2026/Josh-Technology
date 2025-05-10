document.addEventListener('DOMContentLoaded', function() {
    // Carousel functionality
    const popularItemsCarousel = document.getElementById('popularItemsCarousel');
    const prevButton = document.getElementById('prevPopular');
    const nextButton = document.getElementById('nextPopular');
    
    let scrollAmount = 0;
    const scrollStep = 300; // Adjust scroll step as needed
    
    if (prevButton && nextButton && popularItemsCarousel) {
        prevButton.addEventListener('click', function() {
            scrollAmount = Math.max(0, scrollAmount - scrollStep);
            popularItemsCarousel.scrollTo({
                left: scrollAmount,
                behavior: 'smooth'
            });
        });
        
        nextButton.addEventListener('click', function() {
            scrollAmount = Math.min(
                popularItemsCarousel.scrollWidth - popularItemsCarousel.clientWidth,
                scrollAmount + scrollStep
            );
            popularItemsCarousel.scrollTo({
                left: scrollAmount,
                behavior: 'smooth'
            });
        });
    }
    
    // Form submission
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            // Validate form
            if (!name || !email || !message) {
                alert('Please fill in all fields');
                return;
            }
            
            // Simple email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Please enter a valid email address');
                return;
            }
            
            // Here you would typically send the form data to a server
            // For this example, we'll just show a success message
            alert('Thank you for your message! We will contact you within 48 hours.');
            contactForm.reset();
        });
    }
    
    // Add to cart functionality
    const addButtons = document.querySelectorAll('.add-btn');
    
    addButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Get the food item details
            const foodCard = this.closest('.food-card');
            const foodName = foodCard.querySelector('h3').textContent;
            const foodPrice = foodCard.querySelector('.price').textContent;
            
            // Here you would typically add the item to a cart
            // For this example, we'll just show an alert
            alert(`${foodName} (${foodPrice}) added to cart!`);
        });
    });
    
    // Video play button
    const playBtn = document.querySelector('.play-btn');
    
    if (playBtn) {
        playBtn.addEventListener('click', function() {
            // Here you would typically play a video
            // For this example, we'll just show an alert
            alert('Video would play here in a real implementation');
        });
    }
    
    // Request a dish button
    const requestDishBtn = document.querySelector('.request-dish-btn');
    
    if (requestDishBtn) {
        requestDishBtn.addEventListener('click', function() {
            // Here you would typically show a form to request a dish
            // For this example, we'll just show an alert
            alert('A form to request a dish would appear here in a real implementation');
        });
    }
});