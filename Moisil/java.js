////
const scriptURL = 'https://script.google.com/macros/s/AKfycbx2Pui1Sw-aM2tXhH2iRblrYyQwAtR3eAINmFfKICdimbJcM7V1c719sI-DlEOwzXTCjg/exec'
  const form = document.forms['submit-to-google-sheet']

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => console.log('Success!', response))
      .catch(error => console.error('Error!', error.message))
  })
 
  document.getElementById('cart-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission
    
    // Gather form data
    var formData = new FormData(this);
    
    // Add timestamp in seconds to form data
    formData.append('timestamp', Math.floor(Date.now() / 1000)); // Timestamp in seconds
  
    // Send form data to Google Sheets using AJAX
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://script.google.com/macros/s/AKfycbx2Pui1Sw-aM2tXhH2iRblrYyQwAtR3eAINmFfKICdimbJcM7V1c719sI-DlEOwzXTCjg/exec');
    xhr.onreadystatechange = function() {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
          console.log('Form data submitted successfully:', xhr.responseText);
          // Redirect to another HTML page
          window.location.href = 'http://127.0.0.1:5502/Moisil/acasa.html'; // Change 'new-page.html' to the desired page URL
        } else {
          console.error('Error submitting form data:', xhr.statusText);
        }
      }
    };
    xhr.send(formData);
  });
  