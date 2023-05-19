// Wait for the DOM to be loaded
document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("upload-form");
    const fileInput = document.getElementById("file-input");
  
    form.addEventListener("submit", function(e) {
      e.preventDefault(); // Prevent form submission
  
      // Check if a file is selected
      if (fileInput.files.length > 0) {
        const file = fileInput.files[0];
  
        // Perform necessary file validations (e.g., file type, size)
  
        // Send the file to the server for processing
        uploadFile(file);
      }
    });
  
    function uploadFile(file) {
      // Implement the file upload logic to your server here
      // You can use AJAX, Fetch API, or other methods to send the file data to the server
      // Make sure to handle the server-side processing and response accordingly
      console.log("Uploading file:", file.name);
      // Example: Send the file using Fetch API
      fetch("/upload", {
        method: "POST",
        body: file
      })
        .then(response => response.json())
        .then(data => {
          console.log("Upload response:", data);
          // Handle the server response as needed
        })
        .catch(error => {
          console.error("Upload error:", error);
          // Handle the upload error
        });
    }
  });
  