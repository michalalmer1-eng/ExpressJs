const express = require('express');
const router = express.Router();
const bookController = require('../controllers/controllerBook');

router.get('/', bookController.getAllBooks);         
router.get('/:id', bookController.getBookById);      // GET ספר לפי UUID
router.post('/', bookController.addBook);            // POST ספר חדש
router.put('/:id', bookController.updateBook);       // PUT עדכון ספר
router.patch('/:id', bookController.updateBook);     // PATCH עדכון ספר
router.delete('/:id', bookController.deleteBook);    // DELETE ספר

module.exports = router;
