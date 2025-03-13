// Smooth scroll
$(document).ready(function() {
    $('.Menu-Link, .CTA-Secondary').on('click', function(event) {
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
    $('.Button').on('click', function() {
        // Get the target button and div IDs from data attributes
        const targetButtonId = $(this).data('button-id');
        const targetDivId = $(this).data('target');

        // Remove "CTA-Active" class from all buttons
        $('.Button').removeClass('CTA-Active');

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

// Menu mobile
$(document).ready(function() {
    $(".Menu-Burger").click(function() {
        $(".Navbar-Mobile, .Menu-Mobile").css("display", "flex");
        $(".Navbar-Mobile").animate({
            height: "300px",
            paddingTop: "122px"
        }, 1000);
        $(".Menu-Burger").css({
            transition: "transform 1s",
            transform: "rotate(90deg)"
        });
    });

    $(".Menu-Link").click(function() {
        $(".Navbar-Mobile").animate({
            height: "0px",
            paddingTop: "0px"
        }, 1000, function() {
            $(".Navbar-Mobile, .Menu-Mobile").css("display", "none");
        });
        $(".Menu-Burger").css({
            transition: "transform 1s",
            transform: "rotate(0deg)"
        });
    });
});
