const UserModel = require('../model/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();


exports.register = async (req, res) => {
    const { name, email, password, role } = req.body;

    try {
        const emailExists = await UserModel.findOne({ email });
        if (emailExists) return res.status(400).json({ message: "User with the email already exists." });

        const passwordHash = await bcrypt.hash(password, 10);

        const newUser = await UserModel.create({
            name, email, password: passwordHash, role
        })
        res.status(201).json({ status: 'success', message: 'New user created successfully.', newUser });
    } catch (error) {
        console.error(error);
        res.status(500).json({ status: 'error', message: 'Something broke!', error: error?.message });
    }
}

exports.login =  async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await UserModel.findOne({email});

        const passwordIsValid = await bcrypt.compare(password, user.password);
        if (!passwordIsValid) return res.status(400).json({message: "Invalid password."});

        const payload = {
            id: user._id,
            role: user.role,
            email: user.email
        }
        const token = jwt.sign(payload, process.env.JWT_TOKEN, {expiresIn: '3d'});
        res.status(200).json({message: 'Login successful', token})
    } catch (error) {
        console.error(error);
        res.status(500).json({ status: 'error', message: 'Something broke!', error: error?.message });
    }
}

exports.getAllUsers = async (req, res) => {
    try {
        const users = await UserModel.find({});
        res.status(200).json({message: 'Successful', data: users});
    } catch (error) {
        console.error(error);
        res.status(500).json({ status: 'error', message: 'Something broke!', error: error?.message });
    }
}