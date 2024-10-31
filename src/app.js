const express = require("express");
const { validatingSignUpData } = require("./utils/validatingSignUpdata");
const { connectDB } = require("./config/database");
const User = require("./models/User");
const Team = require("./models/Team");
const bcrypt = require("bcrypt");
const jwt=require("jsonwebtoken");
const validator = require("validator");
const { userAuth } = require("./middleware/auth");
const app = express();
const cookieParser=require("cookie-parser")
app.use(express.json());
app.use(cookieParser());

//API to save a user
app.post("/signup", async (req, res) => {
  try {
    validatingSignUpData(req);
    const { firstName, lastName, password, emailId } = req.body;
   

    const passwordHash = await bcrypt.hash(password, 10);
    

    const user = new User({
      firstName,
      lastName,
      emailId,
      password: passwordHash,
    });
    await user.save();
    res.status(200).send("Data saved successfully");
  } catch (err) {
    res.status(400).send("ERR04 : " + err.message);
  }
});


//API to login
app.post("/login", async (req, res) => {
  try {
    const { emailId, password } = req.body;
    if (!validator.isEmail(emailId)) {
      throw new Error("Invalid Email");
    }
    const user = await User.findOne({ emailId: emailId });
    if (!user) {
      throw new Error("Invalid credential");
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (isPasswordValid) {
      const token = await jwt.sign({ _id: user._id }, "Saquib@123",{
        expiresIn:'1d'
      });
     

      res.cookie("token", token); //first token is name of the token at the clients side
      res.send("loggedin succesfully");
    } else {
      throw new Error("Invalid credential");
    }
  } catch (err) {
    res.status(400).send("ERR04 : " + err.message);
  }
});

//API to get a user by its id and then delete it
app.delete("/user",userAuth, async (req, res) => {
  const userId = req.body.id;
  try {
    console.log(userId);

    const user = await User.findByIdAndDelete(userId);
    res.send("User Deleted succesfully");
  } catch {
    res.status(400).send("Something went wrong");
  }
});



// API to create a new team
app.post("/teams", userAuth, async (req, res) => {
  try {
    const { name } = req.body; 
    const creatorId = req.user._id;  

    // Creating new team with the creator as the first member
    const newTeam = new Team({
      name,
      members: [creatorId],
      creator: creatorId,
    });
    await newTeam.save();

    res.status(201).json({ message: "Team created successfully", team: newTeam });
  } catch (err) {
    res.status(500).send("ERR05: " + err.message);
  }
});


connectDB()
  .then(() => {
    console.log("database connection Established...");

    app.listen(7777, () => {
      console.log("Server is running perfectly...");
    });
  })
  .catch((err) => {
    console.log("database connection failed");
  });
