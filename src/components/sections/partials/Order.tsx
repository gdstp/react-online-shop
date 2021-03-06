import React, { useContext } from "react";
import CartTotal from "components/ui/CartTotal";
import { AppCtx } from "context";
import OrderItem from "./OrderItem";

const Order: React.FC = () => {
  const { cart } = useContext(AppCtx);

  return (
    <div className="w-full lg:w-1/3">
      <p className="pb-2 border-b">Your order</p>
      <div className="flex flex-col">
        {cart.map((item) => (
          <OrderItem
            key={item.id}
            title={item.title}
            price={item.price}
            image={item.image}
            quantity={item.quantity}
          />
        ))}
        <p className="flex text-sm mt-2">
          Delivery
          <span className="ml-4">
            <strong>$20</strong>(Express Delivery)
          </span>
        </p>
      </div>
      <CartTotal className="pt-2 border-t mt-3" />
    </div>
  );
};

export default Order;
