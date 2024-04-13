const mongoose = require('mongoose');

// make sure to add the link of mongodb atlas before starting application to prevent error . 
const mongouri = "Add yours MOngodb atlas link here";

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
