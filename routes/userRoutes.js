const express = require('express');
const router = express.Router();
const {createUser,loginUser,getCurrentUser } = require('../controllers/userControllers');
const validToken = require('../middelware/validateTokenHandle');

router.post("/register", createUser)

router.post("/login", loginUser)

router.get("/current", validToken, getCurrentUser)


module.exports = router;