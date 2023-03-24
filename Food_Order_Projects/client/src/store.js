// 2- Store oluşturuluyor
// 3- thunk import

import thunk from "redux-thunk";
import { applyMiddleware, combineReducers, createStore } from "redux";
import { getAllBurgersReducer } from "./reducers/burgerReducers";
import { composeWithDevTools } from "redux-devtools-extension";
import { addToCartReducer } from "./reducers/cartReducers";
import { registerUserReducer } from "./reducers/userReducers";
import { loginUserReducer } from "./reducers/userReducers";
import { checkoutOrderReducer } from "./reducers/orderReducers";
import { getUserOrdersReducer } from "./reducers/orderReducers";
//5- Bütün reducerları finalReducerda toplayıp yayın yapacağız.

// başlangıçta boş obje olacak daha sonra dolduracağız. LocalStorage'da
const finalReducer = combineReducers({
  getAllBurgersReducer: getAllBurgersReducer,
  addToCartReducer: addToCartReducer,
  registerUserReducer: registerUserReducer, //(11- verilen isim:  değeri)
  loginUserReducer: loginUserReducer,
  checkoutOrderReducer: checkoutOrderReducer,
  getUserOrdersReducer: getUserOrdersReducer,
});
//13- compoose hata alırsak yukarıda olacak.
const compose = composeWithDevTools({});

//Direk reducer içerisine yolladık

const cartItems = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];
const currentUser = localStorage.getItem("currentUser")
  ? JSON.parse(localStorage.getItem("currentUser"))
  : null;

const initialState = {
  addToCartReducer: {
    cartItems: cartItems,
  },
  loginUserReducer: {
    currentUser: currentUser,
  },
};
const store = createStore(
  //12-çağıracağız, Bu 3 yapıyı kullanacağız anlamına gelir.
  finalReducer,
  initialState,
  compose(applyMiddleware(thunk))
);

export default store;
