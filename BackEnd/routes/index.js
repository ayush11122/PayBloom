const express = require('express');
const router = express.Router();
const UserRouter = require('./user');
const AccountRouter = require('./account');


router.use('api/v1/users', UserRouter);
router.use('api/v1/accounts', AccountRouter);

module.exports = router;