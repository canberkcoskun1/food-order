export const addToCartReducer = (state = { cartItems: [] }, action) => {
  // Sepete ürün ekleme işlemi

  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
        //burada hazır dizi yok, sıfırdan dizi oluşturuyoruz, burgerReducer'dan farkı budur.
      };
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
