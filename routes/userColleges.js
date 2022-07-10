const express = require('express');
const router = express.Router();

// @route   GET api/userColleges
// @desc    Get all users college
// @access  Private
router.get('/', (req, res) => {
  res.send('Get all college');
});

// @route   POST api/userColleges
// @desc    Add new college
// @access  Private
router.post('/', (req, res) => {
  res.send('Add college');
});

// @route   PUT api/userColleges/:id
// @desc    Update college
// @access  Private
router.put('/:id', (req, res) => {
  res.send('Update college');
});

// @route   DELETE api/userColleges/:id
// @desc    Delete college
// @access  Private
router.delete('/:id', (req, res) => {
  res.send('Delete college');
});
mongo;
module.exports = router;
