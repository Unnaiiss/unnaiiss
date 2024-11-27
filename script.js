// Save Thought Functionality
function saveThought() {
    const thought = document.getElementById('thought-input').value;
    const savedThought = document.getElementById('saved-thought');
    
    if (thought) {
        savedThought.textContent = `"${thought}" - Your Thought Saved`;
    } else {
        savedThought.textContent = "Please enter a thought.";
    }
}

// Basic Contact Form (for demonstration)
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert("Message Sent! We will get back to you shortly.");
});
