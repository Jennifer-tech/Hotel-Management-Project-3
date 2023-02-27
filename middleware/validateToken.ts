const { response } = require('express')
const { request } = require('express')
import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

interface User extends Request{
    user: any;
}

const jwtToken: any = process.env.JWT_TOKEN;

exports.validateToken = async (req: User, res: Response, next: NextFunction) => {
    const token = req.headers['authorization'];
    if (!token) return res.status(400).json({message: "authentication token is required."});

    try {
        const payload = jwt.verify(token, jwtToken);
        req.user = payload;
        next();
    } catch (error) {
        console.error(error);
        res.status(400).json({ status: 'error', message: 'Invalid authentication token' });
    }
}
