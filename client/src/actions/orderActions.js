import axios from "axios";
import Swal from "sweetalert2";

export const checkoutOrderAction =
  (token, toplamfiyat) => async (dispatch, getState) => {
    dispatch({ type: "CHECKOUT_ORDER_REQUEST" });

    //Kullanıcı ve karttaki Itemlar birleştirilir.
    const currentUser = getState().loginUserReducer.currentUser;
    const cartItems = getState().addToCartReducer.cartItems;

    try {
      const response = await axios.post(
        "http://localhost:4000/api/orders/checkout",
        {
          token,
          currentUser,
          toplamfiyat,
          cartItems,
        }
      );
      console.log("Response", response);
      dispatch({ type: "CHECKOUT_ORDER_SUCCES", payload: response.data }); //API ISLEMLERINDE FIX
      localStorage.removeItem("cartItems");
      window.location.href = "/myorders";
    } catch (error) {
      dispatch({ type: "CHECKOUT_ORDER_FAILED", payload: error });
      console.log(error);
    }
  };

export const getUsersOrdersAction = () => async (dispatch, getState) => {
  const currentUser = getState().loginUserReducer.currentUser;
  dispatch({ type: "GET_USER_ORDERS_REQUEST" });
  try {
    const response = await axios.post(
      "http://localhost:4000/api/orders/getusersorders",
      { userid: currentUser._id } // user
    );
    dispatch({ type: "GET_USER_ORDERS_SUCCESS", payload: response.data });
  } catch (error) {
    dispatch({ type: "GET_USER_ORDERS_FAILED", payload: error });
  }
};

export const getAllOrdersAction = () => async (dispatch) => {
  dispatch({ type: "GET_ALL_ORDERS_REQUEST" });

  try {
    const response = await axios.get(
      "http://localhost:4000/api/orders/getAllOrders"
    );
    console.log(response);

    dispatch({ type: "GET_ALL_ORDERS_SUCCESS", payload: response.data });
  } catch (error) {
    dispatch({ type: "GET_ALL_ORDERS_FAILED", payload: error });
  }
};

// DELIVERY

export const deliverOrderAction = (orderid) => async (dispatch) => {
  dispatch({ type: "DELIVER_ORDER_REQUEST" });

  try {
    const response = await axios.post(
      "http://localhost:4000/api/orders/deliverOrder",
      { orderid }
    );
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Teslim İşlemi Başarılı",
      showConfirmButton: false,
      timer: 1500,
    });
  } catch (error) {
    console.log(error);
  }
};