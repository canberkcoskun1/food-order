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
//
router.post("/deleteBurger", async (req, res) => {
  const burgerid = req.body.burgerid;
  // const {burgerid} = req.body
  try {
    //New method
    await burgerModel.findOneAndDelete({ _id: burgerid });
    console.log("Menu silme işlemi başarılı");
  } catch (error) {
    res.status(400).json({ message: error });
  }
});

// ADD BURGER SERVICES

router.post("/addBurger", async (req, res) => {
  const menu = req.body.menu;
  try {
    const newMenu = new burgerModel({
      ad: menu.ad,
      ozellik: ["small", "medium", "mega"],
      img: menu.img,
      desc: menu.desc,
      kategori: menu.kategori,
      fiyat: [menu.fiyat], // dizi olarak gönderildi.
    });

    await newMenu.save();
    res.send("Menü Ekleme Başarılı");
  } catch (error) {
    res.status(400).json({ message: error });
  }
});

// GET_BURGER_BY_ID SERVICE

router.post("/getBurgerById", async (req, res) => {
  const burgerid = req.body.burgerid;

  try {
    const burger = await burgerModel.findOne({ _id: burgerid });
    res.send(burger);
  } catch (error) {
    res.status(400).json({ message: error });
  }
});

module.exports = router;
