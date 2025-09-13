// Select the button and heading from the HTML
const button = document.getElementById('myButton');
const heading = document.getElementById('myHeading');

// Array of messages to cycle through
const messages = [
    'Age 20
    A new company is selling shares for 10 dollars each. Would you like to buy
Buy 10 shares at 10 dollars each
Skip this stock
Lesson: Investing early gives your money more time to grow. Buying is a risk but could pay off later.',
    'Now you are seeing the second message!',
    'The third message is here.',
    'And this is the fourth message in the list.',
    'fifth',
    'six',
    'seven',
    'eight',
    'nine',
    'ten'
];

// Initialize an index to keep track of the current message
let messageIndex = 0;

// Add a click event listener to the button
button.addEventListener('click', () => {
    // Update the heading's text with the current message
    heading.textContent = messages[messageIndex];

    // Increment the index for the next click
    messageIndex++;

    // If the index is at the end of the array, reset it to 0
    if (messageIndex >= messages.length) {
        messageIndex = 0;
    }
});