import React, { useEffect, useState } from "react";
import MenuList from "../components/MenuList";
import menuler from "../yemekdata";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getAllBurgers } from "../actions/burgerActions";
import Spinner from "../components/Spinner";
function HomePage() {
  const [foods, setFoods] = useState([]);
  // foods'u menu yerine yollarsak state dinlediğim gerçek veri tabanından alacak

  const burgerState = useSelector((state) => state.getAllBurgersReducer);

  // 15-BurgerState çağırılacak. Redux
  //Reducer'a gittik ve burgerReducerdan loading ve burgers çekildi.

  const { burgers, loading } = burgerState;

  //16-
  const dispatch = useDispatch();
  //useEffect axios için gerekli
  useEffect(() => {
    // axios
    //   .get("http://localhost:4000/getFoods")
    //   .then((res) => setFoods(res.data))
    //   .then((err) => console.log(err));

    // 17- getAllBurgers aksiyonu dispatchlendi
    dispatch(getAllBurgers());
  }, []);
  return (
    <div>
      <div className="row">
        {/* mapleme işlemi yapılacak !! içeriklerini değiştireceğiz. Proplarla bu işlemi yapacağız. -->useState sonrası menu.map yerine foods yazdık çünkü useState uyguladık. Redux sonrası verilerimiz Reducer--> burgers kısmından gelecek. */}
        {/* Spinner oluşturduk */}
        {loading ? (
          <Spinner />
        ) : (
          burgers.map((menu, index) => (
            <div key={index} className="col-md-4">
              <MenuList menu={menu} />
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default HomePage;
