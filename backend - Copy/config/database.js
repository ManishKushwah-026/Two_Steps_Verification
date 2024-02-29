const mongoose = require("mongoose");

require("dotenv").config();

exports.connect = () => {
    mongoose.connect(process.env.MONGO_URL, {
    })
    .then(() => {console.log(`Database connected successfully`)})
    .catch((error) => {
        console.log("Could not connected to the database", error);
        process.exit(1);
    })
}