import CartItem from "components/sections/partials/CartItem";
import CategoryFilterItem from "components/sections/partials/CategoryFilterItem";
import CheckoutButton from "components/sections/partials/CheckoutButton";
import SectionHeader from "components/sections/SectionHeader";
import { AppCtx } from "context";
import React, { useContext } from "react";
import { BsArrowRightShort } from "react-icons/bs";

const Cart: React.FC = () => {
  const { cart } = useContext(AppCtx);

  return (
    <div>
      <SectionHeader text="Shopping Cart" />

      <div className="w-full flex mt-3 border-b h-10">
        <div className="w-2/3">Product</div>
        <div className="w-1/4 flex justify-between">
          <div>Price</div>
          <div>Quantity</div>
          <div>Total</div>
        </div>
      </div>
      {cart.length === 0 && (
        <p className="text-center mt-4 pb-4 border-b text-2xl text-gray-400">
          Your shopping cart is empty.
        </p>
      )}
      {cart.map((item) => (
        <CartItem
          key={item.id}
          id={item.id}
          title={item.title}
          quantity={item.quantity}
          image={item.image}
          price={item.price}
        />
      ))}

      <div className="w-full flex justify-between items-center mt-4">
        <div className="mt-1">
          <p className="text-sm">Do you have a discount?</p>
          <div className="w-96 flex items-center mt-1">
            <input
              type="text"
              className="w-80 h-12 px-4 bg-gray-100"
              placeholder="Coupon Code"
            />
            <button className="w-14 h-14 -ml-8 rounded-full bg-black flex items-center justify-center">
              <BsArrowRightShort size={20} color="white" />
            </button>
          </div>
        </div>

        <CategoryFilterItem title="Shipping" items={["Express Delivery $20"]} />
      </div>

      <CheckoutButton />
    </div>
  );
};

export default Cart;
