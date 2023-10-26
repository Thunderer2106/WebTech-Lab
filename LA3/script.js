function validateForm() {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
  
    // Simple validation checks, you can add more complex validation here if needed
    if (name === '' || email === '' || message === '') {
      alert('Please fill in all the fields.');
      return false;
    }
    // If the form is valid, display a confirmation and prevent form submission
    const isConfirmed = confirm('Are you sure you want to submit the form?');
    if (!isConfirmed) {
      return false;
    }
  
    alert('Form submitted successfully!');
    return true;
  }
  

  