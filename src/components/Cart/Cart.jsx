import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  clearCart,
  removeFromCart,
} from "../../redux/actions/CartActions/cartActions";

const Cart = () => {
  const dispatch = useDispatch();
  const { cartList } = useSelector((state) => state.cartReducer);
  const amount =
    cartList.length &&
    cartList.map((item) => item.price).reduce((prev, next) => prev + next);
  const discount = amount / 10;

  return (
    <div className="flex items-center justify-between w-full p-4">
      {cartList.length > 0 ? (
        <div className="w-[80%] border-2">
          {cartList.map((item, idx) => (
            <div
              key={idx}
              className="w-full flex items-center justify-between my-2"
            >
              <span>name:&nbsp;&nbsp;{item.name}</span>
              <span>category:&nbsp;&nbsp;{item.category}</span>
              <span>price:&nbsp;&nbsp;{item.price}</span>
              <span>color:&nbsp;&nbsp;{item.color}</span>
              <button
                className="bg-red-400 cursor-pointer px-4 py-2"
                onClick={() => dispatch(removeFromCart(item.id))}
              >
                Remove from Cart
              </button>
            </div>
          ))}
          <button
            className="mt-4 m-auto flex items-center justify-center bg-red-500 px-4 py-2 cursor-pointer"
            onClick={() => dispatch(clearCart())}
          >
            Clear Cart
          </button>
        </div>
      ) : (
        <div>no items in the cart please add items</div>
      )}
      <div>
        <div>Total Amount: {amount}</div>
        <div>discount: {discount}</div>
        <div>payable: {amount - discount}</div>
      </div>
    </div>
  );
};

export default Cart;
