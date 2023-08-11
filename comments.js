// Create web server

var express = require('express');
var router = express.Router();
var commentController = require('../controllers/commentController');
var commentValidator = require('../validators/commentValidator');

// GET request to get all comments
router.get('/', commentController.getComments);

// GET request for one comment
router.get('/:id', commentController.getComment);

// POST request to create a comment
router.post('/', commentValidator.validate('createComment'), commentController.createComment);

// PUT request to update a comment
router.put('/:id', commentValidator.validate('updateComment'), commentController.updateComment);

// DELETE request to delete a comment
router.delete('/:id', commentController.deleteComment);

module.exports = router;