// const User = require("../../Model/User");

// const express = require("express");

// const route = express.Router();

// const sgMail = require("@sendgrid/mail");

// sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// route.post("/", (req, res) => {
//   User.findOne({ email: req.body.email })
//     .then((user) => {
//       if (!user)
//         return res.status(401).json({
//           message:
//             "The email address " +
//             req.body.email +
//             " is not associated with any account. Double-check your email address and try again.",
//         });

//       //Generate and set password reset token
//       user.generatePasswordReset();

//       // Save the updated user object
//       user
//         .save()
//         .then((user) => {
//           // send email
//           let link =
//             "http://localhost:3000/reset_password/" + user.resetPasswordToken;
//           const mailOptions = {
//             to: user.email,
//             from: process.env.FROM_EMAIL,
//             subject: "Password change request",
//             text: `Hi ${user.username} \n
//                     Please click on the following link ${link} to reset your password. \n\n
//                     If you did not request this, please ignore this email and your password will remain unchanged.\n`,
//           };

//           sgMail.send(mailOptions, (error, result) => {
//             if (error) return res.status(500).json({ message: error.message });

//             res.status(200).json({
//               message: "A reset email has been sent to " + user.email + ".",
//             });
//           });
//         })
//         .catch((err) => res.status(500).json({ message: err.message }));
//     })
//     .catch((err) => res.status(500).json({ message: err.message }));
// });

// // @route POST api/auth/reset
// // @desc Reset Password - Validate password reset token and shows the password reset view
// // @access Public
// route.post(":token", (req, res) => {
//   User.findOne({
//     resetPasswordToken: req.params.token,
//     resetPasswordExpires: { $gt: Date.now() },
//   })
//     .then((user) => {
//       if (!user)
//         return res
//           .status(401)
//           .json({ message: "Password reset token is invalid or has expired." });

//       //Redirect user to form with the email address
//       res.status(200).json({ validToken: true });
//     })
//     .catch((err) => res.status(500).json({ message: err.message }));
// });

// // @route POST api/auth/reset
// // @desc Reset Password
// // @access Public
// route.post("new_password/:token", (req, res) => {
//   User.findOne({
//     resetPasswordToken: req.params.token,
//     resetPasswordExpires: { $gt: Date.now() },
//   }).then((user) => {
//     if (!user)
//       return res
//         .status(401)
//         .json({ message: "Password reset token is invalid or has expired." });

//     //Set the new password
//     user.password = req.body.password;
//     user.resetPasswordToken = undefined;
//     user.resetPasswordExpires = undefined;

//     // Save
//     user.save((err) => {
//       if (err) return res.status(500).json({ message: err.message });

//       // send email
//       const mailOptions = {
//         to: user.email,
//         from: process.env.FROM_EMAIL,
//         subject: "Your password has been changed",
//         text: `Hi ${user.username} \n
//                     This is a confirmation that the password for your account ${user.email} has just been changed.\n`,
//       };

//       sgMail.send(mailOptions, (error, result) => {
//         if (error) return res.status(500).json({ message: error.message });

//         res.status(200).json({ message: "Your password has been updated." });
//       });
//     });
//   });
// });

// module.exports = route;
