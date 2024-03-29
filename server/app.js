const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

// middleware
const corsOptions = {
    origin: "https://mern-deploy-frontend-levi.onrender.com"
}

app.use(express.json());
app.use(cors(corsOptions));


// connect MongoDB
mongoose.connect(process.env.MONGODB_URI).then(() => {
    const PORT = process.env.PORT || 8000
    app.listen(PORT, () => {
        console.log('app is listening on port '+PORT);
    })

}).catch(err => {
    console.log(err);
})

// route
app.get("/", (req, res) => {
    res.status(201).json({message: "Connected to backend!" });
})