// Smooth scroll
document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('.Menu-Link');

    for (const link of links) {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    }
});

// Navigation services
$(document).ready(function() {
    $('button').on('click', function() {
        // Get the target button and div IDs from data attributes
        const targetButtonId = $(this).data('button-id');
        const targetDivId = $(this).data('target');

        // Remove "CTA-Active" class from all buttons
        $('button').removeClass('CTA-Active');

        // Add "CTA-Active" class to the clicked button
        $(this).addClass('CTA-Active');

        // Hide all divs
        $('.Service-view').hide();

        // Show the specific div associated with the clicked button
        const targetDiv = $('#' + targetDivId);
        if (targetDiv.length) {
            targetDiv.css('display', 'flex');
        }
    });
});
