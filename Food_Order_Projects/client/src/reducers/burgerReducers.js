// Aksiyon yaptıysak reducera tanıtmamız gerekiyor

//10- her zaman başına 1 tane state alır, state değiştikce yeniler kendini. ikinci parametresi de actiondur

// useSelector ile anasayfadayken bu verileri çağırabiliyoruz.

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

// addBurgerReducer

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
