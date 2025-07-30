const connectDB = require('./config/db');
const express = require('express');
const postRoutes = require('./routes/posts'); // <-- import

const app = express();
const PORT = 3000;

connectDB();
app.use(express.json());

// Mount the routes
app.use('/posts', postRoutes);

app.get('/', (req, res) => {
  res.send('Post CRUD API is running!');
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
