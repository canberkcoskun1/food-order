const express = require("express");
const burgerModel = require("../models/BurgerModel");

const router = express.Router(); //Rotalama yaptırır.

// const app = express();
//GET ALL FOODS SERVİSİ
router.get("/getBurgers", async (req, res) => {
  try {
    const foods = await burgerModel.find({});
    res.send(foods);
    // console.log(users);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
