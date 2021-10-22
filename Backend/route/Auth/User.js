const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const route = express.Router();

const User = require("../../Model/User");

route.post("/register", async (req, res) => {
  try {
    // Get user input
    var { name, email, password, Role } = req.body;

    email = email.toLowerCase();
    console.log(email);

    // Validate user input
    if (!(email && password && name)) {
      res.send({
        message: "All Input Required",
        All_Input: true,
      });
    }

    // check if user already exist
    // Validate if user exist in our database
    const oldUser = await User.findOne({ email });

    if (oldUser && oldUser.Role == Role) {
      return res.send({
        message: "Email Already Exist. Try different Email or Sign In",
        Already_Exist: true,
      });
    }

    //Encrypt user password
    encryptedPassword = await bcrypt.hash(password, 10);

    // Create user in our database
    const user = await new User({
      name,
      email: email.toLowerCase(), // sanitize: convert email to lowercase
      password: encryptedPassword,
      Role: Role,
    });
    await user.save();

    // Create token

    // return new user
    res.status(201).json(user);
  } catch (err) {
    console.log(err);
  }
  // Our register logic ends here
});

// Login
route.post("/login", async (req, res) => {
  // Our login logic starts here
  try {
    // Get user input
    var { email, password, Role } = req.body;
    console.log(req.body);
    email = email.toLowerCase();

    // Validate user input
    if (!(email && password)) {
      res.send({
        message: "All Input Required",
        All_Input: true,
      });
    }
    // Validate if user exist in our database
    const user = await User.findOne({ email, Role });
    if (!user) {
      return res.send({
        message: "Email Not Found",
        Wrong_Detail: true,
      });
    }
    console.log("opemmed");

    if (user && (await bcrypt.compare(password, user.password))) {
      // Create token
      console.log("User found");
      const token = jwt.sign({ user_id: user._id, email }, "Toqeer12", {
        expiresIn: "2h",
      });

      // save user token
      user.token = token;
      console.log("user", user);
      // usery
      return res
        .status(200)
        .json({ email: user.email, name: user.name, token: user.token });
    }
    res.send({
      message: "Password is InValid",
      Wrong_Detail: true,
    });
  } catch (err) {
    console.log(err);
  }
});

module.exports = route;