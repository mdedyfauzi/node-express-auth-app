const express = require('express');
const app = express();
const cors = require('cors');

// middleware

app.use(express.json()); // req.body
app.use(cors());

// ROUTES

app.listen(5000, () => {
  console.log('server is running at port 5000');
});
