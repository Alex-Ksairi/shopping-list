const express = require('express');
const app = express();

const cors = require('cors');

const dotenv = require('dotenv');
dotenv.config();

const mongoose = require('mongoose');

const port = process.env.PORT || 5000;


// importing routes
const ShoppingListRoute = require('./routes/ShoppingListRoute');


// used for json data
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

// using routes
app.use('/shopping-list', ShoppingListRoute);


mongoose
    .connect(
        `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/${process.env.DB_NAME}?retryWrites=true&w=majority`, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true }
    )
    .then(() => console.log('Connection has been successfully established! Welcome to database...'))
    .catch(() => console.log('Ups, database couldn\'t be connected!'));

app.listen(port, () => console.log(`Server is running on port ${port} and being ready for requests...`));