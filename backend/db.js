const mongoose = require('mongoose');
const mongouri = "mongodb+srv://Abhishek_Bhavnani:Abhishek2003@cluster0.erwdgiz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const connecttomongo = () => {
    return mongoose.connect(mongouri)
        .then(() => {
            console.log('Connected to MongoDB');
        })
        .catch((error) => {
            console.error('Error connecting to MongoDB:', error);
            throw error; // rethrow the error if needed
        });
};

module.exports = connecttomongo;
