const express = require("express");

const burgerModel = require("../models/BurgerModel");

const router = express.Router(); //Rotalama yaptırır.
//GET ALL FOODS SERVİSİ
app.get("/getFoods", async (req, res) => {
  try {
    const foods = await burgerModel.find({});
    res.send(foods);
    // console.log(users);
  } catch (err) {
    console.log(err);
  }
});

module.export = router;
