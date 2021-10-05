const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const route = express.Router();

const User = require("../../Model/User");

route.post("/register", async (req, res) => {
  try {
    // Get user input
    var { name, email, password, role } = req.body;
    email = email.toLowerCase();
    console.log(email);

    // Validate user input
    if (!(email && password && name)) {
      res.status(400).send("All input is required");
    }

    // check if user already exist
    // Validate if user exist in our database
    const oldUser = await User.findOne({ email });

    if (oldUser) {
      return res.status(409).send("User Already Exist. Please Login");
    }

    //Encrypt user password
    encryptedPassword = await bcrypt.hash(password, 10);

    // Create user in our database
    const user = await User.create({
      name,
      email: email.toLowerCase(), // sanitize: convert email to lowercase
      password: encryptedPassword,
      role,
    });

    // Create token
    const token = jwt.sign({ user_id: user._id, email }, "1234567", {
      expiresIn: "2h",
    });
    // save user token
    user.token = token;

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
    var { email, password } = req.body;
    email = email.toLowerCase();

    // Validate user input
    if (!(email && password)) {
      res.status(400).send("All input is required");
    }
    // Validate if user exist in our database
    const user = await User.findOne({ email });
    console.log("user", user);

    if (user && (await bcrypt.compare(password, user.password))) {
      // Create token
      const token = jwt.sign({ user_id: user._id, email }, "Toqeer12", {
        expiresIn: "2h",
      });

      // save user token
      user.token = token;

      // user
      return res
        .status(200)
        .json({ email: user.email, name: user.name, token: user.token });
    }
    res.status(400).send("Invalid Credentials");
  } catch (err) {
    console.log(err);
  }
});

module.exports = route;
