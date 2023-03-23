//1-express paketini tanımladık.
const express = require("express");
const mongoose = require("mongoose");
//2-cors paketini tanımladık.
const cors = require("cors");
const nodemon = require("nodemon");

//4-app middleware i vasıtasıyla express kütüphanesine erişim sağladık.
const app = express();

//6-db için hazırlamış olduğumuz js dosyasını çağıralım.
const db = require("./db");
// burgerModeli çağırmazsak hata alırız.
const burgerModel = require("./models/BurgerModel");
//3-middlewareimiz ile cors kütüphanesini kullanmayı ve json req ve res'lerinde hata almanın önüne geçtik.
app.use(express.json());
app.use(cors());

//7-getFoods servisi burgersRoute içine aktarıldı.
// Servisleri route ile çağırma
//burger servisleri
const burgersRoute = require("./routes/burgersRoute");
const usersRoute = require("./routes/userRoute");
app.use("/api/burgers", burgersRoute);
// user Servisleri
app.use("/api/users", usersRoute);
//5- Serverımızı inşa edeceğimiz portu belirledik.
var port = 4000;
app.listen(4000, () => {
  console.log(`Food order serverı ${port} portunda başarıyla ayağa kalktı`);
});
