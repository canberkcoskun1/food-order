//7- axios import
import axios from "axios";

// 8- İlk aksiyon belirleniyor, bütün burgerlara erişeceğimiz için export dışarıya göndericeğiz Dispatch girdiği için iç içe arrow function kullanacağız. -Bu sorguyu attığımız anda 3 sorgu geçerli. Request, Success, Failed

export const getAllBurgers = () => async (dispatch) => {
  dispatch({ type: "GET_BURGERS_REQUEST" }); // FIRST ACTION(süreci tetikleyen bu dispatch.)

  try {
    const response = await axios.get("http://localhost:4000/getFoods");

    dispatch({ type: "GET_BURGERS_SUCCESS", payload: response.data }); //SECOND ACTION
  } catch (error) {
    dispatch({ type: "GET_BURGERS_FAILED", payload: error }); // THIRD ACTION
  }
};
