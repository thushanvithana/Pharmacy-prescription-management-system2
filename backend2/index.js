const express=require("express");
const mongoose= require("mongoose");
const app=express();
const router = require("./routes2/router");

var cors=require("cors");
app.use(cors());
app.use(express.json());
app.use(router);

const url2= "mongodb+srv://thushanvithana:Appleiphone13@cluster0.z9omocd.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(url2).then(()=>{
    console.log("Database Connected Succssfully")
}).catch((err)=>{
    console.log(err)
});

app.listen(5000);