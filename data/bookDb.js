// bookDb.js
const { v4: uuidv4 } = require('uuid');

let books = [
  { id: uuidv4(), title: 'The Great Gatsby' },
  { id: uuidv4(), title: 'To Kill a Mockingbird' },
  { id: uuidv4(), title: '1984' },
  { id: uuidv4(), title: 'Pride and Prejudice' },
  { id: uuidv4(), title: 'Moby-Dick' },
  { id: uuidv4(), title: 'War and Peace' },
  { id: uuidv4(), title: 'Crime and Punishment' },
  { id: uuidv4(), title: 'The Catcher in the Rye' },
  { id: uuidv4(), title: 'Brave New World' },
  { id: uuidv4(), title: 'Jane Eyre' },
  { id: uuidv4(), title: 'Wuthering Heights' },
  { id: uuidv4(), title: 'The Hobbit' },
  { id: uuidv4(), title: 'The Lord of the Rings' },
  { id: uuidv4(), title: 'Harry Potter and the Sorcerer\'s Stone' },
  { id: uuidv4(), title: 'Harry Potter and the Chamber of Secrets' },
  { id: uuidv4(), title: 'Harry Potter and the Prisoner of Azkaban' },
  { id: uuidv4(), title: 'Harry Potter and the Goblet of Fire' },
  { id: uuidv4(), title: 'Harry Potter and the Order of the Phoenix' },
  { id: uuidv4(), title: 'Harry Potter and the Half-Blood Prince' },
  { id: uuidv4(), title: 'Harry Potter and the Deathly Hallows' }
];

module.exports = books;
