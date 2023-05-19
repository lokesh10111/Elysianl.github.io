const express = require("express");
const app = express();
const multer = require("multer");
const path = require("path");

// Set up multer middleware to handle file uploads
const upload = multer({ dest: "uploads/" });

// Serve static files from the "uploads" directory
app.use(express.static(path.join(__dirname, "uploads")));

// Handle the file upload
app.post("/upload", upload.single("file"), (req, res) => {
  // Handle the file upload on the server-side
  if (!req.file) {
    // No file was uploaded
    return res.status(400).json({ error: "No file uploaded" });
  }

  // Process and store the file as per your application's requirements
  // You can access the uploaded file using req.file

  // Example: Save the file to a specific location
  const filePath = "uploads/" + req.file.filename;
  // Code to move or process the file goes here

  // Provide a response to indicate the success of the upload process
  res.json({ message: "File uploaded successfully" });
});

// Start the server
app.listen(3000, () => {
  console.log("Server started on port 3000");
});