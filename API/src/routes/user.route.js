const express = require("express");

const { authMiddleware } = require("../middlewares/middleware");
const { getMe, signUp, signIn, getAllUser } = require("../controllers/user.controller");

const router = express.Router();

router.get("/me", authMiddleware, getMe);
router.post("/signup", signUp);
router.post("/signin", signIn);
router.get("/bulk", getAllUser);

module.exports = router;