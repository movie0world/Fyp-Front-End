const express = require("express");
const app = express();
const port = 4000;

// ========================== Express middleWare =========================
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// ================= Model & Connection =========================
require("./Model");

// =========================== Middeleware ===========================

const auth = require("./Middleware/verifyauth");

// =============================== User Route =============================

const UserRoute = require("./route/Auth/User");
const ResetPassword = require("./route/Auth/ResetPassword");
app.use("/user", UserRoute);
app.use("/reset_password", ResetPassword);

app.get("/", auth, (req, res) => {
  res.send("Authorized user");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
