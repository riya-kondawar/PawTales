const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const validator = require('validator');
const nodemailer = require('nodemailer');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
}, { timestamps: true });

UserSchema.statics.signup = async function (name, email, password) {
    const exits = await this.findOne({ email });
    if (exits) {
        throw Error('Email Already in Use');
    }
    if (!name || !email || !password) {
        throw Error('All fields must be filled');
    }
    if (!validator.isEmail(email)) {
        throw Error('Email not valid');
    }
    if (!validator.isStrongPassword(password)) {
        throw Error('Password not strong enough');
    }
    
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    
    const user = await this.create({ name, email, password: hash });

    // Email setup
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_APP_PASS
        }
    });

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: 'Welcome to PawFinds!',
        text: `Dear ${name},\n\nWelcome to PawFinds!\n\nThank you for signing up. You can now explore our platform to give a pet to a center or adopt a pet from our center. We are thrilled to have you join our community of pet lovers.\n\nIf you have any questions or need assistance, feel free to contact us.\n\nBest regards,\nThe PawFinds Team`
    };

    try {
        await transporter.sendMail(mailOptions);
    } catch (error) {
        console.error('Error sending welcome email:', error);
    }
    
    return user;
}

UserSchema.statics.login = async function (email, password) {  
    if (!email || !password) {
        throw Error('All fields must be filled');
    }

    if (!validator.isEmail(email)) {
        throw Error('Email not valid');
    }

    const user = await this.findOne({ email });
    if (!user) {
        throw Error('User not Found');
    }
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
        throw Error('Incorrect Password');
    }

    return user;
}

module.exports = mongoose.model('User', UserSchema);
