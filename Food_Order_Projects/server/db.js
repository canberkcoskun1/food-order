// 1- MongoDB Bağlantısı sağlamak için mongoose çağırılır

const mongoose = require("mongoose");
require("dotenv").config();
mongoose.connect(process.env.MONGO_DB_CONNECTION_STRING);
//connection'ın açık kapalı olmasına göre iki farklı opsiyon verdiğimiz veritabanını dinleyen metotları yazalım.
mongoose.connect(
  "mongodb+srv://canberkcoskun1:1234@cluster57.cndoldo.mongodb.net/food-order?retryWrites=true&w=majority"
);

var db = mongoose.connection;

db.on("connected", () => {
  console.log("Mongo DB bağlantısı başarıyla sağlandı.");
});

db.on("error", () => {
  console.log("Mongo DB bağlantısı arızalı!!");
});

module.exports = mongoose;
