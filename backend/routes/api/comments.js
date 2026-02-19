/**
 * Comments API Router
 * 
 * Provides endpoints for managing comments on posts.
 * Allows retrieving comments for a specific post and deleting comments.
 * 
 * @module routes/api/comments
 * @requires express
 * @requires mongoose
 */

/**
 * Retrieves all comments for a specific post
 * 
 * @async
 * @function GET /comments/:postId
 * @param {Object} req - Express request object
 * @param {string} req.params.postId - The ID of the post to retrieve comments for
 * @param {Object} res - Express response object
 * @returns {Promise<Array>} Array of comment objects in JSON format
 * @throws {Error} Returns 500 status with error message if retrieval fails
 */

/**
 * Deletes a comment by ID
 * 
 * @async
 * @function DELETE /comments/:commentId
 * @param {Object} req - Express request object
 * @param {string} req.params.commentId - The ID of the comment to delete
 * @param {Object} res - Express response object
 * @param {Function} next - Express next middleware function for error handling
 * @returns {Promise<Object>} Success message in JSON format
 * @throws {Error} Passes error to next middleware if deletion fails
 */
// Hey Github Copilot, I need to create a new route for comments in my Express application. I want to be able to create a new comment and retrieve all comments for a specific post. Can you help me with that?

const router = require("express").Router();
const mongoose = require("mongoose");
const Comment = mongoose.model("Comment");

router.get('/comments/:postId', async (req, res) => {
    try {
        const comments = await Comment.find({ postId: req.params.postId });
        res.json(comments);
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// add another endpoint for deleting a comment
router.delete('/comments/:commentId', async (req, res,next) => {
    Comment.findByIdAndDelete(req.params.commentId)
        .then(() => res.json({ message: 'Comment deleted successfully' }))
        .catch(err => next(err));
});

module.exports = router;
