import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { searchProducts } from "../../redux/actions/ProductActions/productActions";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { cartList } = useSelector((state) => state.cartReducer);

  return (
    <div className="py-[2%] px-[5%] bg-[#F5F5F5] rounded-lg flex items-center justify-between mb-4 w-full">
      <div
        className="text-black font-bold text-2xl cursor-pointer"
        onClick={() => navigate("/")}
      >
        Redux-Saga Shopping Cart
      </div>
      <div className="bg-slate-400 w-[50%] rounded-lg">
        <input
          type="text"
          className="bg-transparent outline-none border-none p-3"
          onChange={(e) => dispatch(searchProducts(e.target.value))}
        />
      </div>
      <div
        className="relative cursor-pointer"
        onClick={() => navigate("/Cart")}
      >
        <span className="absolute bg-black -top-4 h-5 w-5  flex items-center justify-center rounded-full text-white -right-2 cursor-pointer">
          {cartList.length}
        </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      </div>
    </div>
  );
};

export default Header;
