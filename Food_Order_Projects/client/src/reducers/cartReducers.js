export const addToCartReducer = (state = { cartItems: [] }, action) => {
  // Sepete ürün ekleme işlemi

  switch (action.type) {
    case "ADD_TO_CART":
      const mevcutIse = state.cartItems.find(
        (sepet) => sepet._id === action.payload._id
      );
      if (mevcutIse) {
        return {
          ...state,
          cartItems: state.cartItems.map((sepet) =>
            sepet._id === action.payload._id ? action.payload : sepet
          ),
        };
      } else {
        return {
          //burada hazır dizi yok, sıfırdan dizi oluşturuyoruz, burgerReducer'dan farkı budur.
          ...state,
          cartItems: [...state.cartItems, action.payload],
        };
      }

    // Sepette ürün silme işlemi;

    case "DELETE_FROM_CART":
      return {
        ...state,
        //mevcut state filtreleme yapılır
        cartItems: state.cartItems.filter(
          (sepet) => sepet._id !== action.payload._id
        ),
      };

    default:
      return state;
  }
};
