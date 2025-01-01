// Page : 1
const aboutMeButton = document.getElementById('aboutMe-button');
const aboutMeHideText = document.getElementById('aboutMe-hideText');

aboutMeButton.addEventListener('click', () => {
    // Toggle the 'show' class to control the max-height
    aboutMeHideText.classList.toggle('show');

    // Change button text based on the state
    if (aboutMeHideText.classList.contains('show')) {
        aboutMeButton.textContent = 'Hide about Me';
    } else {
        aboutMeButton.textContent = 'Show about Me';
    }
});

