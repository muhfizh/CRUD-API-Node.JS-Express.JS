const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/RouteTodo');
const middleware = require('./middleware/errorMessage');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

//lib body
app.use(bodyParser.json());

//route
app.use('/ToDoList', route);

//middleware
app.use(middleware);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
