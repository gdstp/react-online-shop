import Button from "components/ui/Button";
import CartTotal from "components/ui/CartTotal";
import { AppCtx } from "context";
import React, { useContext, useState } from "react";
import OrderItem from "./OrderItem";

const Order: React.FC = () => {
  const { cart } = useContext(AppCtx);
  const [showMore, setShowMore] = useState(cart.length > 5);

  return (
    <div className="w-1/3">
      <p className="pb-2 border-b">Your order</p>
      <div className="flex flex-col">
        {cart.map((item, index) => (
          <OrderItem
            title={item.title}
            price={item.price}
            image={item.image}
            quantity={item.quantity}
          />
        ))}
        {showMore && (
          <p
            className="text-center text-sm py-3 border-b"
            onClick={() => setShowMore(!showMore)}
          >
            Show all
          </p>
        )}
        <p className="flex text-sm mt-2">
          Delivery
          <span className="ml-4">
            <strong>$20</strong>(Express Delivery)
          </span>
        </p>
      </div>
      <CartTotal className="pt-2 border-t mt-3" />
      <Button text="Proceed to Payment" onClick={() => {}} />
    </div>
  );
};

export default Order;
