const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser"); //request convert in to java script object
const cors = require("cors");

const app = express(); // involking express

//import routes
const postRoutes = require("./routes/posts");

////////
//const postRoutes = require("./routes/test");
/////

//app middleware
app.use(bodyParser.json());
app.use(cors());

//route middleware
app.use(postRoutes);

const PORT = 8000;
const DB_URL =
  "mongodb+srv://thushanvithana:Appleiphone13@cluster0.z9omocd.mongodb.net/?retryWrites=true&w=majority";

//check db connection
mongoose
  .connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })

  .then(() => {
    console.log("DB Connected Successful!");
  })
  .catch((err) => console.log("DB connection error", err));

app.listen(PORT, () => {
  console.log(`App is runnig on ${PORT}`);
});
