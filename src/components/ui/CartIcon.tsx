import { AppCtx } from "context";
import React, { useContext, useEffect, useState } from "react";
import { BiCart } from "react-icons/bi";
import { Link } from "react-router-dom";

const CartItem: React.FC = () => {
  const { cart } = useContext(AppCtx);
  const [number, setNumber] = useState(cart.length.toString());

  useEffect(() => {
    cart.length <= 9 ? setNumber(cart.length.toString()) : setNumber("9+");
  }, [cart]);

  return (
    <Link to="/cart">
      <div className="relative">
        <div className="absolute flex items-center justify-center w-5 h-5 bg-red-500 text-xs -mt-2 ml-7 font-bold text-white rounded-full">
          {number}
        </div>
        <BiCart size={20} className="mx-4" />
      </div>
    </Link>
  );
};

export default CartItem;
