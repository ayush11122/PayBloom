const { Router } = require('express');
const  accountRouter  = require('./account.route');
const  userRouter  = require('./user.route');

const router = Router();

router.use('/users', userRouter);
router.use('/accounts', accountRouter);

module.exports = router;