const express = require('express');
const app = express();
const bookRoutes = require('./routes/book');
const PORT =  3000;
const logger = require('./middleware/middlewareBook');

app.use(logger);

app.use(express.json());

app.use('/books', bookRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});