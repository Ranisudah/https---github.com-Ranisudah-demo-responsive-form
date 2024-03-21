function validateForm() {
    // Get form input
    var name = document.getElementById('name').value; 
    var gmail = document.getElementById('email').value; // Use .value to get input value

    // Reset error message
    document.getElementById('nameerror').innerHTML = '';
    document.getElementById('emailerror').innerHTML = '';

    // Validate name
    if (name === '') {
        document.getElementById('nameerror').innerHTML = 'Name is required'; 
        return false;
    }

    // Validate email
    var mailregex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
    
    if (!mailregex.test(gmail)) { 
        document.getElementById('emailerror').innerHTML = 'Invalid email'; 
        return false;
    }

    alert("Form submitted successfully");
    return true;
}
