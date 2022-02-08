// Require packages
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

// Configure dotenv
require('dotenv').config();

//express server
const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to mongoDB server
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true});
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
})

// Require and use Route files
const exercisesRouter = require('./models/exercise.model');
const usersRouter = require('./models/user.model')


app.use('/exercises', exercisesRouter);
app.use('/users', usersRouter);


// Server listen
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
})