const express = require("express");
const path = require("path");
const app = express();
const cors = require("cors");
const port = 3000;

// ========================== Express middleWare =========================
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

// ================= Model & Connection =========================
require("./Model");

// =========================== Middeleware ===========================

const auth = require("./Middleware/verifyauth");

// =============================== User Route =============================

const UserRoute = require("./route/Auth/User");
const ResetPassword = require("./route/Auth/ResetPassword");
const website = require("./route/Website/website");
app.use("/user", UserRoute);
app.use("/reset_password", ResetPassword);
app.use("/website", auth, website);

app.post("/tracker", (req, res) => {
  console.log("body", req.body);

  res.send("Toqeer houssain");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
