const express = require('express');
const router = express.Router();

// Identifier that API is working and running successfully
router.get('/', (req, res) => {
  res.send(`
    <h1>PIN API Server</h1>
    <p>Welcome! to access the api, start the url with /api </p>
    `);
});

module.exports = router;
