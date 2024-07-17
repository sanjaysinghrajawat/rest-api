const mongoose = require('mongoose');

exports.connectDb = async () => {
    mongoose.connect('mongodb://localhost:27017/rest-api')
        .then(() => {
            console.log('Connected to MongoDB');
        })
        .catch((error) => {
            console.error('Error connecting to MongoDB:', error);
        });
}