import React, { useContext } from "react";
import SectionHeader from "components/sections/SectionHeader";
import Input from "components/ui/Input";
import Order from "components/sections/partials/Order";
import CategoryFilterItem from "components/sections/partials/CategoryFilterItem";
import { useForm } from "react-hook-form";
import { AppCtx, CartInterface } from "context";

const Checkout: React.FC = () => {
  const { cart, updateCart } = useContext(AppCtx);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
    updateCart({ type: "RESET", item: {} as CartInterface });
    window.location.href = "/checkout-complete";
  };

  return (
    <div>
      <SectionHeader text="Checkout" />
      <div className="flex flex-col-reverse lg:flex-row justify-between mt-6">
        <form
          className="lg:w-2/3 h-1/2 lg:mt-0 mt-4 flex flex-col justify-between"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="w-full flex lg:flex-row flex-col justify-between">
            <Input
              label="E-mail"
              register={register}
              errors={errors}
              required
            />
            <Input label="Phone" register={register} errors={errors} required />
          </div>

          <p className="font-semibold text-2xl mt-6">Shipping address</p>
          <div className="w-full flex lg:flex-row flex-col justify-between mt-3">
            <Input
              label="First name"
              register={register}
              errors={errors}
              required
            />
            <Input
              label="Last name"
              register={register}
              errors={errors}
              required
            />
          </div>

          <div className="w-full flex lg:flex-row flex-col justify-between mt-3">
            <Input
              label="Address"
              register={register}
              errors={errors}
              required
            />
            <Input
              label="Apt, suite, etc"
              register={register}
              errors={errors}
              required
            />
          </div>

          <div className="w-full flex lg:flex-row flex-col justify-between mt-3">
            <Input label="City" register={register} errors={errors} required />
            <Input
              label="Country"
              register={register}
              errors={errors}
              required
            />
          </div>

          <div className="w-full lg:w-1/2 flex lg:flex-row flex-col justify-between mt-3">
            <Input
              label="Postal Code"
              register={register}
              errors={errors}
              required
            />
          </div>

          <p className="font-semibold text-2xl mt-6">Payment Method</p>
          <CategoryFilterItem
            title=""
            items={["Visa / Mastercard", "Paypal"]}
          />
          <div className="w-full flex lg:flex-row flex-col justify-center mt-10">
            <button
              type="submit"
              disabled={cart.length === 0 ? true : false}
              className={`w-2/3 h-12 text-white bg-black flex items-center justify-center font-bold ${
                cart.length === 0 ? "cursor-not-allowed" : "cursor-pointer"
              }`}
            >
              Proceed to Payment
            </button>
          </div>
        </form>
        <Order />
      </div>
    </div>
  );
};

export default Checkout;
