document.addEventListener('DOMContentLoaded', () => {

    // FAQ Accordion Logic
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');

            // Close all other open answers
            faqItems.forEach(otherItem => {
                otherItem.classList.remove('active');
            });
            
            // Toggle the clicked item if it was not already active
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });

    // Reviews Slider Logic (Infinite Loop)
    const reviewsSlider = document.querySelector('.reviews-slider');
    const sliderTrack = document.querySelector('.slider-track');
    const reviews = Array.from(sliderTrack.children);

    // Duplicate the reviews to create a seamless infinite loop
    reviews.forEach(review => {
        const clone = review.cloneNode(true);
        sliderTrack.appendChild(clone);
    });

    // Smooth scrolling for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // Adjust for fixed header
                    behavior: 'smooth'
                });
            }
        });
    });

});
