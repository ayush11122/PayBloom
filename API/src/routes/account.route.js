const { balance, transfer } = require('../controllers/account.controller');
const express = require('express');
const { authMiddleware } = require('../middlewares/middleware');

const router = express.Router();

router.get("/balance", authMiddleware, balance)
router.post("/transfer", authMiddleware, transfer);

module.exports = router;