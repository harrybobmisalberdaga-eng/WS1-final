// Get the appointment date input
const dateInput = document.getElementById('date');

// Get today's date
const today = new Date();

// Convert today's date to local date format
const localToday = new Date(
    today.getTime() - today.getTimezoneOffset() * 60000
).toISOString().slice(0, 10);

// Prevent users from selecting past dates
dateInput.min = localToday;

// Handle appointment form submission
document.getElementById('bookingForm').addEventListener('submit', function(event) {

    // Prevent the page from refreshing
    event.preventDefault();

    // Check if all required fields are valid
    if (!this.reportValidity()) return;

    // Get the information entered in the form
    const data = new FormData(this);

    // Get the message element
    const msg = document.getElementById('message');

    // Display the confirmation message
    msg.style.display = 'block';

    msg.textContent = `Thanks, ${data.get('name')}! Your demo appointment request for ${data.get('service')} on ${data.get('date')} at ${data.get('time')} has been prepared. This prototype does not send it to the shop.`;

    // Clear the form
    this.reset();

    // Keep past dates disabled
    dateInput.min = localToday;

});