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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const { response } = require('express');
const { request } = require('express');
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const jwtToken = process.env.JWT_TOKEN;
exports.validateToken = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const token = req.headers['authorization'];
    if (!token)
        return res.status(400).json({ message: "authentication token is required." });
    try {
        const payload = jsonwebtoken_1.default.verify(token, jwtToken);
        req.user = payload;
        next();
    }
    catch (error) {
        console.error(error);
        res.status(400).json({ status: 'error', message: 'Invalid authentication token' });
    }
});
