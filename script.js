document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const dob = document.getElementById('dob').value.trim();
    const gender = document.getElementById('gender').value;
    const address = document.getElementById('address').value.trim();

    if (name && email && phone && dob && gender && address) {
        if (phone.length !== 10 || !phone.match(/^\d+$/)) {
            alert('Please enter a valid 10-digit phone number.');
            return;
        }
        alert('Registration successful!'); // Replace with form submission to PHP
        this.reset(); // Reset the form after successful submission
    } else {
        alert('Please fill out all fields.');
    }
});
