import React from "react";
import Button from "components/ui/Button";
import CartTotal from "components/ui/CartTotal";
import { Link } from "react-router-dom";

const CheckoutButton: React.FC = () => {
  return (
    <div className="w-full mt-6 pt-6 border-t flex justify-end">
      <div>
        <CartTotal />
        <Link to="/checkout">
          <Button text="Proceed to Checkout" onClick={() => {}} />
        </Link>
      </div>
    </div>
  );
};

export default CheckoutButton;
