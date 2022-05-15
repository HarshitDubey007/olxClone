const { check, validationResult } = require('express-validator');
const jwt = require('jsonwebtoken')


exports.requireSignin = (req, res, next) => {
    const token = req.headers.authorization.split(" ")[1];
    const user = jwt.verify(token, "EERRTDDVFTEDDDD");
    req.user = user;
    console.log(token)
    next();
}

exports.validateSignUpRequest = [
    // check('username')
    // .notEmpty()
    // .withMessage('username is required'),
    check('email')
    .isEmail()
    .withMessage('valid email is required'),
    check('password')
    .isLength({ min: 6})
    .withMessage('password must be at least 6 character long'),
    check('mobile')
    .isLength({ min: 10})
    .withMessage('emter valide mobile number'),
    // check('gender')
    // .notEmpty()
    // .withMessage('select gender'),   
]

exports.validateSignInRequest = [
    check('email')
    .isEmail()
    .withMessage('valid email is required'),
    check('password')
    .isLength({ min: 6})
    .withMessage('password must be at least 6 character long')
]

exports.isRequestValidated = (req, res, next) => {
    const errors = validationResult(req);
    if(errors.array().length > 0){
        return res.status(400).json({ errors: errors.array()[0].msg })
    }
    next()
}