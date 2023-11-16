// Function to animate elements on scroll
function animateOnScroll() {
    const elements = document.querySelectorAll('.animate');
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;

        if (elementPosition < screenPosition) {
            element.classList.add('animated');
        } else {
            element.classList.remove('animated');
        }
    });
}

// Function to toggle color on mouseover
function toggleColorOnHover() {
    const nameElement = document.getElementById('name');
    nameElement.addEventListener('mouseover', function () {
        this.style.color = getRandomColor();
    });

    nameElement.addEventListener('mouseout', function () {
        this.style.color = 'white';
    });
}

// Helper function to get a random color
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Add event listeners
window.addEventListener('scroll', animateOnScroll);
document.addEventListener('DOMContentLoaded', toggleColorOnHover);
