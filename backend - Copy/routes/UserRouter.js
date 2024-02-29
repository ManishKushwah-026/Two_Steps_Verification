const express = require("express");
const route = express.Router();

const { createUser, getAllUsers } = require("../controllers/userController");

route.post("/createUser", createUser);
route.get("/getAllUsers", getAllUsers)

// export 
module.exports = route;