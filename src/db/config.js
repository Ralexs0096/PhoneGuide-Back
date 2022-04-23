const mongoose = require('mongoose');
const { MONGODB_URI } = process.env;

const dbConnection = async () => {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('Database is Connected');
  } catch (error) {
    console.log(error);
    throw new Error('Error to connect DB');
  }
};

module.exports = dbConnection;
