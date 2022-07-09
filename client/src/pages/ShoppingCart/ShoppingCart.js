import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getOrder } from "../../redux/cart/selectors";
import CartItem from "../../components/CartItem/CartItem";
import {
  removeCartItem,
  plusCartItem,
  minusCartItem,
  clearCart,
} from "../../redux/cart/actions";
import { CartForm } from "../../components/Form/Form";
import s from "./ShoppingCart.module.css";
import { orderActions } from '../../redux/orders/saga/constants';
import { postThunkDataOrders } from "../../redux/orders/thunks";

export function ShoppingCart() {
  const { totalPrice, totalCount, items } = useSelector(({ cart }) => cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const order = useSelector(getOrder);

  const addedProducts = Object.keys(items).map((key) => {
    return items[key].items[0];
  });

  const onRemoveItem = (id) => {
    if (window.confirm("Do you really want to remove?")) {
      dispatch(removeCartItem(id));
    }
  };

  const handleFetch = () => {
    // dispatch(orderActions.init({ pieces: order }));
    dispatch(postThunkDataOrders({ pieces: order }))
    dispatch(clearCart());
    navigate(`/orders`);
  };

  return (
    <div className={s.cart}>
      {addedProducts.length ? (
        <>
          <div className={s.container}>
            <CartForm />

            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Quantity</th>
                  <th>Price</th>
                  <th>Sum</th>
                  <th>Quantity</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {addedProducts.map((item) => (
                  <CartItem
                    key={item.id}
                    {...item}
                    totalPrice={items[item.id].totalPrice}
                    totalCount={items[item.id].items.length}
                    onRemove={() => {
                      onRemoveItem(item.id);
                    }}
                    onMinus={() => {
                      dispatch(minusCartItem(item.id));
                    }}
                    onPlus={() => {
                      dispatch(plusCartItem(item.id));
                    }}
                  />
                ))}
                <tr style={{ backgroundColor: "#ffbe28" }}>
                  <th colSpan="3" style={{ textTransform: "uppercase" }}>
                    Total price
                  </th>
                  <th>{totalPrice}</th>
                  <th>{totalCount}</th>
                </tr>
              </tbody>
            </table>
            <button className={s.btn} onClick={handleFetch}>
              submit
            </button>
          </div>{" "}
        </>
      ) : (
        <h5>Your cart is empty</h5>
      )}
    </div>
  );
}
