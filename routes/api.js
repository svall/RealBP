const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  // res.json(res.topics || []);
  console.log('rendering');
  res.render(`<h1>'Hiiiii'</h1>`);
});

module.exports = router;
