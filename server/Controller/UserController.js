const User = require('../Model/UserModel');
const jwt = require('jsonwebtoken');
const validator = require('validator')
const bcrypt = require('bcrypt')

const createToken = (_id) => {
    return jwt.sign({ _id }, process.env.SECRET, { expiresIn: '5d' });
};

const loginUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.login(email, password);
        const userName = user.name;
        const token = createToken(user._id);
        res.status(200).json({ userName, email, token });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const signupUser = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const user = await User.signup(name, email, password);
        const userName = user.name;
        const token = createToken(user._id);
        res.status(200).json({ userName, email, token });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const updateUser = async (req, res) => {
    const { name, email, newEmail } = req.body;

    try {
        if (!name || !email || !newEmail) {
            throw Error('All fields must be filled')
        }

        const user = await User.findOne({ email });

        if (!user) {
            throw Error('User not found');
        }

        if (user.name === name && user.email === newEmail) {
            throw Error('No changes detected');
        }

        if (!validator.isEmail(newEmail)) {
            throw Error('New email is not valid');
        }

        if (user.email !== newEmail) {
            const exists = await User.findOne({ email: newEmail });
            if (exists) {
                throw Error('Email already in use');
            }
        }

        user.name = name;
        user.email = newEmail;

        const updatedUser = await user.save();

        res.status(200).json({ updatedUser });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const updatePassword = async (req, res) => {
    const { email, newPassword, newConfirmPassword } = req.body
    try {
        if (!email || !newPassword || !newConfirmPassword) {
            throw Error('All fields must be filled')
        }
        if (!validator.isStrongPassword(newPassword)) {
            throw Error('Password not strong enough')
        }
        if (!(newPassword === newConfirmPassword)) {
            throw Error('Both Passwords do not match')
        }
        const exists = await User.findOne({ email })
        if (!exists) {
            throw Error('Email not found')
        }
        const match = await bcrypt.compare(newPassword, exists.password);
        if (match) {
            throw Error("You can't reuse your old password");
        }
        const salt = await bcrypt.genSalt(10)
        const hassed = await bcrypt.hash(newPassword, salt)
        exists.password = hassed
        const updatedUser = await exists.save()
        res.status(200).json({ success: true, email: updatedUser.email })
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

module.exports = { loginUser, signupUser, updateUser, updatePassword };
