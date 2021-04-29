import React, { useContext } from "react";
import Button from "components/ui/Button";
import CartTotal from "components/ui/CartTotal";
import { Link } from "react-router-dom";
import { AppCtx } from "context";

const CheckoutButton: React.FC = () => {
  const { cart } = useContext(AppCtx);
  return (
    <div className="w-full mt-6 pt-6 border-t flex justify-end">
      <div>
        <CartTotal />
        {cart.length > 0 && (
          <Link to="/checkout">
            <Button text="Proceed to Checkout" onClick={() => {}} />
          </Link>
        )}
      </div>
    </div>
  );
};

export default CheckoutButton;
