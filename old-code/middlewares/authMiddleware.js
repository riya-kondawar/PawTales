import JWT from "jsonwebtoken";
import userModel from "../models/userModel.js";

// Protected routes token based
export const requireSignIn = async (req, res, next) => {
    try {
        if (!req.headers.authorization) {
            return res.status(401).send({
                success: false,
                message: "No token provided",
            });
        }

        const token = req.headers.authorization.split(" ")[1]; // Assuming Bearer <token>
        const decoded = JWT.verify(token, process.env.JWT_SECRET);

        req.user = decoded; // Attach user info to the request
        next();
    } catch (error) {
        console.log(error);
        res.status(401).send({
            success: false,
            message: "Invalid token",
        });
    }
};

// Admin access middleware
export const isAdmin = async (req, res, next) => {
    try {
        if (!req.user) {
            return res.status(401).send({
                success: false,
                message: "Unauthorized Access",
            });
        }

        const user = await userModel.findById(req.user._id);
        
        if (user.role !== 1) { // Assuming role 1 is admin
            return res.status(403).send({
                success: false,
                message: "Forbidden: Admins only",
            });
        } else {
            next();
        }
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: 'Error in Admin Middleware',
            error: error.message || "Internal Server Error",
        });
    }
};
