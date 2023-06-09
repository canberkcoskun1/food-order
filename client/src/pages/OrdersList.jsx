import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { deliverOrderAction, getAllOrdersAction } from "../actions/orderActions";

function OrdersList() {
  const dispatch = useDispatch();
  const orderState = useSelector((state) => state.getAllOrdersReducer);
  const { orders } = orderState;

  useEffect(() => {
    dispatch(getAllOrdersAction());
  }, [orders]);

  return (
    <div>
      <h3 className="text-dark my-3">Sipariş Listesi</h3>
      <table className="table table-hovered table-dark table-striped w-75 mx-auto">
        <thead>
          <tr>
            <th>Sipariş ID</th>
            <th>Teslimat Mail</th>
            <th>Kullanıcı ID</th>
            <th>Fiyat</th>
            <th>Sipariş Tarihi</th>
            <th>Teslimat Durumu</th>
          </tr>
        </thead>
        <tbody>
          {orders &&
            orders.map((order) => (
              <tr>
                <td>{order._id}</td>
                <td>
                  {order.email} <br />
                </td>
                <td>{order.userid}</td>
                <td>{order.orderAmount} ₺</td>
                <td>{order.createdAt.substring(0, 10)}</td>
                <td>
                  {order.isDelivered ? (
                    "Teslim Edildi"
                  ) : (
                    <button
                      className="btn btn-outline-warning"
                      onClick={() => dispatch(deliverOrderAction(order._id))}
                    >
                      TESLİM ET
                    </button>
                  )}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default OrdersList;
