const express = require("express");

const mongoose = require("mongoose");

const app = express();

const PORT = process.env.PORT || 8000;

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(routes);

mongoose.connect(process.env.MONGO_URI || "mongodb://localhost/portfolio")

app.listen(PORT, function(){
    console.log(`Server listening on PORT ${PORT}`)
})