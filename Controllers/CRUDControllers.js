const User = require('../Models/userSchema');

const controllers = {
    get: async (req, res) => {
        try {
            const users = await User.find();  

            if (!users || users.length === 0) {
                return res.status(404).send('No users found');
            }

            res.status(200).json(users); 
        } catch (error) {
            console.error('Error fetching users:', error);
            res.status(500).send('Internal Server Error');
        }
    },

    post: async (req, res) => {
        try {
            const { name, email, age } = req.body;

            if (!name || !email || !age) {
                return res.status(400).send('Missing required fields: name, email, age');
            }

            const newUser = new User({ name, email, age });
            await newUser.save();

            res.status(201).json(newUser);  
        } catch (error) {
            console.error('Error creating user:', error);
            res.status(500).send('Internal Server Error');
        }
    },

    put: async (req, res) => {
        try {
            const userId = req.params.id;  
            const { name, email, age } = req.body; 

            
            if (!userId || !name || !email || !age) {
                return res.status(400).send('Missing required fields: userId, name, email, age');
            }

            
            const updatedUser = await User.findByIdAndUpdate(userId, { name, email, age }, { new: true });

            if (!updatedUser) {
                return res.status(404).send('User not found');
            }

            res.status(200).json(updatedUser); 
        } catch (error) {
            console.error('Error updating user:', error);
            res.status(500).send('Internal Server Error');
        }
    },

    deletee: async (req, res) => {
        try {
            const userId = req.params.id;  

            if (!userId) {
                return res.status(400).send('User ID is required');
            }

            const deletedUser = await User.findByIdAndDelete(userId);

            if (!deletedUser) {
                return res.status(404).send('User not found');
            }

            res.status(200).send('User deleted successfully'); 
        } catch (error) {
            console.error('Error deleting user:', error);
            res.status(500).send('Internal Server Error');
        }
    }
};

module.exports = controllers;
