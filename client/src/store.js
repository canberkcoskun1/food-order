// 2- Store oluşturuluyor
// 3- thunk import

import thunk from "redux-thunk";
import { applyMiddleware, combineReducers, createStore } from "redux";
import {
  addBurgerReducer,
  getAllBurgersReducer,
  getBurgerByIdReducer,
  editBurgerReducer,
} from "./reducers/burgerReducers";
import { composeWithDevTools } from "redux-devtools-extension";
import { addToCartReducer } from "./reducers/cartReducers";
import {
  getAllUsersReducer,
  loginUserReducer,
  registerUserReducer,
} from "./reducers/userReducers";
import {
  checkoutOrderReducer,
  getUserOrdersReducer,
  getAllOrdersReducer,
  deliverOrderReducer,
} from "./reducers/orderReducers";

//5- Bütün reducerları finalReducerda toplayıp yayın yapacağız.

// başlangıçta boş obje olacak daha sonra dolduracağız. LocalStorage'da

//13- compoose hata alırsak yukarıda olacak.
const compose = composeWithDevTools({});

//Direk reducer içerisine yolladık
const finalReducer = combineReducers({
  getAllBurgersReducer: getAllBurgersReducer,
  addToCartReducer: addToCartReducer,
  registerUserReducer: registerUserReducer,
  loginUserReducer: loginUserReducer,
  checkoutOrderReducer: checkoutOrderReducer,
  getUserOrdersReducer: getUserOrdersReducer,
  getAllUsersReducer: getAllUsersReducer,
  addBurgerReducer: addBurgerReducer,
  getBurgerByIdReducer: getBurgerByIdReducer,
  editBurgerReducer: editBurgerReducer,
  getAllOrdersReducer: getAllOrdersReducer,
  deliverOrderReducer: deliverOrderReducer,
});
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
