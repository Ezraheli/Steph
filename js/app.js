// Get the navigation bar
const header = document.getElementById('header-nav');

// Add a scroll event listener to the window
window.addEventListener('scroll', function() {
    // Check if the user has scrolled down past a certain point (e.g. 10px)
    if (window.scrollY > 10) {
        // Add the 'scrolled' class to the navbar
        header.classList.add('scrolled');
    } else {
        // Remove the 'scrolled' class from the navbar
        header.classList.remove('scrolled');
    }
});


// Get the navigation bar
const offHeader = document.getElementById('offcanvasNavbar');

// Add a scroll event listener to the window
window.addEventListener('scroll', function() {
    // Check if the user has scrolled down past a certain point (e.g. 10px)
    if (window.scrollY > 10) {
        // Add the 'scrolled' class to the navbar
        offHeader.classList.add('scrolled');
    } else {
        // Remove the 'scrolled' class from the navbar
        offHeader.classList.remove('scrolled');
    }
});

const contactMe = document.getElementById('contact-btn');

contactMe.addEventListener('click', function(){
    window.location.href = "#contact-section";
})


//For the Show More button for projects
function showMore(){
    const showProject = document.querySelector('.hidden-project');
    // showProject.style.display = 'block';
    showProject.classList.toggle('show');
    
}

//For Modal
const items = document.querySelectorAll('.item');
const modalTemplate =  document.getElementById('exampleModal');

items.forEach((items, index) => {
    const image = items.getAttribute('data-image');
    const modalId = `exampleModal${index + 1}`;
    const modalClone = modalTemplate.cloneNode(true);

    modalClone.id = modalId;

    items.setAttribute('data-bs-toggle', 'modal');
    items.setAttribute('data-bs-target', `#${modalId}`);

    modalClone.querySelector('img').src = image;
    document.body.appendChild(modalClone);
});
