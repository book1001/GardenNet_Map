// Toggle visibility of the button container and change main button text
document.getElementById('mainButton').addEventListener('click', function() {
    const buttonContainer = document.getElementById('buttonContainer');

    // Toggle "show" class and text content
    if (buttonContainer.classList.contains('show')) {
        buttonContainer.classList.remove('show');
        buttonContainer.style.display = 'none'; // Hide container
        this.textContent = 'Search WikiGD_final'; // Reset button text
    } else {
        buttonContainer.classList.add('show');
        buttonContainer.style.display = 'flex'; // Show container
        this.textContent = 'Hide Options'; // Change button text
    }
});

// Show two modals with different images and hide button container when an additional button is clicked
document.getElementById('buttonContainer').addEventListener('click', function(event) {
    if (event.target.classList.contains('additional-btn')) {
        // Get the two image sources from data attributes
        const imageSrc1 = event.target.getAttribute('data-image1');
        const imageSrc2 = event.target.getAttribute('data-image2');

        // Set the images for both modals
        document.getElementById('modalImage1').src = imageSrc1;
        document.getElementById('modalImage2').src = imageSrc2;

        // Display both modals
        document.getElementById('imageModal1').style.display = 'flex';
        document.getElementById('imageModal2').style.display = 'flex';

        // Hide the additional buttons
        document.getElementById('buttonContainer').style.display = 'none';
        document.getElementById('mainButton').textContent = 'Search WikiGD_final'; // Reset button text
    }
});

// Close Modal 1
document.getElementById('closeModal1').addEventListener('click', function() {
    document.getElementById('imageModal1').style.display = 'none';
    document.getElementById('modalImage1').src = ''; // Clear image to prevent flicker on reopen
});

// Close Modal 2
document.getElementById('closeModal2').addEventListener('click', function() {
    document.getElementById('imageModal2').style.display = 'none';
    document.getElementById('modalImage2').src = ''; // Clear image to prevent flicker on reopen
});











// Initial setup: Hide all buttons except OK, and set initial body and page-wrapper background
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('buttonContainer').style.display = 'none'; // Hide additional buttons
    document.getElementById('mainButton').style.display = 'none'; // Hide main button
    document.getElementById('homeButton').style.display = 'none'; // Hide Home button

    // Set the initial background of body and page-wrapper
    document.body.style.backgroundImage = "url('src/bgv5.png')";
    document.getElementById('page-wrapper').style.backgroundImage = "none"; // Initially hide page-wrapper background
});

// OK button functionality
document.getElementById('okButton').addEventListener('click', function() {
    // Change the body background and reveal the page-wrapper background
    document.body.style.backgroundImage = "url('src/bgv4.png')"; // Change body background
    document.getElementById('page-wrapper').style.backgroundImage = "url('src/window copy.png')"; // Show page-wrapper background

    // Reveal the Main button and additional buttons
    document.getElementById('buttonContainer').style.display = 'flex';
    document.getElementById('mainButton').style.display = 'flex';

    // Hide the OK button and show the Home button
    document.getElementById('okButton').style.display = 'none';
    document.getElementById('homeButton').style.display = 'flex';
});

// Home button functionality to reset to the initial state
document.getElementById('homeButton').addEventListener('click', function() {
    // Reset the body background and hide the page-wrapper background
    document.body.style.backgroundImage = "url('src/bgv5.png')"; // Reset body background
    document.getElementById('page-wrapper').style.backgroundImage = "none"; // Hide page-wrapper background again

    // Hide all buttons except the OK button
    document.getElementById('buttonContainer').style.display = 'none';
    document.getElementById('mainButton').style.display = 'none';
    document.getElementById('homeButton').style.display = 'none'; // Hide Home button
    document.getElementById('okButton').style.display = 'flex'; // Show OK button
});