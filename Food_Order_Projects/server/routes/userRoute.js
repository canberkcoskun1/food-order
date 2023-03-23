const express = require("express");
const UserModel = require("../models/userModel");
const router = express.Router();
// Register
router.post("/register", async (req, res) => {
  const { name, mail, password } = req.body;
  const oldUser = await UserModel.findOne({ mail: mail });
  //Eski kullanıcı varmı yokmu diye kontrol tanımı. findOne: methodu bodymizde varmı kontrolü.
  if (oldUser) {
    res.status(400).json({ message: "Böyle bir kullanıcı bulunmaktadır." });
  } else {
    const newUser = new UserModel({
      name: name,
      mail: mail,
      password: password,
    });
  }

  try {
    await newUser.save(), res.send("User register is succesful.");
  } catch (error) {
    res.send("User register is failed.");
  }
});

//Login
router.post("/login", async (req, res) => {
  const { mail, password } = req.body;
  // const mail = req.body.mail '2si de aynı işlemdir.

  try {
    const user = await UserModel.find({ mail: mail, password: password });
    if (user.length > 0) {
      res.send(user[0]);
    } else {
      res.status(400).json({ message: "Böyle bir kullanıcı bulunmamaktadır" });
    }
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;
