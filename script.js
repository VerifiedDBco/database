// your code goes here
/*
* File: script.js
* Description: JavaScript for Verified DB Co website interactivity.
*/

// Wait for the DOM to be fully loaded before running scripts
document.addEventListener('DOMContentLoaded', () => {

    /**
     * FAQ Accordion Logic
     * Toggles the active class on FAQ items to show/hide answers.
     */
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');

        question.addEventListener('click', () => {
            // Check if the current item is already open
            const isOpen = item.classList.contains('active');

            // Close all other open FAQ items
            faqItems.forEach(otherItem => {
                otherItem.classList.remove('active');
            });

            // If the item was not open, open it
            if (!isOpen) {
                item.classList.add('active');
            }
        });
    });

    /**
     * Infinite Review Slider Logic
     * Duplicates the review slides to create a seamless looping effect.
     */
    const sliderTrack = document.querySelector('.slider-track');
    const slides = Array.from(sliderTrack.children);
    
    // Duplicate slides to create the infinite loop effect
    slides.forEach(slide => {
        const clone = slide.cloneNode(true);
        sliderTrack.appendChild(clone);
    });

    // The animation itself is handled by CSS (@keyframes scroll).
    // This JS part just ensures there's enough content to loop smoothly.

});
