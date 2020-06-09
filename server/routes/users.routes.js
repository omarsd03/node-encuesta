const express = require("express");
const router = express.Router();

const user = require("../controllers/user.controller");

router.post("/signup", user.signUp);
router.post("/signin", user.signIn);

module.exports = router;