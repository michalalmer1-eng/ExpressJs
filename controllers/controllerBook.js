let books = require('../data/bookDb');
const { v4: uuidv4 } = require('uuid');

// קבלת כל הספרים
const getAllBooks = (req, res) => {
  res.json(books);
};

// קבלת ספר לפי id (UUID)
const getBookById = (req, res) => {
  const id = req.params.id; 
  const book = books.find(b => b.id === id);
  if (!book) return res.status(404).json({ message: 'Book not found' });
  res.json(book);
};

const addBook = (req, res) => {
  const { title } = req.body;
  if (!title) return res.status(400).json({ message: 'Title is required' });
  const newBook = { id: uuidv4(), title };
  books.push(newBook);
  res.status(201).json(newBook);
};

const updateBook = (req, res) => {
  const id = req.params.id; 
  const book = books.find(b => b.id === id);
  if (!book) return res.status(404).json({ message: 'Book not found' });
  const { title } = req.body;
  if (title) book.title = title;
  res.json(book);
};

const deleteBook = (req, res) => {
  const id = req.params.id; 
  const index = books.findIndex(b => b.id === id);
  if (index === -1) return res.status(404).json({ message: 'Book not found' });
  const deleted = books.splice(index, 1);
  res.json(deleted[0]);
};

module.exports = {
  getAllBooks,
  getBookById,
  addBook,
  updateBook,
  deleteBook
};
