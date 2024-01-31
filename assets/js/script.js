const openSite = () => {
    const enterButton = document.getElementById('enterButton');
    enterButton.style.display = 'block';
};

// Function to open modal
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = 'block';
}

// Function to close modal
function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = 'none';
}

// Function to close modals when clicked outside
window.addEventListener('click', function(event) {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});

// Function to open each modal on bandPage page
const aboutLinkModal = () => {
    openModal('aboutModal');
};

const musicLinkModal = () => {
    openModal('musicModal');
};

const tourLinkModal = () => {
    openModal('tourModal');
};
