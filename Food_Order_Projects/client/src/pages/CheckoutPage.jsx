import React from "react";
import { useDispatch } from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import Swal from "sweetalert2";
import { checkoutOrderAction } from "../actions/orderActions";

function CheckoutPage({ toplamfiyat }) {
  const dispatch = useDispatch();
  const tokenHandler = (token) => {
    console.log(token);
    dispatch(checkoutOrderAction(token, toplamfiyat));
  };
  return (
    <div>
      <StripeCheckout
        amount={toplamfiyat * 100}
        shippingAddress
        billingAddress
        token={tokenHandler}
        stripeKey="pk_test_51MooapE8f0WwKC7L3EUZGqKGb4xUXJiXG0IrNVazymRqUwyyHJgVhISpoWZOUGl7KyvCMbovK2vxpgKThWmw7xnh00ssmXAGU6"
        currency="TRY"
      >
        <button className="btn btn-outline-danger mb-3 w-25">HEMEN ÖDE!</button>
      </StripeCheckout>
    </div>
  );
}

export default CheckoutPage;
