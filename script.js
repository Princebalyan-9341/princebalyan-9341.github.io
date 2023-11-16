document.addEventListener('DOMContentLoaded', function () {
    // Initialize ScrollMagic controller
    var controller = new ScrollMagic.Controller();

    // Create a TweenMax animation
    var tween = TweenMax.fromTo("#name", 1, { opacity: 0, x: -100 }, { opacity: 1, x: 0 });

    // Create a ScrollMagic scene
    var scene = new ScrollMagic.Scene({
        triggerElement: "#name",  // The element that triggers the animation
        triggerHook: 0.5,  // Trigger the animation at the center of the viewport
        reverse: false  // Allow the animation to reverse when scrolling up
    })
    .setTween(tween)  // Set the TweenMax animation
    .addTo(controller);  // Add the scene to the ScrollMagic controller
});
