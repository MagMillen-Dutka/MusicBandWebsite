const openSite = () => {
    const loginButton = document.getElementById('loginButton');
    loginButton.style.display = 'block';
};

function closeModal() {
    document.getElementById('loginModal').style.display = 'none';
}
// Function for screen resolution below 500 turning into fa-drop down

// Function to toggle menu on click
// Function to toggle menu on click
// Function to toggle menu on click
function toggleMenu() {
    var menuLinks = document.getElementById("menu-links");
    menuLinks.classList.toggle("show");
}

// Function to close menu
function closeMenu() {
    var menuLinks = document.getElementById("menu-links");
    menuLinks.classList.remove("show");
}

// Event listener for scroll
window.addEventListener('scroll', function(event) {
    closeMenu();
});

// Event listener for resize
window.addEventListener('resize', function(event) {
    closeMenu();
});

// Event listener for click
window.addEventListener('click', function(event) {
    var header = document.querySelector('.header');
    var menuIcon = document.querySelector('.menu-icon');
    if (!header.contains(event.target) && !menuIcon.contains(event.target)) {
        closeMenu();
    }
});
