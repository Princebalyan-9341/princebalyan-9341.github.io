document.addEventListener('DOMContentLoaded', function () {
    // Get all elements with the 'animate' class
    var animatedElements = document.querySelectorAll('.animate');

    // Initialize ScrollMagic controller
    var controller = new ScrollMagic.Controller();

    // Iterate through each animated element and create a ScrollMagic scene
    animatedElements.forEach(function (element) {
        new ScrollMagic.Scene({
            triggerElement: element,
            triggerHook: 0.8, // Adjust the triggerHook as needed
            reverse: false // Change to true if you want the animation to reverse on scrolling up
        })
        .setClassToggle(element, 'active') // Add the 'active' class on scroll
        .addTo(controller);
    });
});
