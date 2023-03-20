import React, { useEffect, useState } from "react";
import MenuList from "../components/MenuList";
import menuler from "../yemekdata";
import axios from "axios";
function HomePage() {
  const [foods, setFoods] = useState([]);
  // foods'u menu yerine yollarsak state dinlediğim gerçek veri tabanından alacak

  //useEffect axios için gerekli
  useEffect(() => {
    axios
      .get("http://localhost:4000/getFoods")
      .then((res) => setFoods(res.data))
      .then((err) => console.log(err));
  }, []);
  return (
    <div>
      <div className="row">
        {/* mapleme işlemi yapılacak !! içeriklerini değiştireceğiz. Proplarla bu işlemi yapacağız. --> menu.map yerine foods yazdık çünkü useState uyguladık. */}
        {foods.map((menu) => (
          <div className="col-md-4">
            <MenuList menu={menu} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
