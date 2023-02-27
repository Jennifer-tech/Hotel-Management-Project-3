"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const UserModel = require('../model/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();
exports.register = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, email, password, role } = req.body;
    try {
        const emailExists = yield UserModel.findOne({ email });
        if (emailExists)
            return res.status(400).json({ message: "User with the email already exists." });
        const passwordHash = yield bcrypt.hash(password, 10);
        const newUser = yield UserModel.create({
            name, email, password: passwordHash, role
        });
        res.status(201).json({ status: 'success', message: 'New user created successfully.', newUser });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ status: 'error', message: 'Something broke!', error: error === null || error === void 0 ? void 0 : error.message });
    }
});
exports.login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    try {
        const user = yield UserModel.findOne({ email });
        const passwordIsValid = yield bcrypt.compare(password, user.password);
        if (!passwordIsValid)
            return res.status(400).json({ message: "Invalid password." });
        const payload = {
            id: user._id,
            role: user.role,
            email: user.email
        };
        const token = jwt.sign(payload, process.env.JWT_TOKEN, { expiresIn: '3d' });
        res.status(200).json({ message: 'Login successful', token });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ status: 'error', message: 'Something broke!', error: error === null || error === void 0 ? void 0 : error.message });
    }
});
exports.getAllUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield UserModel.find({});
        res.status(200).json({ message: 'Successful', data: users });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ status: 'error', message: 'Something broke!', error: error === null || error === void 0 ? void 0 : error.message });
    }
});
