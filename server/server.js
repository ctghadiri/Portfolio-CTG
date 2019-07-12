const express = require("express");

const mongoose = require("mongoose");

const routes = require("./routes")

const app = express();

const PORT = process.env.PORT || 8000;

// define middleware
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(routes);

// connect to mongo db
mongoose.connect(process.env.MONGO_URI || "mongodb://localhost/portfolio")

// start the API server
app.listen(PORT, function(){
    console.log(`Server listening on PORT ${PORT}`)
})