document.addEventListener('DOMContentLoaded', async () => {
  console.log("DOMContentLoaded"); // Ensure that the event handler is triggered

  // Get a reference to the form after the page has loaded
  const form = document.querySelector('form#contactForm');

  // Add an event listener for form submission
  form.addEventListener('submit', async (e) => {
   
    e.preventDefault(); // Prevent the default form submission behavior

    // Get the values of the form fields
    const name = form.querySelector('input[name="Name"]').value;
    const email = form.querySelector('input[name="Email"]').value;
    const message = form.querySelector('input[name="Message"]').value;

    // Create a JSON object with the form data
    const formData = {
      name: name,
      email: email,
      message: message
    };
    // Send the data to the server
    try {
      const response = await fetch('https://api.byteplex.info/api/test/contact/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        // Data successfully sent
        console.log('Data sent successfully');
      } else {
        // Error while sending data
        console.error('Error sending data');
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  });
});
