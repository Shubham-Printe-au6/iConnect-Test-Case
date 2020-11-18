// importing dependencies
const express = require("express");
const cors = require("cors");
const mongoose = require('mongoose');

// importing server routes
const crudRoutes = require('./routes/crudRoutes');


require ('dotenv').config();
const app = express();


// importing environment variables
const PORT = process.env.PORT || 5000;
const URI = process.env.URI;


// applying global middlewares
app.use(cors());
app.use(express.json());


// connecting mongoDB
mongoose.connect(URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB connection successful.");
});


// using server routes
app.use('/api/companies', crudRoutes);


//running the server on a port 
app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
});