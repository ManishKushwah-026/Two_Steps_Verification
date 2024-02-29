const express = require("express");
const cors = require("cors");
const app = express();

//Load dotenv
require("dotenv").config();
const port  = process.env.PORT || 5000;

//moddleware
app.use(express.json());
app.use(cors());

// Database connectivity
require("./config/database").connect();

app.listen(port, (error) => {
    if(error) throw error
    console.log(`Server is running on port ${port}`);
} )

// route
const user = require("./routes/UserRouter");
app.use("/user", user);

//Default route
app.get("/", (req, res) => {
    res.send(`<h1>Home page</h1>`)
})