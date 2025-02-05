const dotenv = require('dotenv');
const express = require('express');
const app = express();
const cors = require('cors');

dotenv.config();
const port = process.env.PORT || 3000;

app.use(cors()); 
app.use(express.json());

// Define a route to handle GET requests to the root
app.get('/message', (req, res) => {
    res.json({ message: 'Hello from the backend!' });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
