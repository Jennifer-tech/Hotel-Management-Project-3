const { response } = require('express')
const { request } = require('express')
const jwt = require('jsonwebtoken');


/**
 * 
 * @param {request} req 
 * @param {response} res 
 * @param {import('express').NextFunction} next 
 */
exports.validateToken = async (req, res, next) => {
    const token = req.headers['authorization'];
    if (!token) return res.status(400).json({message: "authentication token is required."});

    try {
        const payload = jwt.verify(token, process.env.JWT_TOKEN);
        req.user = payload;
        next();
    } catch (error) {
        console.error(error);
        res.status(400).json({ status: 'error', message: 'Invalid authentication token' });
    }
}
