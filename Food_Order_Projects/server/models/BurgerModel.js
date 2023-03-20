//1-
const mongoose = require("mongoose");

//2-Çok fazla veri var dikkatli gideceğiz
const burgerSchema = new mongoose.Schema(
  {
    ad: { type: String, require },
    ozellik: [],
    fiyat: [],
    kategori: { type: String, require },
    img: { type: String, require },
    desc: { type: String, require },
  },
  {
    timestamps: true,
  }
);

//3-önce tablo adı, sonra şema adı yazılır.
const burgerModel = mongoose.model("foods", burgerSchema);
module.exports = burgerModel;
