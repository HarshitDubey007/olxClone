const express = require('express')

const { signup, signin, sell, getsell } = require('../controllers/user');
const { isRequestValidated, validateSignUpRequest, validateSignInRequest, requireSignin } = require('../validators');
// const { validateSignInRequest, validateSignUpRequest, isRequestValidated } = require('../validators');

const router = express.Router();

router.post('/signup', validateSignUpRequest, isRequestValidated, signup);
router.post('/signin', validateSignInRequest, isRequestValidated, signin);
router.post('/sell', requireSignin, sell);
router.get('/getsell', getsell);




module.exports = router;