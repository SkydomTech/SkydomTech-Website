// Smooth scroll
$(document).ready(function() {
    $('.Menu-Link, .CTA').on('click', function(event) {
        event.preventDefault();
        const targetId = $(this).attr('href').substring(1);
        const targetElement = $('#' + targetId);

        if (targetElement.length) {
            $('html, body').animate({
                scrollTop: targetElement.offset().top
            }, 800); // 800ms for smooth scroll
        }
    });
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
