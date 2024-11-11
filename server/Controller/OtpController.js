const Otp = require('../Model/OtpModel');

const genOtp = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const userOtp = await Otp.genOtp(name, email, password);
        res.status(200).json({ email: userOtp.email });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

const verifyOtp = async (req, res) => {
    const { email, otp } = req.body;

    try {
        const result = await Otp.verifyOtp(email, otp);
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const forgotOtp = async (req, res) => {
    const {email} = req.body
    try {
        const userOtp = await Otp.forgotOtp(email);
        res.status(200).json({ email: userOtp.email });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

module.exports = {
    genOtp,
    verifyOtp,
    forgotOtp
}
