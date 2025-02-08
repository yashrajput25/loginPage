require("dotenv").config
const express = require("express")
const mongoose = require("mongoose");
const cors = require("cors")

const app = express();
app.use(express.json());
app.use(cors())

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true})
.then(()=> console.log("MongoDB Connected"))
.catch(err => console.log("err"))

app.get("/", (req, res) =>{
    res.send("Backend is working")
})

app.listen(5000, () => {console.log(`Server is running on port 5000`)})