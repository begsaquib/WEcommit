const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://saquib:Pyh7Z2pe7IWM2iMz@easytinder.cs5py.mongodb.net/TnEManagement"
    );
    console.log("Database connection established");
  } catch (err) {
    console.log("Database connection failed:", err.message);
    process.exit(1); 
  }
};

module.exports = { connectDB };
