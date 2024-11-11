const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const validator = require('validator');
const crypto = require('crypto');
const nodemailer = require('nodemailer');
const User = require('./UserModel')

const otpSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  otpCode: {
    type: String,
    required: true,
  },
  expiresAt: {
    type: Date,
    required: true,
  }
});

otpSchema.statics.genOtp = async function (name, email, password) {
  const exists = await User.findOne({email})
  if (exists){
    throw Error('Email already in use')
  }
  if (!name || !email || !password) {
    throw new Error('All fields must be filled');
  }

  if (!validator.isEmail(email)) {
    throw new Error('Email not valid');
  }

  if (!validator.isStrongPassword(password)) {
    throw new Error('Password not strong enough');
  }

  const existingOtp = await this.findOne({ email });
  if (existingOtp) {
    if (existingOtp.expiresAt > Date.now()) {
      const timeRemainingMs = existingOtp.expiresAt - Date.now();
      const minutesRemaining = Math.floor(timeRemainingMs / 1000 / 60);
      const secondsRemaining = Math.floor((timeRemainingMs / 1000) % 60);
      throw new Error(`An OTP has already been sent. Please wait ${minutesRemaining} minute(s) and ${secondsRemaining} second(s) before requesting again.`);
    } else {
      await this.deleteOne({ email });
    }
  }

  const otp = crypto.randomInt(100000, 999999).toString();

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(otp, salt);

  const expiresAt = new Date(Date.now() + 10 * 60 * 1000); 

  const userOtp = await this.create({ name, email, otpCode: hash, expiresAt });

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
    subject: 'PawFinds - Your OTP Code',
    text: `Dear ${name},\n\nYour OTP code is: ${otp}\n\nIt will expire in 10 minutes.`
  };

  try {
    await transporter.sendMail(mailOptions);
    return userOtp;
  } catch (error) {
    console.error('Error sending OTP email:', error);
    await this.deleteOne({ email }); 
    throw new Error('Failed to send OTP email');
  }
}

otpSchema.statics.verifyOtp = async function (email, otp) {
  if (!email || !otp) {
    throw new Error('All fields must be filled');
  }

  const userOtp = await this.findOne({ email });
  if (!userOtp) {
    throw new Error('OTP not found for this email');
  }

  if (userOtp.expiresAt < Date.now()) {
    await this.deleteOne({ email });
    throw new Error('OTP has expired');
  }

  const isMatch = await bcrypt.compare(otp, userOtp.otpCode);
  if (!isMatch) {
    throw new Error('Incorrect OTP');
  }

  await this.deleteOne({ email }); 

  return { success: true, message: 'OTP verified successfully' };
}

otpSchema.statics.forgotOtp = async function (email) {
  if (!email) {
    throw new Error('Email is Required');
  }
  if (!validator.isEmail(email)) {
    throw new Error('Email not valid');
  }

  const exists = await User.findOne({ email });
  if (!exists) {
    throw new Error('Email not found');
  }

  const existingOtp = await this.findOne({ email });
  if (existingOtp) {
    if (existingOtp.expiresAt > Date.now()) {
      const timeRemainingMs = existingOtp.expiresAt - Date.now();
      const minutesRemaining = Math.floor(timeRemainingMs / 1000 / 60);
      const secondsRemaining = Math.floor((timeRemainingMs / 1000) % 60);
      throw new Error(`An OTP has already been sent. Please wait ${minutesRemaining} minute(s) and ${secondsRemaining} second(s) before requesting again.`);
    } else {
      await this.deleteOne({ email });
    }
  }

  const otp = crypto.randomInt(100000, 999999).toString();

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(otp, salt);

  const expiresAt = new Date(Date.now() + 10 * 60 * 1000); // 10 minutes from now

  const userOtp = await this.create({ name: exists.name, email, otpCode: hash, expiresAt });

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
    subject: 'PawFinds - Reset Your Password',
    text: `Dear ${exists.name},\n\nYou requested to reset your password. Your OTP code is: ${otp}\n\nPlease use this code within 10 minutes to reset your password.\n\nIf you did not request this, please ignore this email.`
  };

  try {
    await transporter.sendMail(mailOptions);
    return userOtp;
  } catch (error) {
    console.error('Error sending OTP email:', error);
    await this.deleteOne({ email }); // Cleanup the OTP if sending the email fails
    throw new Error('Failed to send OTP email');
  }
};




module.exports = mongoose.model('Otp', otpSchema);
