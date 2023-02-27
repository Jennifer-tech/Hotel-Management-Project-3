"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const { response } = require('express');
const { request } = require('express');
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const Joi = require('joi');
const validator = require('express-joi-validation').createValidator();
const { register, login, getAllUsers } = require('../controllers/user');
require('dotenv').config();
const registerSchema = Joi.object({
    name: Joi.string().min(3).max(30).required(),
    email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).min(3).max(30),
    password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
    repeat_password: Joi.ref('password'),
    role: Joi.string().valid('guest', 'admin')
});
router.post('/register', validator.body(registerSchema), register);
router.post('/login', login);
router.get('/', getAllUsers);
/**
 *
 * @param {import('express').Request} req
 * @param {response} res
 * @param {import('express').NextFunction} next
 */
// function middleware1(req, res, next) {
//     console.log(req.hostname);
//     console.log('Moving to middleware 2')
//     next();
// }
// function middleware2(req, res, next) {
//     console.log(req.hostname);
//     console.log('Moving to middleware 3')
//     next();
// }
// router.get('/test', middleware1, middleware2, (req, res, next) => {
//     console.log('Done.')
//     // res.json({message: "This request was successful."})
//     try {
//         throw new Error('This is a fake error message');
//     } catch (error) {
//         next(error)
//     }
// })
exports.default = router;
