// Updated script.js with enhanced animations, parallax effects, and more interactive features

// Implement parallax effect
const parallax = () => {
    const layers = document.querySelectorAll('.parallax layer');
    window.addEventListener('scroll', () => {
        let scrollTop = window.pageYOffset;
        layers.forEach((layer, index) => {
            let depth = index / 100;
            let movement = (scrollTop * depth);
            layer.style.transform = `translateY(${movement}px)`;
        });
    });
};

parallax();

// Enhanced animations using GSAP
const animateElements = () => {
    const elements = document.querySelectorAll('.animate');
    elements.forEach((element) => {
        gsap.from(element, {
            duration: 1,
            opacity: 0,
            y: 50,
            stagger: 0.2,
            scrollTrigger: {
                trigger: element,
                start: "top 80%"
            }
        });
    });
};

animateElements();

// Interactivity
const interactiveFeature = () => {
    const buttons = document.querySelectorAll('.interactive-btn');
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            alert('Button clicked! More features are on the way!');
        });
    });
};

interactiveFeature();