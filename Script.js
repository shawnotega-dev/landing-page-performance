/**
 * Lightweight Frontend Interactivity & Performance Tracking
 */
document.addEventListener('DOMContentLoaded', () => {
    console.log('Landing page performance bundle loaded successfully.');

    // Simple smooth scroll tracking for CTA buttons
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('click', (e) => {
            // Can be extended to trigger Google Analytics / GTM conversion events
            console.log('Conversion CTA clicked.');
        });
    }
});
