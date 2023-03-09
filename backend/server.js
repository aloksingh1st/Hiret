const express = require('express');
const userRouter = require("./Routers/UserRoutes");
const collegeRoutes = require("./Routers/CollegeRoutes");
const app = express();
const mongoose = require("mongoose");
var bodyParser = require('body-parser')
var cors = require('cors')


mongoose
.connect("mongodb+srv://aloksingh1st:Hiret@cluster0.b2ig4hn.mongodb.net/?retryWrites=true&w=majority")
  .then(() => {
    console.log('connected to db');
  })
  .catch((err) => {
    console.log(err.message);
  });

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use(cors()) // Use this after the variable declaration


app.use('/api/users', userRouter);

app.use('/api/college', collegeRoutes);

const port = 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
