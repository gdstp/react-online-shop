import ProductImage from "components/ui/ProductImage";
import React from "react";
import ReactTooltip from "react-tooltip";

const OrderItem: React.FC<{
  image: string;
  title: string;
  price: string;
  quantity: string;
}> = ({ image, title, price, quantity }) => {
  return (
    <div className="flex py-4 border-b">
      <div className="w-24 h-24">
        <ProductImage image={image} />
      </div>
      <div className="ml-4 w-1/2">
        <div className="font-semibold text-sm">
          <span data-tip={title}>{title.slice(0, 27) + "..."}</span>
          <ReactTooltip />
        </div>
        <div className="mt-1 text-sm">
          <span className="font-bold text-md">${price}</span> x{quantity}
        </div>
      </div>
    </div>
  );
};

export default OrderItem;
