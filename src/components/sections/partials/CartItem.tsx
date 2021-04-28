import ProductImage from "components/ui/ProductImage";
import { AppCtx, CartInterface } from "context";
import React, { useContext, useEffect, useState } from "react";
import { BsCaretDownFill, BsCaretUpFill } from "react-icons/bs";
import { MdClose } from "react-icons/md";

const CartItem: React.FC<CartInterface> = ({
  id,
  title,
  price,
  quantity,
  image,
}) => {
  const { updateCart } = useContext(AppCtx);
  const [finalPrice, setFinalPrice] = useState(0);
  const [amount, setAmount] = useState(quantity);

  useEffect(() => {
    setFinalPrice(parseFloat(price) * parseInt(amount));
  }, [price, amount]);

  const removeItem = () => {
    updateCart({
      type: "REMOVE",
      item: { id, image, title, price, quantity },
    });
  };

  const updateQuantity = (value: number) => {
    const newValue = parseInt(amount) + value;
    if (newValue <= 0) return removeItem();
    if (newValue > 5) return;
    setAmount(newValue.toString());
    updateCart({
      type: "UPDATE",
      item: { id, image, title, price, quantity: newValue.toString() },
    });
  };

  return (
    <div className="w-full flex flex-col" key={id}>
      <div className="w-full flex border-b">
        <div className="w-2/3 h-48 flex items-center">
          <div className="w-32 h-40">
            <ProductImage image={image} />
          </div>
          <div className="h-full flex items-center">
            <p className="font-bold ml-10">{title}</p>
          </div>
        </div>

        <div className="w-1/3 flex items-center justify-between">
          <div>${price}</div>
          <div className="flex items-center border justify-between w-14 px-2 py-2">
            {amount}
            <div className="flex flex-col ml-1">
              <BsCaretUpFill size={14} onClick={() => updateQuantity(+1)} />
              <BsCaretDownFill size={14} onClick={() => updateQuantity(-1)} />
            </div>
          </div>
          <div className="font-bold">${finalPrice}</div>
          <MdClose
            className="text-red-400 cursor-pointer"
            size={24}
            onClick={() => removeItem()}
          />
        </div>
      </div>
    </div>
  );
};

export default CartItem;
