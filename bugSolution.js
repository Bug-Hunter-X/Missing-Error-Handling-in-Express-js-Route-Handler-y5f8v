const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  if (isNaN(userId) || userId <=0) {
    return res.status(400).json({ error: 'Invalid user ID' });
  }
  // ...rest of the code to fetch user data using userId...
  .catch(err => {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch user' });
  });
});