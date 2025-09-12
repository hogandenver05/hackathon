// Select the button and the heading element by their IDs
const button = document.getElementById('myButton');
const heading = document.getElementById('myHeading');

// Add a 'click' event listener to the button
button.addEventListener('click', () => {
    // Change the text content of the heading
    heading.textContent = 'The text has been changed!';
});