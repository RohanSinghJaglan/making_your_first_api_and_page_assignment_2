const express = require('express');
const app = express();

// Map of HTTP status codes and their descriptions
const statusCodes = {
  200: "OK - The request was successful.",
  201: "Created - The request was successful, and a new resource was created.",
  400: "Bad Request - The server could not understand the request due to invalid syntax.",
  401: "Unauthorized - Authentication is needed to get the requested response.",
  404: "Not Found - The server could not find the requested resource.",
  500: "Internal Server Error - The server encountered an error.",
  // Add more status codes as needed
};

// Define the GET endpoint
app.get('/status-info', (req, res) => {
  const code = parseInt(req.query.code); // Retrieve the 'code' query parameter

  if (statusCodes[code]) {
    res.json({ code, description: statusCodes[code] });
  } else {
    res.status(400).json({ error: "Invalid or unsupported status code." });
  }
});

// Start the server
const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
