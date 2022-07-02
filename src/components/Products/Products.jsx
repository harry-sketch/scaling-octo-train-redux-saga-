import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../../redux/actions/CartActions/cartActions";
import { getProducts } from "../../redux/actions/ProductActions/productActions";

const Products = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.productReducer);

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <div className=" rounded-lg h-full px-[5%] pb-[8%] grid grid-cols-4 gap-10 shadow-xl w-full">
      {data.map((item, idx) => (
        <div key={idx} className="shadow-md h-full mb-2 ">
          <img
            src={item.photo}
            alt={item.name}
            className="object-contain w-full h-full"
          />
          <div className="mt-2 flex items-center justify-between">
            <span className="text-base font-medium text-black">
              {item.name}
            </span>
            <span className="text-base font-medium text-black">
              {item.price}
            </span>
          </div>
          <div className="flex items-center justify-center mt-2 pb-3">
            <button
              className="bg-green-500 p-3 rounded-xl cursor-pointer z-50"
              onClick={() => dispatch(addToCart(item))}
            >
              Add To Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
