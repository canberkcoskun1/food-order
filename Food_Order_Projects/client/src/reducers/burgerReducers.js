// Aksiyon yaptıysak reducera tanıtmamız gerekiyor

//10- her zaman başına 1 tane state alır, state değiştikce yeniler kendini. ikinci parametresi de actiondur

// useSelector ile anasayfadayken bu verileri çağırabiliyoruz.

// GET_ALL_BURGERS_REDUCER

export const getAllBurgersReducer = (state = { burgers: [] }, action) => {
  switch (action.type) {
    case "GET_BURGERS_REQUEST":
      return {
        loading: true,
        ...state, // veriler geldikce döner.
      };
    case "GET_BURGERS_SUCCESS":
      return {
        loading: false,
        burgers: action.payload, //*succes olursa gelen verileri görebilmek ve store'a gönderebilmek  için.
      };

    case "GET_BURGERS_FAILED":
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
      break;
  }
};

// ADD_BURGER_REDUCER

export const addBurgerReducer = (state = {}, action) => {
  switch (action.type) {
    case "ADD_BURGERS_REQUEST":
      return {
        loading: true,
        ...state,
      };
    case "ADD_BURGERS_SUCCESS":
      return {
        loading: false,
        success: true,
      };
    case "ADD_BURGERS_FAILED":
      return {
        loading: true,
        error: action.payload,
      };
    default:
      return state;
  }
};

// ADMINPANEL_EDIT_BURGER_REDUCER
export const getBurgerByIdReducer = (state = {}, action) => {
  switch (action.type) {
    case "GET_BURGER_BY_ID_REQUEST":
      return {
        loading: true,
        ...state,
      };
    case "GET_BURGER_BY_ID_SUCCESS":
      return {
        loading: false,
        success: true,
        burger: action.payload,
      };
    case "GET_BURGER_BY_ID_FAILED":
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
