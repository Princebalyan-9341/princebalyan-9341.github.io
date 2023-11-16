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

    // About Me Section Animation
    var aboutTween = TweenMax.from("#about p", 1, { opacity: 0, y: 50 });

    var aboutScene = new ScrollMagic.Scene({
        triggerElement: "#about",
        triggerHook: 0.8,
        reverse: false
    })
    .setTween(aboutTween)
    .addTo(controller);

    // Experience Section Animation
    var experienceTween = TweenMax.staggerFrom("#experience ul li", 0.5, { opacity: 0, y: 20 }, 0.2);

    var experienceScene = new ScrollMagic.Scene({
        triggerElement: "#experience",
        triggerHook: 0.8,
        reverse: false
    })
    .setTween(experienceTween)
    .addTo(controller);

    // Projects Section Animation
    var projectsTween = TweenMax.staggerFrom("#projects div", 0.5, { opacity: 0, x: -50 }, 0.2);

    var projectsScene = new ScrollMagic.Scene({
        triggerElement: "#projects",
        triggerHook: 0.8,
        reverse: false
    })
    .setTween(projectsTween)
    .addTo(controller);

    // Certifications Section Animation
    var certificationsTween = TweenMax.staggerFrom("#certifications ul li", 0.5, { opacity: 0, y: 20 }, 0.2);

    var certificationsScene = new ScrollMagic.Scene({
        triggerElement: "#certifications",
        triggerHook: 0.8,
        reverse: false
    })
    .setTween(certificationsTween)
    .addTo(controller);

    // Awards Section Animation
    var awardsTween = TweenMax.staggerFrom("#awards ul li", 0.5, { opacity: 0, x: -50 }, 0.2);

    var awardsScene = new ScrollMagic.Scene({
        triggerElement: "#awards",
        triggerHook: 0.8,
        reverse: false
    })
    .setTween(awardsTween)
    .addTo(controller);

    // Skills Section Animation
    var skillsTween = TweenMax.staggerFrom("#skills ul li", 0.5, { opacity: 0, y: 20 }, 0.2);

    var skillsScene = new ScrollMagic.Scene({
        triggerElement: "#skills",
        triggerHook: 0.8,
        reverse: false
    })
    .setTween(skillsTween)
    .addTo(controller);

    // Education Section Animation
    var educationTween = TweenMax.staggerFrom("#education div", 0.5, { opacity: 0, x: -50 }, 0.2);

    var educationScene = new ScrollMagic.Scene({
        triggerElement: "#education",
        triggerHook: 0.8,
        reverse: false
    })
    .setTween(educationTween)
    .addTo(controller);

    // Strengths Section Animation
    var strengthsTween = TweenMax.staggerFrom("#strengths ul li", 0.5, { opacity: 0, y: 20 }, 0.2);

    var strengthsScene = new ScrollMagic.Scene({
        triggerElement: "#strengths",
        triggerHook: 0.8,
        reverse: false
    })
    .setTween(strengthsTween)
    .addTo(controller);

    // Interests Section Animation
    var interestsTween = TweenMax.staggerFrom("#interests ul li", 0.5, { opacity: 0, x: -50 }, 0.2);

    var interestsScene = new ScrollMagic.Scene({
        triggerElement: "#interests",
        triggerHook: 0.8,
        reverse: false
    })
    .setTween(interestsTween)
    .addTo(controller);

    // Languages Section Animation
    var languagesTween = TweenMax.from("#languages p", 1, { opacity: 0, y: 50 });

    var languagesScene = new ScrollMagic.Scene({
        triggerElement: "#languages",
        triggerHook: 0.8,
        reverse: false
    })
    .setTween(languagesTween)
    .addTo(controller);

    // Footer Section Animation
    var footerTween = TweenMax.from("footer p", 1, { opacity: 0, y: 50 });

    var footerScene = new ScrollMagic.Scene({
        triggerElement: "footer",
        triggerHook: 0.8,
        reverse: false
    })
    .setTween(footerTween)
    .addTo(controller);
});
