const express = require('express');
const User = require('../Model/UserModel'); 
const Pet = require('../Model/PetModel')

const userRegistration = async (req, res) => {
    try {
        const users = await User.aggregate([
            {
                $group: {
                    _id: null,
                    count: { $sum: 1 }
                }
            }
        ]);

        // Since aggregation returns an array, we need to return the count properly
        const totalUsers = users.length > 0 ? users[0].count : 0;  
        res.json({ count: totalUsers });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const petTypes = async (req, res) => {
    try {
        const pets = await Pet.aggregate([
            {
                $group: {
                    _id: "$type",
                    count: { $sum: 1 }
                }
            }
        ]);

        res.json(pets);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

module.exports = {
    userRegistration,
    petTypes
}
