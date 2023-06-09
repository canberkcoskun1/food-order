import axios from "axios";
import Swal from "sweetalert2";
export const registerUserAction = (user) => async (dispatch) => {
  dispatch({ type: "USER_REGISTER_REQUEST" });

  try {
    const response = await axios.post(
      "http://localhost:4000/api/users/register",
      user
    );
    console.log("Response", response);

    dispatch({ type: "USER_REGISTER_SUCCESS", payload: response.data });
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Kullanıcı Kaydı Başarılı",
      showConfirmButton: false,
      timer: 1500,
    });

    window.location.href = "/login";
  } catch (error) {
    dispatch({ type: "USER_REGISTER_FAILED", payload: error });
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Böyle bir kullanıcı var!",
    });
  }
};

// LOGIN_ACTION -> getState kullanıcının localStorage da tutulması gerekiyor.
export const loginUserAction = (user) => async (dispatch, getState) => {
  dispatch({ type: "USER_LOGIN_REQUEST" });

  try {
    const response = await axios.post(
      "http://localhost:4000/api/users/login",
      user
    );
    console.log("Login response", response);
    dispatch({ type: "USER_LOGIN_SUCCESS", payload: response.data });
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Kullanıcı Girişi Başarılı",
      showConfirmButton: false,
      timer: 1500,
    });
    localStorage.setItem("currentUser", JSON.stringify(response.data));
    window.location.href = "/";
  } catch (error) {
    dispatch({ type: "USER_LOGIN_FAILED", payload: error });
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Kullanıcı Adı ya da Şifre Hatalı",
    });
  }
};

export const logoutUserAction = () => {
  localStorage.removeItem("currentUser");
  window.location.href = "/";
};

// GET_ALL_USERS ACTION
export const getAllUsersAction = () => async (dispatch) => {
  dispatch({ type: "GET_ALL_USERS_REQUEST" });

  try {
    const response = await axios.get(
      "http://localhost:4000/api/users/getAllUsers"
    );
    console.log(response);

    dispatch({ type: "GET_ALL_USERS_SUCCESS", payload: response.data });
  } catch (error) {
    dispatch({ type: "GET_ALL_USERS_FAILED", payload: error });
  }
};
// DELETE USER ACTION
export const deleteUserAction = (userid) => async (dispatch) => {
  try {
    const response = await axios.post(
      "http://localhost:4000/api/users/deleteUser",
      { userid }
    );
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Silme İşlemi Başarılı",
      showConfirmButton: false,
      timer: 1500,
    });
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};
