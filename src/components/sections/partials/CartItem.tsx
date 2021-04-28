import { AppCtx, CartInterface } from "context";
import React, { useContext } from "react";
import { MdClose } from "react-icons/md";
import styled from "styled-components";

const Image = styled.div<{ image: string }>`
  width: 100%;
  height: 100%;
  background: url(${(props) => props.image});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
`;

const CartItem: React.FC<CartInterface> = ({
  id,
  title,
  price,
  quantity,
  image,
}) => {
  const { updateCart } = useContext(AppCtx);

  return (
    <div className="w-full flex flex-col" key={id}>
      <div className="w-full flex border-b">
        <div className="w-2/3 h-48 flex items-center">
          <div className="w-32 h-40">
            <Image image={image} />
          </div>
          <div className="h-full flex items-center">
            <p className="font-bold ml-10">{title}</p>
          </div>
        </div>

        <div className="w-1/3 flex items-center justify-between">
          <div>${price}</div>
          <div>{quantity}</div>
          <div className="font-bold">
            ${parseFloat(price) * parseInt(quantity)}
          </div>
          <MdClose
            className="text-red-400 cursor-pointer"
            size={24}
            onClick={() =>
              updateCart({
                type: "REMOVE",
                item: { id, image, title, price, quantity },
              })
            }
          />
        </div>
      </div>
    </div>
  );
};

export default CartItem;
