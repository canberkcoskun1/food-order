export const addToCartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
        //burada hazır dizi yok, sıfırdan dizi oluşturuyoruz, burgerReducer'dan farkı budur.
      };

    default:
      return state;
  }
};
