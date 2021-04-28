import { AppCtx } from "context";
import React, { useContext, useEffect, useState } from "react";

const CartTotal: React.FC<Partial<HTMLDivElement>> = ({ ...rest }) => {
  const { cart } = useContext(AppCtx);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    let valueItem = 0;
    cart.map((item) => {
      valueItem = valueItem + parseInt(item.quantity) * parseFloat(item.price);
      setTotal(valueItem + 20);
    });
    cart.length === 0 && setTotal(0);
  }, [cart]);

  return (
    <div className={`flex mb-4 ${rest.className}`}>
      <p className="flex w-full justify-between font-light text-4xl">
        Total
        <span className="font-bold text-3xl">${total}</span>
      </p>
    </div>
  );
};

export default CartTotal;
