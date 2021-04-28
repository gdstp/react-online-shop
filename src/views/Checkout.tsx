import React from "react";
import SectionHeader from "components/sections/SectionHeader";
import Button from "components/ui/Button";
import { Link } from "react-router-dom";
import CartTotal from "components/ui/CartTotal";
import Input from "components/ui/Input";
import Order from "components/sections/partials/Order";
import CategoryFilterItem from "components/sections/partials/CategoryFilterItem";

const Checkout: React.FC = () => {
  return (
    <div>
      <SectionHeader text="Checkout" />
      <div className="flex justify-between mt-6">
        <div className="w-2/3 h-1/2 flex flex-col justify-between">
          <div className="w-full flex justify-between">
            <Input name="E-mail" />
            <Input name="Phone" />
          </div>

          <p className="font-semibold text-2xl mt-6">Shipping address</p>
          <div className="w-full flex justify-between mt-3">
            <Input name="First name" />
            <Input name="Last name" />
          </div>

          <div className="w-full flex justify-between mt-3">
            <Input name="Address" />
            <Input name="Apt, suite, etc" />
          </div>

          <div className="w-full flex justify-between mt-3">
            <Input name="City" />
            <Input name="Country" />
          </div>

          <div className="w-1/2 flex justify-between mt-3">
            <Input name="Postal code" />
          </div>

          <p className="font-semibold text-2xl mt-6">Payment Method</p>
          <CategoryFilterItem
            title=""
            items={["Visa / Mastercard", "Paypal"]}
          />
        </div>
        <Order />
      </div>
    </div>
  );
};

export default Checkout;
