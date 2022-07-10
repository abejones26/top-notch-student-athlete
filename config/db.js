const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      // On Mongoose 6.0 useNewUrlParser, useUnifiedTopology, useFindAndModify, and useCreateIndex are always true and .useFindAndModify is false. No need to use on your code.
      // useCreateIndex: true,
      // useFindAndModify: false,
      useUnifiedTopology: true,
    });

    console.log('MongoDB Connected...');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
